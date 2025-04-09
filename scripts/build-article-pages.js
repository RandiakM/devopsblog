import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory paths
const contentDir = path.join(__dirname, '..', 'content', 'posts');
const outputDir = path.join(__dirname, '..', 'public', 'articles');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// HTML template for article pages
const articleTemplate = (slug, postData, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${postData.title} - NeuralPulse Blog</title>
  <meta http-equiv="refresh" content="0;url=/devopsblog/#/article/${slug}">
  <script>
    // Store article data in localStorage for the SPA to access
    window.localStorage.setItem('article_${slug}', JSON.stringify({
      post: ${JSON.stringify(postData)},
      content: ${JSON.stringify(content)}
    }));
    window.location.href = '/devopsblog/#/article/${slug}';
  </script>
</head>
<body>
  <p>Redirecting to article...</p>
</body>
</html>
`;

// Process all Markdown files and create static HTML files
function generateArticlePages() {
  console.log('Generating static article pages...');
  
  try {
    // Read all markdown files
    const files = fs.readdirSync(contentDir);
    
    // Process each file
    files.forEach(file => {
      if (!file.endsWith('.md')) return;
      
      const slug = file.replace('.md', '');
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      
      // Create article from frontmatter
      const post = {
        id: data.id || 0,
        title: data.title,
        excerpt: data.excerpt,
        category: data.category,
        date: data.date,
        image: data.image,
        url: `/article/${slug}`,
        slug
      };
      
      // Create HTML file with embedded data
      const articleHtml = articleTemplate(slug, post, content);
      const articleDir = path.join(outputDir, slug);
      
      // Create directory for the article
      if (!fs.existsSync(articleDir)) {
        fs.mkdirSync(articleDir, { recursive: true });
      }
      
      // Write index.html to the article directory
      fs.writeFileSync(
        path.join(articleDir, 'index.html'),
        articleHtml
      );
      
      console.log(`Generated: /articles/${slug}/index.html`);
    });
    
    console.log('Article page generation complete!');
  } catch (error) {
    console.error('Error generating article pages:', error);
    process.exit(1);
  }
}

// Run the generation
generateArticlePages();