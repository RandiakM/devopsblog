import { Hero } from "@/components/hero";
import { FeaturedArticles } from "@/components/featured-articles";
import { RecentArticles } from "@/components/recent-articles";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedArticles />
      <RecentArticles />
      <Newsletter />
    </main>
  );
}
