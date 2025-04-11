import { Card, CardContent } from "@/components/ui/card";
import { type Topic } from "@/lib/topics";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const Icon = topic.icon;
  
  // Map topic IDs to their corresponding category in articles
  const topicToCategory: Record<string, string> = {
    'generative-ai': 'AI Models',
    'computer-vision': 'Computer Vision',
    'deep-learning': 'Deep Learning',
    'ai-ethics': 'AI Ethics',
    'natural-language-processing': 'NLP',
    'ai-research': 'AI Research'
  };
  
  // Get the category for this topic or use the topic title if no mapping exists
  const category = topicToCategory[topic.id] || topic.title;
  
  // Use a regular a tag with href for query parameters
  return (
    <a href={`/articles?category=${encodeURIComponent(category)}`}>
      <Card className="group hover:border-primary/50 transition-colors cursor-pointer h-full bg-[#0F172A]">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div className="text-sm text-muted-foreground">
              {topic.articleCount} articles
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{topic.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">
            {topic.description}
          </p>
          <div className="text-primary text-sm font-medium group-hover:underline">
            View articles →
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
