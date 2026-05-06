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
        ],
      },
      {
        id: "gk",
        name: "General Knowledge",
        topics: [
          { id: "banking_awareness", name: "Banking Awareness" },
          { id: "current_affairs", name: "Current Affairs" },
          { id: "economy", name: "Economy & Finance" },
          { id: "rbi", name: "RBI & Monetary Policy" },
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
    ],
    subjects: [
      {
        id: "gs_prelims",
        name: "GS Prelims",
        topics: [
          { id: "history", name: "History" },
          { id: "geography", name: "Geography" },
          { id: "polity", name: "Polity & Constitution" },
          { id: "economy", name: "Economy" },
        ],
      },
      {
        id: "gs_mains",
        name: "GS Mains",
        topics: [
          { id: "gs1", name: "GS Paper 1 - History & Culture" },
          { id: "gs2", name: "GS Paper 2 - Governance" },
          { id: "gs3", name: "GS Paper 3 - Economy & Security" },
          { id: "gs4", name: "GS Paper 4 - Ethics" },
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
    ],
    subjects: [
      {
        id: "reasoning",
        name: "Reasoning",
        topics: [
          { id: "analogy", name: "Analogy" },
          { id: "classification", name: "Classification" },
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
        ],
      },
      {
        id: "chemistry",
        name: "Chemistry",
        topics: [
          { id: "organic", name: "Organic Chemistry" },
          { id: "inorganic", name: "Inorganic Chemistry" },
        ],
      },
      {
        id: "mathematics",
        name: "Mathematics",
        topics: [
          { id: "algebra", name: "Algebra" },
          { id: "calculus", name: "Calculus" },
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
        ],
      },
      {
        id: "chemistry",
        name: "Chemistry",
        topics: [
          { id: "organic", name: "Organic Chemistry" },
          { id: "inorganic", name: "Inorganic Chemistry" },
        ],
      },
      {
        id: "physics",
        name: "Physics",
        topics: [
          { id: "mechanics", name: "Mechanics" },
          { id: "optics", name: "Optics" },
        ],
      },
    ],
  },
];

export const getExamCategory = (id: string): ExamCategory | undefined => {
  return examCategories.find((cat) => cat.id === id);
};
