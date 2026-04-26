# Resume PDF Instructions

## How to Add Your Resume:

1. **Save your resume** as `resume.pdf` in this folder
2. **File name**: Must be exactly `resume.pdf`
3. **File format**: PDF (recommended for professional appearance)

## Current Setup:
- Your portfolio is configured to link to `/documents/resume.pdf`
- The resume button will open the PDF in a new tab
- Users can view online or download directly
- Professional download experience with proper file handling

## Alternative File Names:
If you prefer a different filename, update the `href` attribute in `views/index.ejs`:
```html
<a href="/documents/YOUR_FILENAME.pdf" class="btn btn-primary" id="resume-download-btn" target="_blank" rel="noopener noreferrer">
```

## Resume Requirements:
- **Format**: PDF (best for professional appearance)
- **File size**: Keep under 5MB for fast loading
- **Content**: Include your latest experience, skills, and education
- **Design**: Professional and well-formatted

## Features:
- ✅ Opens in new tab for better user experience
- ✅ Direct download capability
- ✅ Professional appearance
- ✅ Mobile-friendly
- ✅ SEO optimized with proper alt text

## Next Steps:
1. Save your resume as `resume.pdf`
2. Place it in this `public/documents/` folder
3. Refresh your portfolio at `http://localhost:3000`
4. Test the resume download button

## Security Note:
The `rel="noopener noreferrer"` attribute ensures secure opening of the PDF in a new tab.


