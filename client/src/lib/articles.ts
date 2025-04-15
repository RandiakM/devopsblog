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
    category: "AI Models",
    date: "January 7, 2025",
    image: "/devopsblog/images/waf-cloudfront-secure.png",
    url: "https://dev.to/randiakm/configuring-aws-waf-cloudfront-and-s3-bucket-for-secure-access-24a3"
  },
  {
    id: 2,
    title: "Full Stack Application Hosting in AWS",
    excerpt: "This document provides a comprehensive guide for setting up, deploying, and maintaining a full-stack Todo application using Node.js, React, Express, and MongoDB. The application is deployed on AWS, utilizing services such as Lambda, API Gateway, S3, and CloudFront.",
    category: "Serverless & Cloud",
    date: "December 30, 2024",
    image: "/devopsblog/images/fullstack-todo-app-arch.png",
    url: "https://dev.to/randiakm/full-stack-application-hosting-in-aws-2kc3"
  },
  {
    id: 3,
    title: "Terraform-CodeGen0",
    excerpt: "A Terraform Code Generator that generates Terraform code for AWS resources based on user input.",
    category: "Infrastructure as Code",
    date: "January 12, 2025",
    image: "/devopsblog/images/terraform-generator.png",
    url: "https://dev.to/randiakm/terraform-codegen0-a-terraform-code-generator-55aa"
  }
];

export const recentArticles: Article[] = [
  {
    id: 4,
    title: "Creating AWS Timestream Database Using A Lambda Function",
    excerpt: " This guide will walk you through creating a Timestream database and inserting the data from the s3 bucket's Excel file using a Lambda function.",
    category: "Lambda & Timestream",
    date: "January 14, 2024",
    image: "/devopsblog/images/creating-timestream-db-lambda.webp",
    url: "https://dev.to/randiakm/creating-aws-timestream-database-using-a-lambda-function-2ln2"
  },
  {
    id: 5,
    title: "Developing AWS Lambda Functions In Locally",
    excerpt: "In this article, we are going to learn about Lambda function creating, building, updating, and testing locally.",
    category: "Serverless & Cloud",
    date: "January 6, 2024",
    image: "/devopsblog/images/developing-aws-lambda.png",
    url: "https://dev.to/randiakm/developing-aws-lambda-functions-locally-4iam"
  }//,
  // {
  //   id: 6,
  //   title: "Computer Vision in Autonomous Vehicles",
  //   excerpt: "Analyzing how computer vision algorithms are working with sensors to help autonomous vehicles navigate complex environments.",
  //   category: "Computer Vision",
  //   date: "July 8, 2023",
  //   image: "/static/images/blog/computer-vision.jpg",
  //   url: "https://neuralpulse.ai/articles/computer-vision-autonomous-vehicles"
  // },
  // {
  //   id: 7,
  //   title: "Deep Learning for Natural Language Processing",
  //   excerpt: "Deep transformer models have transformed our ability to understand and generate human language.",
  //   category: "Deep Learning",
  //   date: "July 10, 2023",
  //   image: "/static/images/blog/nlp.jpg",
  //   url: "https://neuralpulse.ai/articles/deep-learning-nlp"
  // },
  // {
  //   id: 8,
  //   title: "Ethical Considerations in Generative AI",
  //   excerpt: "Examining the ethical implications of AI generated content and implications.",
  //   category: "AI Ethics",
  //   date: "July 12, 2023",
  //   image: "/static/images/blog/ethics.jpg",
  //   url: "https://neuralpulse.ai/articles/ethical-generative-ai"
  // },
  // {
  //   id: 9,
  //   title: "The Future of AI Research: What's Next?",
  //   excerpt: "Predictions and insights into the next frontiers of artificial intelligence and breakthroughs.",
  //   category: "Future of AI",
  //   date: "July 15, 2023",
  //   image: "/static/images/blog/future-ai.jpg",
  //   url: "https://neuralpulse.ai/articles/future-of-ai-research"
  // }
];
