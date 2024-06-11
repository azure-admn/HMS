
import profile from './WhatsApp Image 2024-06-11 at 22.07.07_e96c4c5a.jpg';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Deepak",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Deepak Raja",
  description: "Master of Computer Application Cloud infrastructure & DevOps Automations CI/CD Configrations.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1FoTQpepKtwS564q8Pvi48mx9XrjnGFIP/view?usp=drivesdk ",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "Am pursuing from khalaisalingam university of Technology in 2023 with a degree in Computer Application.",
    "I Kick Started my Professional career as a Junior (CLOUD & DEVOPS) Engineer working remotely for a Startup ( Basis Cloud Solutions) in Chennai-2022 The latest cloud technologies specializing in Infrastructure,  Security & Automations, with a breadth of knowledge in DevOps tools, computer software, hardware, and Internet of Things, seeking to bring fast and intelligent solutions to your organization.",
    "lifelong learner, hard worker and self-motivated team player with strong analytical and strategic thinking skills, I always want to maintain a high level of professionalism while providing consistent and quality service"
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "DevOps Engineering",
      description: "A DevOps engineer is a professional who plays a critical role in the software development lifecycle, bridging the gap between software development and IT operations.",
      icons: null,
    },
    {
      title: "Cloud Architecture",
      description: "Cloud architecture is the strategic design and alignment of cloud computing resources and services to build a robust, scalable, and efficient cloud environment.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Hospital Management",
      description: "A Hospital Management System (HMS) is a digital solution designed to manage all aspects of hospital operations such as clinical, financial, administrative, and legal matters, and the corresponding processing of services. Here’s a brief summary of its key components: Clinical Management, Administrative Management, Inventory Management, Legal Compliance, Doctor Appointment management.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/VINOTHKUMAR-V-K/HMS",
        },
      ]
    },
    {
      title: "Blood Bank",
      description: "A Blood Bank Management System (BBMS) is a comprehensive software application that assists in the efficient management of blood bank operations. Here’s a small summary of its key features: Donor Registration, Hospital Registration, Inventory Management, Request Processing, Reporting Tools.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/VINOTHKUMAR-V-K/BloodLink",
        },

      ]
    }
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at rajthipak5@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:rajthipak5@gmail.com",
      isPrimary: true,
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Deepak Raja | DevOps Engineer | Cloud Architect",
  description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@deepakraja",
  description: " DevOps Engineer | Cloud Architect",
  cards: [
    {
      title: "My GitHub",
      link: "https://github.com/azure-admn",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/deepak-raj-cloud?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]
}