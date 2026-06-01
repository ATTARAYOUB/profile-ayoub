# 📄 Country-Specific CV Customization Guide

## 🎯 Overview

The `/hire-me` page has 3 download buttons for country-specific CVs:
- 🇨🇦 **Canada** - Express Entry · Healthcare IT demand
- 🇦🇺 **Australia** - Skilled Migration · Biomedical shortage
- 🇵🇹 **Portugal / EU** - Tech Visa · EU access

Currently, the code expects these files in the `public/` folder:
- `/cv-canada.pdf`
- `/cv-australia.pdf`
- `/cv-portugal.pdf`

---

## 📋 What to Customize for Each Country

### 🇨🇦 **Canada CV (`cv-canada.pdf`)**

**Key Focus Areas:**
- ✅ **Express Entry Points** - Highlight education, work experience, language skills
- ✅ **Healthcare IT Demand** - Emphasize BD Rowa, Pyxis, HL7 integration
- ✅ **NOC Code** - Include relevant NOC code (e.g., 2147 - Computer Engineers, 2171 - Information Systems Analysts)
- ✅ **Canadian Format** - Use Canadian spelling (e.g., "colour", "centre")
- ✅ **Certifications** - Highlight medical device certifications
- ✅ **Bilingual** - Mention French if applicable (bonus points)

**Recommended Sections:**
1. Professional Summary (2-3 lines)
2. Core Competencies (bullet points)
3. Professional Experience (reverse chronological)
4. Technical Skills (categorized)
5. Certifications & Training
6. Education
7. Languages (English, French, Arabic, etc.)

**Tone:** Professional, achievement-focused, quantify results

**Example Summary:**
```
Healthcare Technology Specialist & Full-Stack Developer with 5+ years of experience 
maintaining critical hospital automation systems. Certified in BD Rowa™ VMAX 160 and 
Pyxis Medstation systems. Proven track record of zero-downtime maintenance on mission-
critical medical devices. Seeking opportunities in Canada's growing healthcare IT sector.
```

---

### 🇦🇺 **Australia CV (`cv-australia.pdf`)**

**Key Focus Areas:**
- ✅ **Skilled Migration** - Align with ANZSCO codes (e.g., 261313 - Software Engineer, 263111 - Computer Network and Systems Engineer)
- ✅ **Biomedical Shortage** - Emphasize biomedical engineering + IT hybrid skills
- ✅ **Australian Format** - Use Australian spelling (e.g., "colour", "centre")
- ✅ **Healthcare Experience** - Highlight hospital system maintenance
- ✅ **Certifications** - Medical device certifications are highly valued
- ✅ **Visa Readiness** - Mention willingness to relocate

**Recommended Sections:**
1. Career Profile (3-4 lines)
2. Key Skills & Competencies
3. Professional Experience (detailed, achievement-focused)
4. Technical Proficiencies
5. Certifications & Professional Development
6. Education & Qualifications
7. Referees (available upon request)

**Tone:** Direct, results-oriented, emphasize problem-solving

**Example Summary:**
```
Biomedical IT Specialist with dual expertise in healthcare technology and full-stack 
software development. 5+ years maintaining BD Rowa™ VMAX and Pyxis Medstation systems 
in live hospital environments. Proven ability to integrate HL7 messaging, CCE systems, 
and hospital IT infrastructure. Seeking to contribute to Australia's healthcare 
technology sector.
```

---

### 🇵🇹 **Portugal / EU CV (`cv-portugal.pdf`)**

**Key Focus Areas:**
- ✅ **Tech Visa** - Highlight software development skills (Java, Python, Flutter, React)
- ✅ **EU Access** - Mention openness to work across EU
- ✅ **Europass Format** (optional but recommended for EU)
- ✅ **European Spelling** - Use British English (e.g., "colour", "centre")
- ✅ **Multilingual** - Emphasize language skills (English, French, Arabic)
- ✅ **Remote Work** - Mention remote work experience if applicable

