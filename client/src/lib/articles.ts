export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "Configuring AWS WAF, CloudFront, and S3 Bucket for Secure Access",
    excerpt: "How to Set Up AWS WAF, CloudFront and an S3 Bucket to serve content securely and Restrict content Access to certain originating sources only. This guide looks at some issues, for instance, 403 Forbidden, in order to troubleshoot the problem.",
    category: "Serverless",
    date: "January 7, 2025",
    image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1"
  },
  {
    id: 2,
    title: "AI in 2025: Transforming Daily Life",
    excerpt: "Discover how generative AI has integrated into everyday activities in 2025, powering personal AI assistants, tech tools, translating...",
    category: "Future Tech",
    date: "June 2, 2023",
    image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec"
  },
  {
    id: 3,
    title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
    excerpt: "Explore the emergence of multimodal AI models that combine text, image, and video understanding for more comprehensive AI applications.",
    category: "AI Models",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1612066473428-fb6833a0d855"
  }
];

export const recentArticles: Article[] = [
  {
    id: 4,
    title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
    excerpt: "Learn how AI is revolutionizing 3D modeling and virtual world creation, enabling creators to build immersive virtual worlds...",
    category: "3D & Virtual Worlds",
    date: "July 1, 2023",
    image: "https://images.unsplash.com/photo-1672239272089-250c32c3e2e2"
  },
  {
    id: 5,
    title: "The Integration of AI in Wearable Technology: Enhancing Our Daily Lives",
    excerpt: "Delve into the incorporation of AI into wearable devices, such as smart glasses, smart watches, and integration through...",
    category: "Wearable Tech",
    date: "July 5, 2023",
    image: "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09"
  },
  {
    id: 6,
    title: "Computer Vision in Autonomous Vehicles",
    excerpt: "Analyzing how computer vision algorithms are working with sensors to help autonomous vehicles navigate complex environments.",
    category: "Computer Vision",
    date: "July 8, 2023",
    image: "https://images.unsplash.com/photo-1645839072940-bb2a4f189ed3"
  },
  {
    id: 7,
    title: "Deep Learning for Natural Language Processing",
    excerpt: "Deep transformer models have transformed our ability to understand and generate human language.",
    category: "Deep Learning",
    date: "July 10, 2023",
    image: "https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf"
  },
  {
    id: 8,
    title: "Ethical Considerations in Generative AI",
    excerpt: "Examining the ethical implications of AI generated content and implications.",
    category: "AI Ethics",
    date: "July 12, 2023",
    image: "https://images.unsplash.com/photo-1653389527532-884074ac1c65"
  },
  {
    id: 9,
    title: "The Future of AI Research: What's Next?",
    excerpt: "Predictions and insights into the next frontiers of artificial intelligence and breakthroughs.",
    category: "Future of AI",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74"
  }
];
