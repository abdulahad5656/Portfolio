# 🚀 Deploy Your Portfolio to Vercel

## Prerequisites
- [Git](https://git-scm.com/) installed on your computer
- [GitHub](https://github.com/) account
- [Vercel](https://vercel.com/) account

## Step 1: Prepare Your Project

### 1.1 Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 1.2 Create GitHub Repository
1. Go to [GitHub](https://github.com/)
2. Click "New repository"
3. Name it `portfolio` or `portfolio-website`
4. Make it public or private (your choice)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 1.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### 2.1 Connect Vercel to GitHub
1. Go to [Vercel](https://vercel.com/)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Import your portfolio repository from GitHub
5. Click "Import"

### 2.2 Configure Project Settings
- **Project Name**: `portfolio` (or your preferred name)
- **Framework Preset**: `Node.js` (should auto-detect)
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build` (will use our custom build script)
- **Output Directory**: Leave empty (not needed for Node.js)
- **Install Command**: `npm install`

### 2.3 Environment Variables (Optional)
If you want to customize the portfolio data, you can add environment variables:
- `PORT`: `3000` (Vercel will override this)
- `NODE_ENV`: `production`

### 2.4 Deploy
1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your portfolio will be live at `https://your-project-name.vercel.app`

## Step 3: Custom Domain (Optional)

### 3.1 Add Custom Domain
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Add your custom domain (e.g., `portfolio.yourname.com`)
3. Follow Vercel's DNS configuration instructions
4. Update your DNS records as instructed

## Step 4: Update Your Portfolio

### 4.1 Make Changes Locally
1. Edit your files locally
2. Test with `npm run dev`
3. Commit and push changes:
```bash
git add .
git commit -m "Update portfolio content"
git push
```

### 4.2 Automatic Deployment
- Vercel automatically redeploys when you push to GitHub
- Each push creates a new deployment
- You can view deployment history in Vercel dashboard

## Step 5: Add Your Files

### 5.1 Profile Picture
1. Save your photo as `profile-pic.jpg`
2. Place it in `public/images/` folder
3. Commit and push:
```bash
git add public/images/profile-pic.jpg
git commit -m "Add profile picture"
git push
```

### 5.2 Resume PDF
1. Save your resume as `resume.pdf`
2. Place it in `public/documents/` folder
3. Commit and push:
```bash
git add public/documents/resume.pdf
git commit -m "Add resume PDF"
git push
```

## Troubleshooting

### Common Issues

#### 1. Build Errors
- Check that all dependencies are in `package.json`
- Ensure `server.js` is the main entry point
- Verify `vercel.json` configuration

#### 2. Static Files Not Loading
- Ensure files are in the `public/` folder
- Check file paths in your EJS templates
- Verify `express.static()` middleware is configured

#### 3. Environment Variables
- Check Vercel dashboard for environment variable configuration
- Ensure `NODE_ENV` is set to `production`

### Debugging
1. Check Vercel deployment logs
2. Use `console.log()` statements in your code
3. Check browser developer tools for errors
4. Verify all file paths are correct

## Performance Tips

### 1. Image Optimization
- Compress images before uploading
- Use appropriate formats (JPG for photos, PNG for graphics)
- Consider using WebP format for better compression

### 2. File Size
- Keep resume PDF under 5MB
- Optimize profile picture (600x600px is sufficient)
- Minimize CSS and JavaScript files

### 3. Caching
- Vercel automatically handles caching
- Static files are cached at the edge
- Consider adding cache headers for better performance

## Security Considerations

### 1. Environment Variables
- Never commit sensitive information to Git
- Use Vercel's environment variable system
- Keep API keys and secrets secure

### 2. File Uploads
- The contact form is currently simulated
- For production, implement proper email service
- Consider rate limiting for form submissions

## Monitoring and Analytics

### 1. Vercel Analytics
- Enable Vercel Analytics in your project
- Track page views and performance
- Monitor Core Web Vitals

### 2. Custom Analytics
- Add Google Analytics if needed
- Implement custom tracking for portfolio interactions
- Monitor form submissions and downloads

## Next Steps After Deployment

1. **Test Everything**: Ensure all links work, forms submit, and files download
2. **SEO Optimization**: Add meta tags, descriptions, and Open Graph data
3. **Performance**: Run Lighthouse tests and optimize based on results
4. **Mobile Testing**: Test on various devices and screen sizes
5. **Share**: Share your portfolio URL with potential employers and clients

## Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **GitHub Issues**: Create issues in your repository for project-specific problems

---

🎉 **Congratulations!** Your portfolio is now live on the internet and accessible to anyone, anywhere in the world!

