export type Experience = {
  organization: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
  technologies: string[];
  placeholder?: boolean;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  result?: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  layout: 'anchor' | 'standard' | 'wide';
};

export type Education = {
  institution: string;
  degree: string;
  date: string;
  url: string;
};

export type Achievement = {
  title: string;
  date: string;
  context: string;
  description: string;
};

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  date: string;
  description: string;
  doi: string;
};

export const experience: Experience[] = [
  {
    organization: 'Humanitarians AI',
    role: 'Volunteer',
    date: 'Aug 2026 – Present',
    location: 'Remote',
    bullets: ['Applied AI and data science responsibilities — final details forthcoming.'],
    technologies: ['Applied AI', 'Data Science'],
    placeholder: true,
  },
  {
    organization: 'Northeastern University',
    role: 'Data Analyst / Application Processor',
    date: 'Oct 2024 – Nov 2025',
    location: 'Boston, MA',
    bullets: [
      'Cleaned and standardized 5,000+ applicant records using SQL and Python/Pandas.',
      'Improved data accuracy by approximately 25%.',
      'Automated international grade mapping to U.S. GPA scales, reducing manual validation time by approximately 40%.',
    ],
    technologies: ['SQL', 'Python', 'Pandas', 'Slate CRM'],
  },
  {
    organization: 'Capgemini',
    role: 'Senior Software Engineer / Software Engineer',
    date: 'Sep 2021 – Jul 2023',
    location: 'India',
    bullets: [
      'Automated PolicyCenter processes, reducing manual intervention by approximately 20%.',
      'Improved policy lifecycle processing time by approximately 15%.',
      'Built Selenium regression automation that contributed to a reported 35% reduction in post-release defects.',
    ],
    technologies: ['Guidewire PolicyCenter', 'GOSU', 'REST APIs', 'SQL', 'Selenium'],
  },
  {
    organization: 'Unisys Cloud 20/20',
    role: 'Research Project — Internship Credit',
    date: 'Nov 2019 – May 2020',
    location: 'Remote',
    bullets: [
      'Completed a bachelor’s research project for internship credit as part of Unisys Cloud 20/20.',
      'Applied machine learning to airport data and social media content, including sentiment classification, to develop insights for customer-retention strategies.',
      'Selected as a national finalist (Top 10) at the 11th edition of Unisys Cloud 20/20.',
    ],
    technologies: ['Python', 'Scikit-learn', 'Sentiment Analysis', 'BeautifulSoup', 'Pandas'],
  },
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'Football Offside Detection with Graph Neural Networks',
    category: 'Graph ML / Sports Analytics',
    problem: 'Detect offside situations from football tracking data by reasoning about player positioning.',
    approach: 'Modeled players as nodes and spatial relationships as graph structure using the SkillCorner OpenData dataset.',
    technologies: ['Python', 'PyTorch', 'Graph Neural Networks', 'SkillCorner tracking data'],
    image: '/projects/offside-gnn.jpg',
    imageAlt: 'Abstract football pitch with player nodes, graph connections and an offside line',
    layout: 'anchor',
  },
  {
    number: '02',
    title: 'Gender Bias in Large Language Models',
    category: 'LLM Research / Responsible AI',
    problem: 'Examine gender bias in occupation-related responses from large language models.',
    approach: 'Used controlled prompting, sentiment-based evaluation, dimensionality reduction and statistical analysis to study response patterns.',
    technologies: ['Python', 'GPT', 'NLP', 'Sentiment Analysis', 'PCA'],
    image: '/projects/llm-gender-bias.jpg',
    imageAlt: 'Editorial visualization of language patterns and clustered bias analysis',
    layout: 'standard',
  },
  {
    number: '03',
    title: 'Automated AI Research Paper Reviewer',
    category: 'NLP / Generative AI',
    problem: 'Support the research-paper review process with structured AI assistance.',
    approach: 'Combined document summarization, critique generation, plagiarism detection and improvement suggestions.',
    result: 'Approximately 90% alignment with human review in project evaluation.',
    technologies: ['BART', 'Flan-T5', 'SentenceTransformers', 'Python', 'Gradio'],
    image: '/projects/ai-paper-reviewer.jpg',
    imageAlt: 'Research papers moving through an AI-assisted review workflow',
    layout: 'standard',
  },
  {
    number: '04',
    title: 'Electricity Demand Forecasting',
    category: 'Time Series / Forecasting',
    problem: 'Forecast hourly electricity demand and make model predictions easy to explore.',
    approach: 'Compared statistical and deep-learning approaches and created an interactive prediction dashboard.',
    result: '18% lower MAE compared with the project baseline.',
    technologies: ['Python', 'ARIMA', 'LSTM', 'Streamlit'],
    image: '/projects/electricity-forecasting.jpg',
    imageAlt: 'Electricity grid and city beneath layered time-series forecast curves',
    layout: 'wide',
  },
];

export const toolkit = [
  'Python',
  'Java',
  'SQL',
  'R',
  'GOSU',
  'Git',
  'MySQL',
  'Selenium',
  'BeautifulSoup',
  'NumPy',
  'Pandas',
  'Scikit-learn',
  'TensorFlow',
  'Matplotlib',
];

export const education: Education[] = [
  {
    institution: 'Northeastern University',
    degree: 'Master of Science in Data Science',
    date: '2024 – 2026',
    url: 'https://www.northeastern.edu/',
  },
  {
    institution: 'Nitte Meenakshi Institute of Technology',
    degree: 'Bachelor of Engineering in Computer Science Engineering',
    date: '2017 – 2021',
    url: 'https://www.nmit.ac.in/',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Unisys Cloud 20/20 — National Finalist',
    date: 'May 9–10, 2020',
    context: '11th edition · Remote',
    description:
      'Selected among the national Top 10 for a machine-learning research project that analyzed airport data and classified social media sentiment to support customer-retention insights.',
  },
  {
    title: 'Smart India Hackathon 2019 — Second Runner-Up',
    date: 'March 1–3, 2019',
    context: 'Chennai, Tamil Nadu, India',
    description:
      'Recognized for Paritrana, an IoT ocean-rescue solution featuring an auto-deployable airbag belt and alerts to rescue centers to help prevent drownings.',
  },
];

export const publications: Publication[] = [
  {
    title: 'Sign Language Techno Arm',
    authors: 'P. Shobha, H. G. Raghuveer, Y. R. Ramyashree, G. S. Samarth and M. C. Sanjiv',
    venue: '2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)',
    date: 'October 16, 2022',
    description:
      'A sign-language system designed to convert hand signs into text and audio using convolutional neural networks and machine-learning methods.',
    doi: 'https://doi.org/10.1109/MysuruCon55714.2022.9972467',
  },
];

export const externalLinks = {
  github: 'https://github.com/SanjivDS',
  linkedin: 'https://www.linkedin.com/in/sanjivmotilalchoudhari',
  primaryEmail: 'sanjiv1099mc@gmail.com',
  secondaryEmail: 'sanjivchoudhari105@gmail.com',
};