**Recommended Sections:**
1. Personal Information (Name, Contact, Nationality)
2. Professional Profile
3. Work Experience (reverse chronological)
4. Education & Training
5. Technical Skills (detailed)
6. Certifications
7. Language Skills (CEFR levels if possible)
8. Digital Competences

**Tone:** Balanced, emphasize adaptability and European work culture fit

**Example Summary:**
```
Full-Stack Developer & Healthcare Technology Specialist with 5+ years of experience 
in software development and biomedical IT systems. Expertise in Java, Python, Flutter, 
React, and Django. Certified in BD Rowa™ VMAX and Pyxis Medstation medical automation 
systems. Multilingual professional seeking opportunities in Portugal's growing tech 
ecosystem with potential for EU-wide projects.
```

---

## 🎨 Design Recommendations

### **All CVs Should Have:**
- ✅ Clean, professional layout
- ✅ ATS-friendly (Applicant Tracking System)
- ✅ Clear section headings
- ✅ Consistent formatting
- ✅ Contact information at top
- ✅ LinkedIn & Portfolio links
- ✅ **Link to /hire-me page:** `https://attarayoub.vercel.app/hire-me`

### **Color Scheme (Optional):**
- Primary: #00d4ff (cyan - matches your portfolio)
- Accent: #7b61ff (purple)
- Text: Dark gray/black
- Background: White

---

## 📊 Key Differences Summary

| Aspect | 🇨🇦 Canada | 🇦🇺 Australia | 🇵🇹 Portugal/EU |
|--------|-----------|--------------|----------------|
| **Format** | North American | Australian | Europass (optional) |
| **Length** | 2 pages max | 2-3 pages | 2 pages |
| **Focus** | Express Entry points | Skilled migration | Tech visa eligibility |
| **Emphasis** | Healthcare IT | Biomedical hybrid | Software development |
| **Spelling** | Canadian English | Australian English | British English |
| **Tone** | Achievement-focused | Results-oriented | Balanced, adaptable |
| **Key Skills** | HL7, Pyxis, Rowa | Biomedical + IT | Full-stack + Healthcare |

---

## 🛠️ How to Create the CVs

### **Option 1: Use Online Tools**
- **Canva** - Professional templates, easy to customize
- **Overleaf** - LaTeX templates (very professional)
- **Microsoft Word** - Classic approach
- **Google Docs** - Collaborative editing

### **Option 2: Use CV Builders**
- **Europass** (for Portugal/EU) - https://europa.eu/europass
- **Resume.io** - Modern templates
- **Novoresume** - ATS-friendly templates
- **Zety** - Country-specific templates

### **Option 3: Hire a Professional**
- Fiverr - CV writing services ($20-100)
- Upwork - Professional CV writers
- TopResume - Specialized service

---

## 📁 File Placement

Once you create the CVs, place them in the `public/` folder:

```
portfolio/
├── public/
│   ├── cv-canada.pdf       ← Create this
│   ├── cv-australia.pdf    ← Create this
│   ├── cv-portugal.pdf     ← Create this
│   ├── cv-print.html       ← Already exists (generic)
│   ├── profile.png
│   └── favicon.svg
```

---

## 🔗 Update Links (Already Done)

The code has been updated to point to:
- Canada: `/cv-canada.pdf`
- Australia: `/cv-australia.pdf`
- Portugal: `/cv-portugal.pdf`

---

## ✅ Checklist for Each CV

### **Content:**
- [ ] Tailored summary for target country
- [ ] Relevant job codes (NOC/ANZSCO)
- [ ] Country-specific spelling
- [ ] Quantified achievements
- [ ] Relevant certifications highlighted
- [ ] Language skills listed
- [ ] Contact information
- [ ] Portfolio link: `https://attarayoub.vercel.app`
- [ ] Hire me link: `https://attarayoub.vercel.app/hire-me`

