import { topics } from "@/lib/topics";
import { TopicCard } from "@/components/topic-card";

export default function Topics() {
  return (
    <main className="container mx-auto px-4 max-w-7xl py-16">
      <h1 className="text-4xl font-bold mb-4">Topics</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Explore our comprehensive collection of articles organized by topic. Each category offers in-depth insights, tutorials, and the latest research in artificial intelligence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </main>
  );
}