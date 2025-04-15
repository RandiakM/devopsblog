import { Brain, Eye, NetworkIcon, Binary, MessageSquare, FlaskConical } from "lucide-react";

export interface Topic {
  id: string;
  title: string;
  description: string;
  articleCount: number;
  icon: typeof Brain;
}

export const topics: Topic[] = [
  {
    id: "ai-models",
    title: "AI Models",
    description: "Explore the latest advancements in generative AI models, including GANs, diffusion models, and more.",
    articleCount: 12,
    icon: Brain
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    description: "Discover how AI is revolutionizing image and video analysis, object detection, and scene understanding.",
    articleCount: 8,
    icon: Eye
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    description: "Learn about neural network architectures, training techniques, and applications in various domains.",
    articleCount: 15,
    icon: NetworkIcon
  },
  {
    id: "ai-ethics",
    title: "AI Ethics",
    description: "Examine the ethical implications of AI development and deployment in society.",
    articleCount: 6,
    icon: Binary
  },
  {
    id: "natural-language-processing",
    title: "Natural Language Processing",
    description: "Explore how AI understands, generates, and interacts with human language.",
    articleCount: 9,
    icon: MessageSquare
  },
  {
    id: "ai-research",
    title: "AI Research",
    description: "Stay updated with the latest research papers, breakthroughs, and academic developments in AI.",
    articleCount: 11,
    icon: FlaskConical
  }
];
