import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Mail, User, Calendar, MessageSquare, RefreshCw, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  status: string;
  userAgent?: string;
  ip?: string;
}

interface ContactsAdminProps {
  onBack: () => void;
}

export function ContactsAdmin({ onBack }: ContactsAdminProps) {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchContacts = async (showToast = false) => {
    try {
      setRefreshing(true);
      const { projectId, publicAnonKey } = await import('../utils/supabase/info');
      
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-baa08b7c/contacts`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setContacts(result.contacts || []);
        if (showToast) {
          toast.success(`Refreshed! Found ${result.contacts?.length || 0} contacts`);
        }
      } else {
        throw new Error('Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      toast.error('Failed to fetch contacts');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata',
      timeZoneName: 'short'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'read': return 'bg-yellow-500';
      case 'replied': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white">Loading contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <Button
              onClick={onBack}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
            <div>
              <h1 className="text-3xl font-bold gradient-text">Contact Submissions</h1>
              <p className="text-gray-400 mt-1">Manage your portfolio contact form submissions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
              {contacts.length} Total Contacts
            </Badge>
            <Button
              onClick={() => fetchContacts(true)}
              disabled={refreshing}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </motion.div>

        {/* Contacts List */}
        <div className="space-y-6">
          {contacts.length === 0 ? (
            <Card className="glass-effect border-white/10 text-center py-12">
              <CardContent>
                <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No contacts yet</h3>
                <p className="text-gray-400">Contact form submissions will appear here when received.</p>
              </CardContent>
            </Card>
          ) : (
            contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-effect border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <User className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <CardTitle className="text-white">{contact.name}</CardTitle>
                          <div className="flex items-center gap-4 mt-1">
                            <a 
                              href={`mailto:${contact.email}`}
                              className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                            >
                              <Mail className="h-3 w-3" />
                              {contact.email}
                            </a>
                            <div className="flex items-center gap-1 text-gray-400 text-sm">
                              <Calendar className="h-3 w-3" />
                              {formatDate(contact.timestamp)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(contact.status)} text-white`}>
                        {contact.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          {contact.subject}
                        </h4>
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <p className="text-gray-300 whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      </div>
                      
                      {(contact.userAgent || contact.ip) && (
                        <>
                          <Separator className="bg-white/10" />
                          <div className="text-xs text-gray-500 space-y-1">
                            {contact.ip && contact.ip !== 'unknown' && (
                              <p>IP: {contact.ip}</p>
                            )}
                            {contact.userAgent && contact.userAgent !== 'unknown' && (
                              <p>User Agent: {contact.userAgent}</p>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            💡 Tip: Click on email addresses to open your email client
          </p>
        </motion.div>
      </div>
    </div>
  );
}