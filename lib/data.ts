import spoilerDetectionImg from "@/public/spoilerDetection.webp";
import rockPaperScissorImg from "@/public/rockPaper.png";
import musicDataAnalyticsImg from "@/public/musicData.webp";
import dbtETL from "@/public/dbt.png";
import teslaDashboard from "@/public/tesla.png";
import aiGithub from "@/public/github.png";
import nbaPlayoffs from "@/public/nba.png";
import portfolio from "@/public/portfolio.png";
import wdi from "@/public/wdi.png";
import recipeSharing from "@/public/recipe.png";
import projectCabinet from "@/public/project-cabinet.png";
import { StaticImageData } from "next/image";
type TagType =
  | "Data Science"
  | "Machine Learning"
  | "Web Development"
  | "Sofware Development"
  | "Data Analytics"
  | "Generative AI"
  | "Artificial Intelligence";

type ProjectProps = {
  title: string;
  description: string;
  tools: string[];
  imageUrl: StaticImageData;
  tags: TagType[];
  date: Date;
};

export const projectsData: ProjectProps[] = [
  {
    title: "Spoiler Detection in Movie Reviews Using Modern DL Architectures",
    description:
      "Developed and implemented deep learning techniques for spoiler detection in movie reviews achieving 78.49% accuracy with Distil BERT. Conducted thorough data pre-processing on a 1 GB dataset for improved model performance.",
    tools: ["Python", "Flask", "NLP", "Distil BERT"],
    imageUrl: spoilerDetectionImg,
    tags: ["Data Science", "Machine Learning", "Generative AI"],
    date: new Date("2023-05-01"),
  },
  {
    title: "Multiplayer Rock Paper Scissor Webcam Game",
    description:
      "Developed a live multiplayer game using OpenCV and TensorFlow with a validation accuracy of 98%. Utilized advanced computer vision techniques and a customized MobileNetV2 model for players' hand gesture detection.",
    tools: ["Python", "OpenCV", "TensorFlow", "MobileNetV2"],
    imageUrl: rockPaperScissorImg,
    tags: ["Machine Learning", "Web Development", "Sofware Development"],
    date: new Date("2023-02-01"),
  },
  {
    title: "NYU Data Science Capstone: Exploring Music Data Analytics",
    description:
      "Led a music data analysis project with advanced statistical and machine learning models. Used statistical tests and PCA for data analysis, and implemented collaborative filtering with ALS for music recommendation.",
    tools: ["Pandas", "SciPy", "Python", "Scikit-learn"],
    imageUrl: musicDataAnalyticsImg,
    tags: ["Data Science", "Machine Learning", "Data Analytics"],
    date: new Date("2023-12-01"),
  },
  {
    title: "ELT Pipeline Development and Deployment with AirFlow",
    description:
      "Configured a Snowflake environment with 5 warehouses, 10 roles, and 3 schemas, ensuring robust RBAC. Implemented 8 dbt models for staging and fact tables, optimizing transformations. Orchestrated and automated the ELT pipeline on Apache Airflow, enabling efficient and reliable data workflows.",
    tools: ["dbt", "Snowflake", "Airflow", "SQL"],
    imageUrl: dbtETL,
    tags: ["Data Science", "Data Analytics"],
    date: new Date("2024-07-01"),
  },
  {
    title: "Tesla Stock Performance Dashboard Tableau: NYU Stern",
    description:
      "Developed a real-time Tesla Stock Performance Dashboard in Tableau Public using NASDAQ data, enhancing user engagement with interactive KPIs and filters. Adhered to strict design principles for consistent color use, clear presentation, and improved data readability.",
    tools: ["Tableau"],
    imageUrl: teslaDashboard,
    tags: ["Data Analytics"],
    date: new Date("2023-12-01"),
  },
  {
    title: "Full Stack Recipe Sharing Platform",
    description:
      "Developed a recipe-sharing platform using React, Tailwind CSS, and Django. Deployed the frontend on AWS S3 with CloudFront, and the backend on EC2 with Nginx and Gunicorn. Managed PostgreSQL database migrations and schema updates, and enhanced security by configuring a custom private subnet using AWS VPC.",
    tools: ["React", "EC2", "S3", "CloudFront", "SQL", "Django"],
    imageUrl: recipeSharing,
    tags: ["Web Development", "Sofware Development"],
    date: new Date("2024-07-01"),
  },
  {
    title: "AI-Driven GitHub Issue Classification System",
    description:
      "Built a machine learning model with 85% accuracy for classifying GitHub issues using Logistic Regression and PySpark on Databricks (GCP Compute). Developed a React-based frontend for a user-friendly interface, enabling real-time issue classification and predictions.",
    tools: ["PySpark", "MLlib", "Databricks", "GCP"],
    imageUrl: aiGithub,
    tags: [
      "Web Development",
      "Sofware Development",
      "Machine Learning",
      "Artificial Intelligence",
    ],
    date: new Date("2024-05-01"),
  },
  {
    title: "Predictive Analysis and Insights on NBA Playoff Outcomes",
    description:
      "Conducted data preprocessing and analysis on NBA datasets (2014-2023) using R (tidyverse, dplyr), generating visualizations with ggplot2 and plotly. Developed logistic and linear regression models to predict NBA playoff outcomes, achieving 75% accuracy in forecasting series winners and the number of games.",
    tools: ["R", "tidyverse", "ggplot2", "caret", "plotly"],
    imageUrl: nbaPlayoffs,
    tags: ["Data Science", "Machine Learning", "Data Analytics"],
    date: new Date("2024-06-01"),
  },
  {
    title: "Fully Responsive and Modern Portfolio",
    description:
      "Created a responsive portfolio website using Next.js 13 with multi-theme support, integrating React.Email and Resend for email functionality. Utilized custom React hooks, hosted on Vercel.",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
      "Javascript",
    ],
    imageUrl: portfolio,
    tags: ["Web Development", "Sofware Development"],
    date: new Date("2024-05-01"),
  },
  {
    title: "Data Analysis and Visualization of World Development Indicators",
    description:
      "Analyzed the World Development Indicators dataset for 100+ countries using Python, revealing trends in GDP and clean fuel access. Reduced dataset size by 15%, improving analysis efficiency. Created visualizations that enhanced insights into global development over 50 years.",
    tools: ["Python", "matplotlib", "Pandas"],
    imageUrl: wdi,
    tags: ["Data Analytics"],
    date: new Date("2024-07-01"),
  },
  {
    title: "Project Cabinet: My Coding Projects Showcase",
    description:
      "Project Cabinet is an interactive portfolio showcasing my coding projects through visually engaging cards. Featuring responsive design, advanced filtering, and sorting, it offers a dynamic and organized presentation of my work, highlighting my technical skills and project expertise in a user-friendly format.",
    tools: ["React", "Tailwind CSS", "Next.js", "Typescript", "Javascript"],
    imageUrl: projectCabinet,
    tags: ["Sofware Development", "Web Development"],
    date: new Date("2024-08-01"),
  },
] as const;
