import { Card, CardContent } from "@/components/ui/card";
import { type Topic } from "@/lib/topics";
import { Link } from "wouter";

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const Icon = topic.icon;
  
  return (
    <Link href={`/topics/${topic.id}`}>
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
    </Link>
  );
}
