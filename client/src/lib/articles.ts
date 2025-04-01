export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "The Evolution of Generative Adversarial Networks: From GAN to StyleGAN-3",
    excerpt: "Explore the evolution of GANs starting from Ian Goodfellow's original paper to NVIDIA's StyleGAN-3 and the latest achievements in generative AI.",
    category: "AI Research",
    date: "May 15, 2023",
    image: "https://images.unsplash.com/photo-1655393001768-d946c97d6fd1",
    slug: "evolution-of-generative-adversarial-networks"
  },
  {
    id: 2,
    title: "AI in 2025: Transforming Daily Life",
    excerpt: "Discover how generative AI has integrated into everyday activities in 2025, powering personal AI assistants, tech tools, translating...",
    category: "Future Tech",
    date: "June 2, 2023",
    image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec",
    slug: "ai-in-2025-transforming-daily-life"
  },
  {
    id: 3,
    title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
    excerpt: "Explore the emergence of multimodal AI models that combine text, image, and video understanding for more comprehensive AI applications.",
    category: "AI Models",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1612066473428-fb6833a0d855",
    slug: "rise-of-multimodal-ai-models"
  }
];

export const recentArticles: Article[] = [
  {
    id: 4,
    title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
    excerpt: "Learn how AI is revolutionizing 3D modeling and virtual world creation, enabling creators to build immersive virtual worlds...",
    category: "3D & Virtual Worlds",
    date: "July 1, 2023",
    image: "https://images.unsplash.com/photo-1672239272089-250c32c3e2e2",
    slug: "ai-driven-3d-modeling"
  },
  {
    id: 5,
    title: "The Integration of AI in Wearable Technology: Enhancing Our Daily Lives",
    excerpt: "Delve into the incorporation of AI into wearable devices, such as smart glasses, smart watches, and integration through...",
    category: "Wearable Tech",
    date: "July 5, 2023",
    image: "https://images.unsplash.com/photo-1666597107756-ef489e9f1f09",
    slug: "ai-in-wearable-technology"
  },
  {
    id: 6,
    title: "Computer Vision in Autonomous Vehicles",
    excerpt: "Analyzing how computer vision algorithms are working with sensors to help autonomous vehicles navigate complex environments.",
    category: "Computer Vision",
    date: "July 8, 2023",
    image: "https://images.unsplash.com/photo-1645839072940-bb2a4f189ed3",
    slug: "computer-vision-autonomous-vehicles"
  },
  {
    id: 7,
    title: "Deep Learning for Natural Language Processing",
    excerpt: "Deep transformer models have transformed our ability to understand and generate human language.",
    category: "Deep Learning",
    date: "July 10, 2023",
    image: "https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf",
    slug: "deep-learning-nlp"
  },
  {
    id: 8,
    title: "Ethical Considerations in Generative AI",
    excerpt: "Examining the ethical implications of AI generated content and implications.",
    category: "AI Ethics",
    date: "July 12, 2023",
    image: "https://images.unsplash.com/photo-1653389527532-884074ac1c65",
    slug: "ethical-considerations-generative-ai"
  },
  {
    id: 9,
    title: "The Future of AI Research: What's Next?",
    excerpt: "Predictions and insights into the next frontiers of artificial intelligence and breakthroughs.",
    category: "Future of AI",
    date: "July 15, 2023",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74",
    slug: "future-of-ai-research"
  }
];
