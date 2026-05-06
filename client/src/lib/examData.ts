export interface ExamCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  exams: Exam[];
  subjects: Subject[];
}

export interface Exam {
  id: string;
  name: string;
  year: string;
}

export interface Subject {
  id: string;
  name: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  name: string;
}

export const examCategories: ExamCategory[] = [
  {
    id: "banking",
    name: "Banking",
    icon: "🏦",
    color: "from-blue-500 to-blue-600",
    description: "SBI Clerk, IBPS Clerk, RRB Office Assistant",
    exams: [
      { id: "sbi_clerk", name: "SBI Clerk", year: "2026-27" },
      { id: "ibps_clerk", name: "IBPS Clerk", year: "2026-27" },
      { id: "rrb_assistant", name: "RRB Office Assistant", year: "2026-27" },
      { id: "sbi_po", name: "SBI PO", year: "2026-27" },
      { id: "ibps_po", name: "IBPS PO", year: "2026-27" },
    ],
    subjects: [
      {
        id: "quant",
        name: "Quantitative Aptitude",
        topics: [
          { id: "simplification", name: "Simplification & Approximation" },
          { id: "algebra", name: "Algebra" },
          { id: "geometry", name: "Geometry & Mensuration" },
          { id: "percentage", name: "Percentage & Profit Loss" },
          { id: "ratio", name: "Ratio & Proportion" },
          { id: "time_work", name: "Time & Work" },
          { id: "speed_distance", name: "Speed, Time & Distance" },
          { id: "average", name: "Average & Mixture" },
        ],
      },
      {
        id: "reasoning",
        name: "Reasoning",
        topics: [
          { id: "seating", name: "Seating Arrangement" },
          { id: "coding", name: "Coding-Decoding" },
          { id: "blood", name: "Blood Relations" },
          { id: "direction", name: "Direction & Distance" },
          { id: "syllogism", name: "Syllogism" },
          { id: "inequality", name: "Inequality" },
          { id: "puzzle", name: "Puzzle" },
          { id: "statement", name: "Statement & Conclusion" },
        ],
      },
      {
        id: "english",
        name: "English Language",
        topics: [
          { id: "reading", name: "Reading Comprehension" },
          { id: "grammar", name: "Grammar & Vocabulary" },
          { id: "cloze", name: "Cloze Test" },
          { id: "error", name: "Error Detection" },
          { id: "para_jumble", name: "Para Jumble" },
          { id: "sentence_correction", name: "Sentence Correction" },
        ],
      },
      {
        id: "gk",
        name: "General Knowledge & Current Affairs",
        topics: [
          { id: "banking_awareness", name: "Banking Awareness" },
          { id: "current_affairs", name: "Current Affairs" },
          { id: "economy", name: "Economy & Finance" },
          { id: "rbi", name: "RBI & Monetary Policy" },
          { id: "static_gk", name: "Static GK" },
        ],
      },
    ],
  },
  {
    id: "upsc",
    name: "UPSC",
    icon: "🏛️",
    color: "from-amber-500 to-orange-600",
    description: "IAS, ESE, CDS, CAPF, NDA",
    exams: [
      { id: "ias", name: "IAS (Civil Services)", year: "2025-26" },
      { id: "ese", name: "ESE (Engineering)", year: "2025-26" },
      { id: "cds", name: "CDS", year: "2025-26" },
      { id: "nda", name: "NDA", year: "2025-26" },
      { id: "capf", name: "CAPF", year: "2025-26" },
    ],
    subjects: [
      {
        id: "gs_prelims",
        name: "GS Prelims",
        topics: [
          { id: "history", name: "History & Culture" },
          { id: "geography", name: "Geography" },
          { id: "polity", name: "Polity & Constitution" },
          { id: "economy", name: "Economy" },
          { id: "science", name: "Science & Technology" },
          { id: "environment", name: "Environment & Ecology" },
        ],
      },
      {
        id: "gs_mains",
        name: "GS Mains",
        topics: [
          { id: "gs1", name: "GS Paper 1 - History & Culture" },
          { id: "gs2", name: "GS Paper 2 - Governance & Constitution" },
          { id: "gs3", name: "GS Paper 3 - Economy & Security" },
          { id: "gs4", name: "GS Paper 4 - Ethics & Integrity" },
        ],
      },
      {
        id: "optional",
        name: "Optional Subjects",
        topics: [
          { id: "history_opt", name: "History" },
          { id: "geography_opt", name: "Geography" },
          { id: "public_admin", name: "Public Administration" },
          { id: "sociology", name: "Sociology" },
          { id: "anthropology", name: "Anthropology" },
        ],
      },
      {
        id: "essay",
        name: "Essay & Interview",
        topics: [
          { id: "essay_writing", name: "Essay Writing" },
          { id: "answer_writing", name: "Answer Writing" },
          { id: "interview_prep", name: "Interview Preparation" },
        ],
      },
    ],
  },
  {
    id: "ssc",
    name: "SSC",
    icon: "📚",
    color: "from-green-500 to-emerald-600",
    description: "CGL, CHSL, MTS, JE",
    exams: [
      { id: "cgl", name: "SSC CGL", year: "2026" },
      { id: "chsl", name: "SSC CHSL", year: "2026" },
      { id: "mts", name: "SSC MTS", year: "2026" },
      { id: "je", name: "SSC JE", year: "2026" },
      { id: "cpo", name: "SSC CPO", year: "2026" },
      { id: "gd", name: "SSC GD Constable", year: "2026" },
    ],
    subjects: [
      {
        id: "reasoning",
        name: "Reasoning",
        topics: [
          { id: "analogy", name: "Analogy" },
          { id: "classification", name: "Classification" },
          { id: "series", name: "Series" },
          { id: "coding", name: "Coding-Decoding" },
          { id: "matrix", name: "Matrix" },
          { id: "venn_diagram", name: "Venn Diagram" },
        ],
      },
      {
        id: "quant",
        name: "Quantitative Aptitude",
        topics: [
          { id: "arithmetic", name: "Arithmetic" },
          { id: "geometry", name: "Geometry" },
          { id: "trigonometry", name: "Trigonometry" },
          { id: "algebra", name: "Algebra" },
          { id: "statistics", name: "Statistics & Data Interpretation" },
        ],
      },
      {
        id: "english",
        name: "English Language",
        topics: [
          { id: "reading", name: "Reading Comprehension" },
          { id: "grammar", name: "Grammar" },
          { id: "vocabulary", name: "Vocabulary" },
          { id: "spotting_error", name: "Spotting Error" },
        ],
      },
      {
        id: "gk",
        name: "General Knowledge",
        topics: [
          { id: "history", name: "History" },
          { id: "geography", name: "Geography" },
          { id: "polity", name: "Polity" },
          { id: "science", name: "Science" },
          { id: "current_affairs", name: "Current Affairs" },
        ],
      },
    ],
  },
  {
    id: "railway",
    name: "Railway",
    icon: "🚂",
    color: "from-red-500 to-rose-600",
    description: "NTPC, Group D, ALP, JE",
    exams: [
      { id: "ntpc", name: "RRB NTPC", year: "2026" },
      { id: "group_d", name: "RRB Group D", year: "2026" },
      { id: "alp", name: "RRB ALP", year: "2026" },
      { id: "je", name: "RRB JE", year: "2026" },
      { id: "asm", name: "RRB ASM", year: "2026" },
    ],
    subjects: [
      {
        id: "reasoning",
        name: "Reasoning",
        topics: [
          { id: "analogy", name: "Analogy" },
          { id: "classification", name: "Classification" },
          { id: "series", name: "Series" },
          { id: "coding", name: "Coding-Decoding" },
          { id: "puzzle", name: "Puzzle" },
        ],
      },
      {
        id: "quant",
        name: "Quantitative Aptitude",
        topics: [
          { id: "arithmetic", name: "Arithmetic" },
          { id: "geometry", name: "Geometry" },
          { id: "algebra", name: "Algebra" },
        ],
      },
      {
        id: "general_science",
        name: "General Science",
        topics: [
          { id: "physics", name: "Physics" },
          { id: "chemistry", name: "Chemistry" },
          { id: "biology", name: "Biology" },
        ],
      },
      {
        id: "gk",
        name: "General Knowledge",
        topics: [
          { id: "current_affairs", name: "Current Affairs" },
          { id: "static_gk", name: "Static GK" },
        ],
      },
    ],
  },
  {
    id: "jee",
    name: "JEE",
    icon: "⚗️",
    color: "from-purple-500 to-indigo-600",
    description: "JEE Mains, JEE Advanced",
    exams: [
      { id: "jee_mains", name: "JEE Mains", year: "2026" },
      { id: "jee_advanced", name: "JEE Advanced", year: "2026" },
    ],
    subjects: [
      {
        id: "physics",
        name: "Physics",
        topics: [
          { id: "mechanics", name: "Mechanics" },
          { id: "thermodynamics", name: "Thermodynamics" },
          { id: "waves", name: "Waves & Sound" },
          { id: "electricity", name: "Electricity & Magnetism" },
          { id: "optics", name: "Optics" },
          { id: "modern_physics", name: "Modern Physics" },
        ],
      },
      {
        id: "chemistry",
        name: "Chemistry",
        topics: [
          { id: "organic", name: "Organic Chemistry" },
          { id: "inorganic", name: "Inorganic Chemistry" },
          { id: "physical", name: "Physical Chemistry" },
          { id: "coordination", name: "Coordination Compounds" },
        ],
      },
      {
        id: "mathematics",
        name: "Mathematics",
        topics: [
          { id: "algebra", name: "Algebra" },
          { id: "calculus", name: "Calculus" },
          { id: "geometry", name: "Coordinate Geometry" },
          { id: "trigonometry", name: "Trigonometry" },
          { id: "vectors", name: "Vectors & 3D" },
        ],
      },
    ],
  },
  {
    id: "neet",
    name: "NEET",
    icon: "🔬",
    color: "from-teal-500 to-cyan-600",
    description: "NEET UG Medical Entrance",
    exams: [
      { id: "neet_ug", name: "NEET UG", year: "2026" },
    ],
    subjects: [
      {
        id: "biology",
        name: "Biology",
        topics: [
          { id: "botany", name: "Botany" },
          { id: "zoology", name: "Zoology" },
          { id: "human_physiology", name: "Human Physiology" },
          { id: "genetics", name: "Genetics" },
          { id: "ecology", name: "Ecology" },
        ],
      },
      {
        id: "chemistry",
        name: "Chemistry",
        topics: [
          { id: "organic", name: "Organic Chemistry" },
          { id: "inorganic", name: "Inorganic Chemistry" },
          { id: "physical", name: "Physical Chemistry" },
        ],
      },
      {
        id: "physics",
        name: "Physics",
        topics: [
          { id: "mechanics", name: "Mechanics" },
          { id: "thermodynamics", name: "Thermodynamics" },
          { id: "waves", name: "Waves & Sound" },
          { id: "electricity", name: "Electricity & Magnetism" },
          { id: "optics", name: "Optics" },
          { id: "modern_physics", name: "Modern Physics" },
        ],
      },
    ],
  },
  {
    id: "mba",
    name: "MBA/CAT",
    icon: "💼",
    color: "from-yellow-500 to-amber-600",
    description: "CAT, XAT, SNAP, NMAT",
    exams: [
      { id: "cat", name: "CAT", year: "2025" },
      { id: "xat", name: "XAT", year: "2025" },
      { id: "snap", name: "SNAP", year: "2025" },
      { id: "nmat", name: "NMAT", year: "2025" },
      { id: "iift", name: "IIFT", year: "2025" },
    ],
    subjects: [
      {
        id: "quant",
        name: "Quantitative Ability",
        topics: [
          { id: "arithmetic", name: "Arithmetic" },
          { id: "algebra", name: "Algebra" },
          { id: "geometry", name: "Geometry" },
          { id: "number_system", name: "Number System" },
          { id: "permutation", name: "Permutation & Combination" },
        ],
      },
      {
        id: "reasoning",
        name: "Logical Reasoning",
        topics: [
          { id: "deduction", name: "Deduction" },
          { id: "induction", name: "Induction" },
          { id: "syllogism", name: "Syllogism" },
          { id: "logical_games", name: "Logical Games" },
        ],
      },
      {
        id: "verbal",
        name: "Verbal Ability",
        topics: [
          { id: "reading", name: "Reading Comprehension" },
          { id: "grammar", name: "Grammar" },
          { id: "vocabulary", name: "Vocabulary" },
          { id: "critical_reasoning", name: "Critical Reasoning" },
        ],
      },
      {
        id: "data",
        name: "Data Interpretation",
        topics: [
          { id: "tables", name: "Tables" },
          { id: "graphs", name: "Graphs & Charts" },
          { id: "caselets", name: "Caselets" },
        ],
      },
    ],
  },
  {
    id: "psc",
    name: "State PSC",
    icon: "🏢",
    color: "from-indigo-500 to-purple-600",
    description: "KPSC, MPSC, TNPSC, WBPSC",
    exams: [
      { id: "kpsc", name: "KPSC", year: "2025-26" },
      { id: "mpsc", name: "MPSC", year: "2025-26" },
      { id: "tnpsc", name: "TNPSC", year: "2025-26" },
      { id: "wbpsc", name: "WBPSC", year: "2025-26" },
      { id: "appsc", name: "APPSC", year: "2025-26" },
    ],
    subjects: [
      {
        id: "general_studies",
        name: "General Studies",
        topics: [
          { id: "history", name: "History & Culture" },
          { id: "geography", name: "Geography" },
          { id: "polity", name: "Polity" },
          { id: "economy", name: "Economy" },
          { id: "current_affairs", name: "Current Affairs" },
        ],
      },
      {
        id: "state_specific",
        name: "State Specific",
        topics: [
          { id: "state_history", name: "State History" },
          { id: "state_geography", name: "State Geography" },
          { id: "state_polity", name: "State Polity" },
        ],
      },
    ],
  },
  {
    id: "teaching",
    name: "Teaching",
    icon: "🎓",
    color: "from-pink-500 to-rose-600",
    description: "CTET, KVSET, NVSET",
    exams: [
      { id: "ctet", name: "CTET", year: "2025" },
      { id: "kvs", name: "KVS", year: "2025" },
      { id: "nvs", name: "NVS", year: "2025" },
      { id: "state_tet", name: "State TET", year: "2025" },
      { id: "dsssb", name: "DSSSB", year: "2025" },
    ],
    subjects: [
      {
        id: "child_development",
        name: "Child Development & Pedagogy",
        topics: [
          { id: "development", name: "Child Development" },
          { id: "learning", name: "Learning Theories" },
          { id: "inclusive", name: "Inclusive Education" },
        ],
      },
      {
        id: "language",
        name: "Language",
        topics: [
          { id: "english", name: "English" },
          { id: "hindi", name: "Hindi" },
          { id: "regional", name: "Regional Languages" },
        ],
      },
      {
        id: "social_studies",
        name: "Social Studies",
        topics: [
          { id: "history", name: "History" },
          { id: "geography", name: "Geography" },
          { id: "civics", name: "Civics" },
        ],
      },
    ],
  },
  {
    id: "defence",
    name: "Defence",
    icon: "🪖",
    color: "from-slate-600 to-slate-800",
    description: "NDA, AFCAT, Agniveer",
    exams: [
      { id: "nda", name: "NDA", year: "2025-26" },
      { id: "afcat", name: "AFCAT", year: "2025-26" },
      { id: "agniveer", name: "Agniveer", year: "2025-26" },
      { id: "cds", name: "CDS", year: "2025-26" },
    ],
    subjects: [
      {
        id: "reasoning",
        name: "Reasoning",
        topics: [
          { id: "analogy", name: "Analogy" },
          { id: "classification", name: "Classification" },
          { id: "series", name: "Series" },
        ],
      },
      {
        id: "quant",
        name: "Quantitative Aptitude",
        topics: [
          { id: "arithmetic", name: "Arithmetic" },
          { id: "geometry", name: "Geometry" },
          { id: "trigonometry", name: "Trigonometry" },
        ],
      },
      {
        id: "english",
        name: "English",
        topics: [
          { id: "grammar", name: "Grammar" },
          { id: "vocabulary", name: "Vocabulary" },
          { id: "reading", name: "Reading Comprehension" },
        ],
      },
      {
        id: "gk",
        name: "General Knowledge",
        topics: [
          { id: "history", name: "History" },
          { id: "geography", name: "Geography" },
          { id: "science", name: "Science" },
        ],
      },
    ],
  },
  {
    id: "gate",
    name: "PSU/GATE",
    icon: "⚙️",
    color: "from-cyan-500 to-blue-600",
    description: "GATE, ESE, PSU Exams",
    exams: [
      { id: "gate_cse", name: "GATE CSE", year: "2026" },
      { id: "gate_ece", name: "GATE ECE", year: "2026" },
      { id: "gate_me", name: "GATE ME", year: "2026" },
      { id: "gate_ce", name: "GATE CE", year: "2026" },
      { id: "ese", name: "ESE", year: "2026" },
    ],
    subjects: [
      {
        id: "core_subjects",
        name: "Core Subjects",
        topics: [
          { id: "data_structures", name: "Data Structures (CSE)" },
          { id: "digital", name: "Digital Circuits (ECE)" },
          { id: "mechanics", name: "Mechanics (ME)" },
          { id: "structures", name: "Structures (CE)" },
        ],
      },
      {
        id: "mathematics",
        name: "Engineering Mathematics",
        topics: [
          { id: "calculus", name: "Calculus" },
          { id: "linear_algebra", name: "Linear Algebra" },
          { id: "probability", name: "Probability & Statistics" },
        ],
      },
    ],
  },
  {
    id: "law",
    name: "Law Entrance",
    icon: "⚖️",
    color: "from-red-600 to-red-800",
    description: "CLAT, AILET, LSAT India",
    exams: [
      { id: "clat", name: "CLAT", year: "2025-26" },
      { id: "ailet", name: "AILET", year: "2025-26" },
      { id: "lsat", name: "LSAT India", year: "2025-26" },
      { id: "dlsa", name: "DLSA", year: "2025-26" },
    ],
    subjects: [
      {
        id: "reasoning",
        name: "Logical & Analytical Reasoning",
        topics: [
          { id: "deduction", name: "Deduction" },
          { id: "induction", name: "Induction" },
          { id: "logic_games", name: "Logic Games" },
        ],
      },
      {
        id: "reading",
        name: "Reading Comprehension",
        topics: [
          { id: "legal_passages", name: "Legal Passages" },
          { id: "general_passages", name: "General Passages" },
        ],
      },
      {
        id: "legal_knowledge",
        name: "Legal Knowledge",
        topics: [
          { id: "constitutional_law", name: "Constitutional Law" },
          { id: "criminal_law", name: "Criminal Law" },
          { id: "tort_law", name: "Tort Law" },
        ],
      },
    ],
  },
];

export const getExamCategory = (id: string): ExamCategory | undefined => {
  return examCategories.find((cat) => cat.id === id);
};

export const getAllTopics = (): Topic[] => {
  return examCategories.flatMap((cat) =>
    cat.subjects.flatMap((subj) => subj.topics)
  );
};

export const searchExams = (query: string): ExamCategory[] => {
  const lowerQuery = query.toLowerCase();
  return examCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(lowerQuery) ||
      cat.description.toLowerCase().includes(lowerQuery) ||
      cat.exams.some((exam) =>
        exam.name.toLowerCase().includes(lowerQuery)
      ) ||
      cat.subjects.some(
        (subj) =>
          subj.name.toLowerCase().includes(lowerQuery) ||
          subj.topics.some((topic) =>
            topic.name.toLowerCase().includes(lowerQuery)
          )
      )
  );
};
