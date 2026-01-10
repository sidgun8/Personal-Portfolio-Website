export interface ProjectType {
  title: string;
  description: string[];
  tech: string[];
  images?: string[];
  links: { name: string, link: string }[]
  dir_name?: string;
}

export const projectsData: ProjectType[] = [
  {
    title: 'Multi Lingual Industrial Safety and Hazard Management Chatbot',
    description: [
      "Developed a Retrieval-Augmented Generation (RAG) chatbot for Industrial Safety that assists plant operators in accessing safety protocols, SOPs, and hazard guidelines in real time.",
      "Implemented semantic chunking and vector retrieval using bge-large and ChromaDB, enabling precise information extraction from technical safety manuals.",
      "Adopted a hybrid retrieval strategy combining BM25 (for keyword-based matching) and ChromaDB (for semantic understanding), integrated with Meta Llama via AWS Bedrock for accurate and context-aware summarisation.",
      "Enabled multilingual support by using ASCII-based language detection and on-the-fly translation through the LLM, ensuring inclusivity for diverse plant personnel.",
      "Built a Streamlit-based user interface to make the chatbot easily accessible to non-technical users within industrial environments."
    ],
    tech: ['Python', 'RAG', 'LLMs', 'AWS Bedrock'],
    links: [
      { name: "Code", link: "https://github.com/sidgun8/Industrial-Safety-for-Indian-Chemical-Plants-QA" }
    ]
  },
  {
    title: 'NanoBubble Residence time',
    description: [
      "Developed a specialized networking platform (website and app) for the sports world.",
      "Implemented a token-based stateless authentication system and also integrated Google login.",
      "Reduced JavaScript bundle size by 20% through code splitting, boosting performance and reducing load times.",
      "Achieved an SEO score of 100 and improved social media visibility by generating Open Graph images with Vercel Edge Functions."
    ],
    tech: ['ODE', 'MATLAB', 'Python', 'Mathematical Modelling'],
    links: [
      { name: "Demo", link: "https://notdoneyet.in" },
      { name: "Android App", link: "https://notdoneyet.in/app/android" },
      { name: "Code", link: "https://github.com/arjunsharma6622/notDoneYet" }
    ]
  },
  // {
  //   title: 'Netflix Clone',
  //   description: 'Developed an immersive Netflix-inspired web application using React, MongoDB, Node.js, and SASS, facilitating dynamic content delivery. Employed Firebase for real-time data storage, ensuring smooth and seamless user experiences. Integrated various user-friendly features to enhance engagement and interaction.',
  //   techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
  //   codeLink: 'https://github.com/Arjun27sharma/Netflix-Clone',
  //   images: [1, 2, 3, 4, 5, 6, 7],
  //   dir_name: 'netflix'
  // },
];