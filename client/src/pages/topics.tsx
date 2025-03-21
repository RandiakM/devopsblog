import { topics } from "@/lib/topics";
import { TopicCard } from "@/components/topic-card";

export default function Topics() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-bold mb-4">Topics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </main>
  );
}