### **Format:**
- [ ] ATS-friendly (no complex graphics)
- [ ] Clear section headings
- [ ] Consistent formatting
- [ ] Professional font (Arial, Calibri, Times New Roman)
- [ ] Proper margins (0.5-1 inch)
- [ ] PDF format (not Word)
- [ ] File size < 2MB

### **Proofreading:**
- [ ] No spelling errors
- [ ] No grammar mistakes
- [ ] Consistent tense (past for previous jobs, present for current)
- [ ] No personal pronouns (I, me, my)
- [ ] Professional email address
- [ ] Working phone number

---

## 🚀 Quick Start (If You Don't Have Time)

### **Temporary Solution:**
Use the same CV for all three countries initially:

```javascript
// In HireMe.jsx - Temporary fallback
const TARGETS = [
  {
    flag:    '🇨🇦',
    country: 'Canada',
    color:   '#d52b1e',
    note:    'Express Entry · Healthcare IT demand',
    href:    '/cv-print.html',  // Use generic CV temporarily
  },
  // ... same for others
]
```

Then gradually create country-specific versions.

---

## 📊 Priority Order

If you can only create one custom CV first:

1. **🇨🇦 Canada** - Highest demand for healthcare IT
2. **🇦🇺 Australia** - Strong biomedical sector
3. **🇵🇹 Portugal** - Growing tech hub, EU access

---

## 💡 Pro Tips

### **For Canada:**
- Mention "Express Entry" in summary
- Include NOC code in job titles
- Quantify everything (e.g., "Maintained 15+ Pyxis units")
- Highlight zero-downtime achievements

### **For Australia:**
- Use ANZSCO codes
- Emphasize problem-solving
- Include "Skilled Migration" keywords
- Mention willingness to relocate

### **For Portugal/EU:**
- Use Europass format (optional)
- Emphasize multilingual skills
- Mention remote work capability
- Highlight EU work authorization readiness

---

## 📧 Email Template for CV Writers

If you hire someone to create your CVs:

```
Subject: Country-Specific CV Creation - Healthcare Tech + Full-Stack Developer

Hi [Name],

I need 3 country-specific CVs tailored for:
1. Canada (Express Entry, Healthcare IT focus)
2. Australia (Skilled Migration, Biomedical focus)
3. Portugal/EU (Tech Visa, Software Development focus)

My background:
- 5+ years Healthcare Technology + Full-Stack Development
- Certified in BD Rowa™ VMAX & Pyxis Medstation
- Skills: Java, Python, Flutter, React, Django, HL7, Healthcare IT
- Current role: Maintenance Manager at Morocco Healthcare Supplier

Portfolio: https://attarayoub.vercel.app
Pitch page: https://attarayoub.vercel.app/hire-me

Please create ATS-friendly PDFs with country-specific formatting and keywords.

Budget: $[your budget]
Timeline: [your timeline]

Thanks!
Attar Ayoub
```

---

## 🎯 Next Steps

1. **Create the 3 CV files** (or use generic CV temporarily)
2. **Save as PDF** with exact names:
   - `cv-canada.pdf`
   - `cv-australia.pdf`
   - `cv-portugal.pdf`
3. **Place in `public/` folder**
4. **Test downloads** after deployment
5. **Update regularly** as you gain experience

---

## 🐛 Troubleshooting

### **Issue: 404 when downloading CV**
**Solution:** Make sure files are in `public/` folder with exact names

### **Issue: CV not updating**
**Solution:** Clear browser cache or use incognito mode

### **Issue: File too large**
**Solution:** Compress PDF using online tools (keep under 2MB)

---

## ✅ Current Status

- [x] Code updated to point to country-specific CVs
- [ ] Create `cv-canada.pdf`
- [ ] Create `cv-australia.pdf`
- [ ] Create `cv-portugal.pdf`
- [ ] Place files in `public/` folder
- [ ] Test downloads
- [ ] Deploy

---

**Recommendation:** Start with one generic CV for all three buttons, then gradually create customized versions as you apply to specific countries. The infrastructure is ready! 🚀
