export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  url: string;
}

export const featuredArticles: Article[] = [
  {
    id: 1,
    title: "Configuring AWS WAF, CloudFront, and S3 Bucket for Secure Access",
    excerpt: "How to Set Up AWS WAF, CloudFront and an S3 Bucket to serve content securely and Restrict content Access to certain originating sources only. This guide looks at some issues, for instance, 403 Forbidden, in order to troubleshoot the problem.",
    category: "WAF & CloudFront",
    date: "January 7, 2027",
    image: "/devopsblog/images/waf-cloudfront-secure.png",
    url: "https://dev.to/randiakm/configuring-aws-waf-cloudfront-and-s3-bucket-for-secure-access-24a3"
  },
  {
    id: 2,
    title: "AI in 2025: Transforming Daily Life",
    excerpt: "Discover how generative AI has integrated into everyday activities in 2025, powering personal AI assistants, tech tools, translating...",
    category: "Future Tech",
    date: "June 2, 2023",
    image: "/static/images/blog/ai-2025.jpg",
    url: "https://neuralpulse.ai/articles/ai-in-2025"
  },
  {
    id: 3,
    title: "The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond",
    excerpt: "Explore the emergence of multimodal AI models that combine text, image, and video understanding for more comprehensive AI applications.",
    category: "AI Models",
    date: "June 15, 2023",
    image: "/static/images/blog/multimodal-ai.jpg",
    url: "https://neuralpulse.ai/articles/multimodal-ai-models"
  }
];

export const recentArticles: Article[] = [
  {
    id: 4,
    title: "Advancements in AI-Driven 3D Modeling and Virtual World Creation",
    excerpt: "Learn how AI is revolutionizing 3D modeling and virtual world creation, enabling creators to build immersive virtual worlds...",
    category: "3D & Virtual Worlds",
    date: "July 1, 2023",
    image: "/static/images/blog/3d-modeling.jpg",
    url: "https://neuralpulse.ai/articles/ai-driven-3d-modeling"
  },
  {
    id: 5,
    title: "The Integration of AI in Wearable Technology: Enhancing Our Daily Lives",
    excerpt: "Delve into the incorporation of AI into wearable devices, such as smart glasses, smart watches, and integration through...",
    category: "Wearable Tech",
    date: "July 5, 2023",
    image: "/static/images/blog/wearable-tech.jpg",
    url: "https://neuralpulse.ai/articles/ai-wearable-tech"
  },
  {
    id: 6,
    title: "Computer Vision in Autonomous Vehicles",
    excerpt: "Analyzing how computer vision algorithms are working with sensors to help autonomous vehicles navigate complex environments.",
    category: "Computer Vision",
    date: "July 8, 2023",
    image: "/static/images/blog/computer-vision.jpg",
    url: "https://neuralpulse.ai/articles/computer-vision-autonomous-vehicles"
  },
  {
    id: 7,
    title: "Deep Learning for Natural Language Processing",
    excerpt: "Deep transformer models have transformed our ability to understand and generate human language.",
    category: "Deep Learning",
    date: "July 10, 2023",
    image: "/static/images/blog/nlp.jpg",
    url: "https://neuralpulse.ai/articles/deep-learning-nlp"
  },
  {
    id: 8,
    title: "Ethical Considerations in Generative AI",
    excerpt: "Examining the ethical implications of AI generated content and implications.",
    category: "AI Ethics",
    date: "July 12, 2023",
    image: "/static/images/blog/ethics.jpg",
    url: "https://neuralpulse.ai/articles/ethical-generative-ai"
  },
  {
    id: 9,
    title: "The Future of AI Research: What's Next?",
    excerpt: "Predictions and insights into the next frontiers of artificial intelligence and breakthroughs.",
    category: "Future of AI",
    date: "July 15, 2023",
    image: "/static/images/blog/future-ai.jpg",
    url: "https://neuralpulse.ai/articles/future-of-ai-research"
  }
];
