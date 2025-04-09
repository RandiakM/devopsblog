import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directory paths
const contentDir = path.join(__dirname, '..', 'content', 'posts');
const outputDir = path.join(__dirname, '..', 'public', 'data');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Process all Markdown files
function generateContentFiles() {
  console.log('Generating static content files...');
  
  try {
    // Read all markdown files
    const files = fs.readdirSync(contentDir);
    const allPosts = [];
    
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
      
      // Add to all posts list
      allPosts.push(post);
      
      // Create individual post file
      const postData = { post, content };
      fs.writeFileSync(
        path.join(outputDir, `${slug}.json`),
        JSON.stringify(postData, null, 2)
      );
      
      console.log(`Generated: ${slug}.json`);
    });
    
    // Sort posts by date, newest first
    allPosts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
    
    // Write all posts to a single file
    fs.writeFileSync(
      path.join(outputDir, 'posts.json'),
      JSON.stringify(allPosts, null, 2)
    );
    
    console.log('Generated: posts.json');
    console.log('Content generation complete!');
  } catch (error) {
    console.error('Error generating content:', error);
    process.exit(1);
  }
}

// Run the generation
generateContentFiles();