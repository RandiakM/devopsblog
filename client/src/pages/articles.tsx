import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { featuredArticles, recentArticles } from "@/lib/articles";

export default function Articles() {
  // Combine all articles
  const allArticles = [...featuredArticles, ...recentArticles];
  
  // Get category from URL query parameter directly from the window location
  const params = new URLSearchParams(window.location.search);
  const categoryFilter = params.get('category');
  
  // Filter articles by category if a category filter is provided
  const filteredArticles = categoryFilter 
    ? allArticles.filter(article => 
        article.category === categoryFilter)
    : allArticles;
  
  return (
    <main className="container mx-auto px-4 max-w-7xl py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {categoryFilter ? `${categoryFilter} Articles` : 'All Articles'}
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            {categoryFilter 
              ? `Browse our collection of articles about ${categoryFilter}.`
              : 'Explore our latest articles on AI, Machine Learning, and Deep Learning. Stay updated with the most recent developments in artificial intelligence.'}
          </p>
        </div>
        {categoryFilter && (
          <a href="/articles" className="text-primary hover:underline self-start">
            ← Back to all articles
          </a>
        )}
      </div>
      
      {filteredArticles.length === 0 ? (
        <div className="py-12 text-center">
          <h3 className="text-2xl font-semibold mb-2">No articles found</h3>
          <p className="text-muted-foreground">
            We couldn't find any articles in the {categoryFilter} category. Please check back later!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredArticles.map((article) => (
            <a 
              key={article.id} 
              href={article.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group"
            >
              <Card className="group hover:border-primary/50 transition-colors bg-[#0F172A] h-full">
                <CardHeader className="p-0">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-2">{article.category}</div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-white group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    {article.date}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
