import { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Article, featuredArticles, recentArticles } from "@/lib/articles";
import { ArrowLeft, CalendarIcon, Tag } from "lucide-react";

export default function ArticlePage() {
  const [, params] = useRoute("/article/:slug");
  const [article, setArticle] = useState<Article | null>(null);
  
  useEffect(() => {
    if (params?.slug) {
      // Find the article in both featured and recent articles
      const foundArticle = [...featuredArticles, ...recentArticles].find(
        (a) => a.slug === params.slug
      );
      
      if (foundArticle) {
        setArticle(foundArticle);
      }
    }
  }, [params?.slug]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <Card className="p-8 text-center bg-[#0F172A]">
          <CardContent>
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 max-w-7xl py-16">
      <Link href="/" className="inline-block mb-8">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      <div className="aspect-[21/9] w-full overflow-hidden rounded-lg mb-8">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-primary">
          <Tag className="h-4 w-4" />
          <span>{article.category}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>{article.date}</span>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
      
      <div className="prose prose-invert prose-lg max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          {article.excerpt}
        </p>
        
        {/* Placeholder content - in a real app, you would load the full article content */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl nec nisl.
        </p>
        
        <p>
          Artificial intelligence continues to transform industries across the globe. From healthcare to finance, transportation to entertainment, AI applications are becoming increasingly sophisticated and ubiquitous.
        </p>
        
        <h2>Key Developments</h2>
        
        <p>
          Recent advancements in neural networks and deep learning have enabled machines to perform tasks that were once thought to require human intelligence. These include natural language processing, image recognition, and decision-making in complex environments.
        </p>
        
        <p>
          Deep learning models have grown in size and capability, with models like GPT and DALL-E pushing the boundaries of what's possible in text and image generation. These models learn from vast amounts of data, identifying patterns and relationships that humans might miss.
        </p>
        
        <h2>Ethical Considerations</h2>
        
        <p>
          As AI becomes more prevalent, ethical considerations become increasingly important. Issues such as bias in algorithms, privacy concerns, and the potential for job displacement require careful thought and regulation.
        </p>
        
        <p>
          Researchers and policymakers are working to develop frameworks for responsible AI development and deployment. These frameworks aim to ensure that AI systems are transparent, fair, and beneficial for all of humanity.
        </p>
        
        <h2>The Future of AI</h2>
        
        <p>
          The future of AI is bright, with potential applications in nearly every field of human endeavor. From personalized medicine to sustainable energy solutions, AI has the potential to help solve some of humanity's most pressing challenges.
        </p>
        
        <p>
          As AI continues to evolve, collaboration between researchers, industry leaders, and policymakers will be essential to navigate the opportunities and challenges that lie ahead.
        </p>
      </div>
    </main>
  );
}