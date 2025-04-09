# NeuralPulse Blog

A modern, static AI/ML blog website with dark theme and purple accents, built with React, TypeScript, and TailwindCSS.

## Features

- Responsive design for mobile, tablet, and desktop
- Markdown-based content management
- Static site generation for GitHub Pages deployment
- Dark theme with purple accents
- Card-based layout for articles and topics
- Newsletter signup form
- Categories and topics pages

## Development

To run the development server:

```bash
npm install
npm run dev
```

This will start the Express server on port 3000 with both the frontend and backend.

### Content Management

Blog content is managed through Markdown files located in the `content/posts` directory. Each post should have frontmatter with the following fields:

```markdown
---
id: 1
title: "Article Title"
excerpt: "A short excerpt of the article content"
category: "Category Name"
date: "2025-04-01"
image: "/images/article-image.jpg"
---

Content goes here...
```

### Adding a New Article

1. Create a new Markdown file in `content/posts/`
2. Add the required frontmatter
3. Write your content in Markdown format
4. Run `node scripts/generate-content.js` to generate the static JSON files

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages using GitHub Actions:

1. Create a new repository on GitHub
2. Push your code to the repository
3. Enable GitHub Pages in your repository settings:
   - Go to "Settings" > "Pages"
   - Under "Build and deployment", select "GitHub Actions" as the source
4. The included workflow will automatically:
   - Generate the static content JSON files
   - Build the React application
   - Deploy to GitHub Pages

The site will be available at `https://[username].github.io/[repository-name]`

### Custom Domain

To use a custom domain:

1. Add your domain in the GitHub Pages settings
2. Create a CNAME file in the `public` directory with your domain
3. Update DNS settings as per GitHub's instructions

## Troubleshooting

If articles are not showing up on GitHub Pages:

1. Make sure the content generation scripts ran successfully during build
2. Check the network tab in browser dev tools for 404 errors when fetching JSON files
3. For direct article links, we've implemented a special solution:
   - Static HTML files at `/articles/[slug]/index.html` automatically store article data in localStorage
   - This data is then picked up by the React app when it loads
   - Example: Direct link to `https://username.github.io/devopsblog/articles/evolution-of-gans/`
     will redirect to the main app with data preloaded

### How Article Pages Work on GitHub Pages

The blog has a special system for handling direct article links on GitHub Pages:

1. Static HTML files are generated for each article in the `/articles/[slug]/` directory
2. These HTML files store the article content in localStorage then redirect to the main app
3. When the React app loads, it checks localStorage for pre-loaded article data
4. This approach solves the GitHub Pages routing limitations without requiring a server
