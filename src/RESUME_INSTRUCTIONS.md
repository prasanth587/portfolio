# 📄 Resume Setup Instructions

## How to Add Your Resume PDF via VS Code

To enable the resume download functionality in your portfolio:

### Step 1: Prepare Your Resume
1. Create or update your resume in PDF format
2. Name it: `Prasanth_Mudaliyar_Resume.pdf`
3. Make sure the file size is reasonable (under 5MB recommended)

### Step 2: Upload Your Resume via VS Code
1. Open your project in VS Code
2. Create a `public` folder in your project root (if it doesn't exist)
3. Create a `resume` folder inside `public`: `public/resume/`
4. Drag and drop your PDF file into the resume folder: `public/resume/Prasanth_Mudaliyar_Resume.pdf`

### Step 3: File Structure (VS Code)
Your project structure should look like this:
```
your-project/
├── public/
│   └── resume/
│       └── Prasanth_Mudaliyar_Resume.pdf  ← Add your PDF here via VS Code
├── components/
├── styles/
├── App.tsx
└── ...
```

### Step 4: Verify (Optional)
The resume buttons are already configured to work with the PDF file path above. If you want to use a different filename:

1. Open `/components/HeroSection.tsx` in VS Code
2. Find the line: `const resumeUrl = '/resume/Prasanth_Mudaliyar_Resume.pdf';`
3. Update the filename to match your PDF

4. Open `/components/AboutSection.tsx` in VS Code
5. Find the same line and update it there too

### Current Resume Button Locations:
✅ **Floating Download Button** (bottom-right corner of homepage)
✅ **Download Resume Button** (in the About section)

### What Happens Now:
- Currently shows a "Resume Coming Soon!" notification
- Once you add the PDF file via VS Code, it will automatically download when clicked
- The buttons have smooth animations and proper accessibility features
- Professional PDF format works across all devices and platforms

### VS Code Tips:
- Use the **File Explorer** panel on the left to navigate to the `public/resume/` folder
- You can **drag and drop** your PDF directly from your computer into VS Code
- **Right-click** in the resume folder and select "Upload" if drag-and-drop doesn't work
- The file will be automatically saved to your project

That's it! Once you add the PDF file via VS Code, the resume download will work automatically. 🚀

**Benefits of PDF Format:**
✅ **Universal Compatibility** - Opens on any device
✅ **Professional Standard** - Industry standard for resumes
✅ **Preserves Formatting** - Looks exactly as intended
✅ **Easy to Share** - Widely accepted format