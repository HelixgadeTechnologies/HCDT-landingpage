import {
  beatIcon,
  chartIcon,
  educationIcon,
  fileIcon,
  healthIcon,
  ictIcon,
  roadIcon,
  transparencyIcon,
} from "../../public/icons";
import { educationImg, healthImg, ICTImg, roadImg } from "../../public/images";

export const hcdtWorks = [
  {
    id: 1,
    title: "Project Monitoring",
    content: "Stay updated on project progress in your community.",
    icon: fileIcon,
    bg: "#D1FAE5",
  },
  {
    id: 2,
    title: "Conflict Resolution",
    content: "Report and track community conflicts related to development.",
    icon: beatIcon,
    bg: "#CFFAFE",
  },
  {
    id: 3,
    title: "Community Feedback",
    content: "Voice your concerns and suggestions about ongoing projects.",
    icon: chartIcon,
    bg: "#DBEAFE",
  },
  {
    id: 4,
    title: "Transparency Reports",
    content: "Access financial and operational reports for every project.",
    icon: transparencyIcon,
    bg: "#EDE9FE",
  },
];

export const categories = [
  {
    id: 1,
    title: "Education",
    icon: educationIcon,
    img: educationImg,
  },
  {
    id: 2,
    title: "Healthcare",
    icon: healthIcon,
    img: healthImg,
  },
  {
    id: 3,
    title: "Roads",
    icon: roadIcon,
    img: roadImg,
  },
  {
    id: 4,
    title: "ICT",
    icon: ictIcon,
    img: ICTImg,
  },
];
