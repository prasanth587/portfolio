import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-baa08b7c/health", (c) => {
  return c.json({ status: "ok" });
});

// Get contact submissions endpoint (for you to view submissions)
app.get("/make-server-baa08b7c/contacts", async (c) => {
  try {
    // Get all contact submissions
    const contacts = await kv.getByPrefix("contact_");
    
    // Sort by timestamp (newest first)
    const sortedContacts = contacts.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return c.json({ 
      success: true, 
      contacts: sortedContacts,
      count: sortedContacts.length
    });

  } catch (error) {
    console.error("Get contacts error:", error);
    return c.json({ error: "Failed to retrieve contacts" }, 500);
  }
});

// Contact form endpoint
app.post("/make-server-baa08b7c/contact", async (c) => {
  try {
    const { name, email, subject, message } = await c.req.json();
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return c.json({ error: "All fields are required" }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: "Invalid email format" }, 400);
    }

    // Generate unique contact ID
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store contact submission in KV store
    const contactData = {
      id: contactId,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      status: 'new',
      userAgent: c.req.header('user-agent') || 'unknown',
      ip: c.req.header('x-forwarded-for') || 'unknown'
    };

    await kv.set(contactId, contactData);

    console.log("Contact form submission stored:", {
      id: contactId,
      name,
      email,
      subject,
      timestamp: contactData.timestamp
    });

    return c.json({ 
      success: true, 
      message: "Thank you for your message! I'll get back to you soon.",
      id: contactId
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return c.json({ error: "Failed to save your message. Please try again." }, 500);
  }
});

Deno.serve(app.fetch);