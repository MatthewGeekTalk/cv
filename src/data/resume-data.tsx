import {
  ClevertechLogo,
  ConsultlyLogo,
  MonitoLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Matthew He",
  initials: "MH",
  location: "Shanghai, China, UTC+8",
  locationLink: "https://www.google.com/maps/place/Shanghai",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I work mostly with ABAP, Node.js, Java, JavaScript, Python. I have over 13 years of experiences on backend development and 4 years experiences on frontend",
  avatarUrl: "https://private-user-images.githubusercontent.com/23353056/332754552-97d1372d-3544-43f0-9b34-afee51cb152f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTYzNzMyNDcsIm5iZiI6MTcxNjM3Mjk0NywicGF0aCI6Ii8yMzM1MzA1Ni8zMzI3NTQ1NTItOTdkMTM3MmQtMzU0NC00M2YwLTliMzQtYWZlZTUxY2IxNTJmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA1MjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNTIyVDEwMTU0N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFhZDFkNTVkN2Y1OWY0OGEwOTk5ZGE5NDk2NzQzMWNkNGVmM2FlNDIxOThhNGViOTlkNTZhZWE0M2JhOTAwZmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.t8cUs_PR3a_CbDRJnoT3Fv8JeQJC1WsBsixR2UDS4N4",
  personalWebsiteUrl: "https://matthewgeektalk.github.io/",
  contact: {
    email: "matthew.he.geek@gmail.com",
    tel: "+86 13524934132",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MatthewGeekTalk",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/matthew-he-78b8a456/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Matthew_Geek",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Harbin University of Science and Technology",
      degree: "Bachelor's Degree in Electronic Information Engineering",
      start: "2006",
      end: "2010",
    },
  ],
  work: [
    {
      company: "SAP",
      link: "https://sap.com",
      badges: [],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2011",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: ABAP, NodeJS, Python, Java, UI5, Docker, Kubernetes, Jenkins, Bash/Groovy",
    },
    {
      company: "Infosys",
      link: "https://www.infosys.com/",
      badges: [],
      title: "SAP ABAP Backend Developer",
      logo: ClevertechLogo,
      start: "2010",
      end: "2011",
      description:
        "Enhanced and maintained SAP ABAP standard programs, developed new reports, and provided support for the existing smart forms and scripts",
    },
  ],
  skills: [
    "ABAP/GUI/BOPF/FPM/FBI(SAP)",
    "Odata/CDS/CAP(SAP)",
    "Node.js",
    "TypeScript",
    "Java",
    "Python",
    "Docker/Kubernetes",
    "JavaScript/Vue/React/Angular/UI5(SAP)",
    "Jenkins/Azure",
    "Bash/Groovy",
    "HANA(SAP)/MySQL/PostgreSQL/MongoDB",
    "RabbitMQ/Kafka/EventMesh(SAP)",
    "Jmeter/Locust/SUPA(SAP)",
  ],
  projects: [
    {
      title: "Intelligent Clinical Supply Management(Full Stack Developer/DevOps)",
      techStack: [
        "NodeJS",
        "JavaScript",
        "Docker",
        "Bash/Groovy",
        "Jenkins",
        "Odata/CAP/UI5/HANA/EventMesh",
        "Jmeter/Locust/SUPA",
      ],
      description: "Manage the planning, sourcing, manufacturing, distribution, and reconciliation of supplies for clinical studies, and addresses specific blinding and randomization needs.",
      logo: ConsultlyLogo,
      link: {
        label: "help.sap.com/",
        href: "https://help.sap.com/docs/S4_INTELLCLINICSUPPLYMGMT/462d8a00a8ab4f5caa244e8bea38d6cb/4b50a1236fab4e66b164defe4a0bcff3.html",
      },
    },
    {
      title: "Transportation Management(Developer)",
      techStack: ["ABAP", "GUI", "BOPF", "FPM", "FBI"],
      description:
        "SAP Transportation Management is a comprehensive solution for performing all activities connected with the physical transportation of goods from one location to another.",
      logo: MonitoLogo,
      link: {
        label: "help.sap.com/",
        href: "https://help.sap.com/docs/SAP_TRANSPORTATION_MANAGEMENT",
      },
    },
    {
      title: "Asset Management(Architect)",
      techStack: ["ABAP", "NodeJS", "JAVA", "Python", "Docker/K8s(Gardener)/Helm", "Jenkins", "MySQL"],
      description:
        "Asset Management for SAP S/4HANA is a comprehensive solution for managing physical assets on a common platform across the enterprise.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/ibso-ml-deep-learnnig/DemoJam2019",
      },
    },
    {
      title: "Container Detector(Architect)",
      techStack: ["Python", "Tensorflow", "OpenCV"],
      description:
        "Container Detector is a tool to detect the container in the image. It is based on the Tensorflow object detection API",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/MatthewGeekTalk/ContainerDetector",
      },
    },
  ],
} as const;
