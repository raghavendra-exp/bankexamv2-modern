export interface PromptOptions {
  examName: string;
  examYear: string;
  subjectName: string;
  topicName: string;
  language: "english" | "hindi" | "bilingual";
  difficulty: "easy" | "medium" | "hard" | "mixed";
  vocabDepth: number; // 1-20
  questionCount: number; // 5-25
}

export interface PracticeSetOptions extends PromptOptions {
  format: "pdf" | "whatsapp" | "standard";
  includeHints: boolean;
  includeSolutions: boolean;
  includeMarkingScheme: boolean;
}

export interface NewspaperOptions extends PromptOptions {
  newspapers: string[];
  analysisColumns: string[];
  includeVocabulary: boolean;
  includeQA: boolean;
  includeOneLiners: boolean;
}

export const generateStudyPrompt = (options: PromptOptions): string => {
  const {
    examName,
    examYear,
    subjectName,
    topicName,
    language,
    difficulty,
    vocabDepth,
    questionCount,
  } = options;

  return `You are an expert ${examName} exam tutor specializing in ${subjectName}.

Generate a comprehensive study guide for:
- Exam: ${examName} (${examYear})
- Subject: ${subjectName}
- Topic: ${topicName}
- Difficulty Level: ${difficulty}
- Language: ${language === "bilingual" ? "English with Hindi key terms" : language}

INCLUDE THE FOLLOWING SECTIONS:

1. **CORE CONCEPTS** (5-7 key concepts)
   - Clear definitions and explanations
   - Real-world applications relevant to ${examName}

2. **KEY FORMULAS & PRINCIPLES** (if applicable)
   - List all important formulas
   - Explain when and how to use each
   - Include memory tricks or mnemonics

3. **SOLVED EXAMPLES** (${Math.max(3, Math.floor(questionCount / 5))} examples)
   - Step-by-step solutions
   - Show all working
   - Highlight key decision points

4. **COMMON MISTAKES TO AVOID**
   - List 5-7 typical student errors
   - Explain why they're wrong
   - Provide correct approach

5. **PRACTICE QUESTIONS** (${questionCount} MCQs)
   - Mix of ${difficulty} difficulty
   - Randomize correct answer position
   - Include plausible distractors
   - Provide answer key with explanations

6. **EXAM-DAY STRATEGY**
   - Time management tips
   - Approach to solve this topic in exam
   - Common pitfalls to watch for

7. **VOCABULARY & TERMINOLOGY** (${vocabDepth} key terms)
   - Term | Definition | Example
   - Focus on ${examName}-specific jargon

FORMAT REQUIREMENTS:
- Use clear headers with emojis (📌, 💡, ✅, ⚠️, 🎯, 🏆, 📚)
- Use bullet points for lists
- Use tables for comparisons
- Bold important terms on first use
${language !== "english" ? "- Include Hindi translations for key terms in Devanagari script" : ""}
- Make content exam-pattern aware

QUALITY STANDARDS:
- Content must match latest ${examName} exam patterns (${examYear})
- All examples should be realistic and computation-friendly
- Ensure accuracy and completeness
- Maintain academic rigor appropriate for ${examName}

Generate the complete guide now.`;
};

export const generatePracticeSetPrompt = (
  options: PracticeSetOptions
): string => {
  const {
    examName,
    examYear,
    subjectName,
    topicName,
    format,
    difficulty,
    questionCount,
    includeHints,
    includeSolutions,
    includeMarkingScheme,
  } = options;

  const formatInstructions = {
    pdf: "Format for PDF printing: Use clear headers, question numbering, space for answers. Copy-paste ready for Word or PDF generator.",
    whatsapp: "Format for WhatsApp: Use *bold*, _italic_, emoji headers. Keep messages under 4000 chars.",
    standard: "Standard format: Clear numbering, options on separate lines (A)(B)(C)(D).",
  };

  return `You are an expert ${examName} exam educator and question paper designer.

Generate a practice set for:
- Exam: ${examName} (${examYear})
- Subject: ${subjectName}
- Topic: ${topicName}
- Number of Questions: ${questionCount}
- Difficulty: ${difficulty}
- Format: ${format}

${formatInstructions[format]}

QUESTION REQUIREMENTS:
- All questions must follow exact ${examName} exam pattern
- Difficulty distribution: ${
    difficulty === "mixed"
      ? "30% Easy + 50% Medium + 20% Hard"
      : `All ${difficulty} level`
  }
- Randomize correct answer position
- All distractors must be plausible and represent common errors
- No repeated concepts across questions

EACH QUESTION MUST INCLUDE:
- Clear, unambiguous question stem
- Four distinct options (A, B, C, D)
- Correct answer marked
${includeHints ? "- Brief hint for solving" : ""}

AFTER ALL QUESTIONS:
${includeMarkingScheme ? "- Marking scheme (marks per question)" : ""}
- Answer Key page
${includeSolutions ? "- Detailed solutions with full working\n- Explanation of why other options are wrong" : ""}

QUALITY STANDARDS:
- Exact question style from latest ${examYear} papers
- All numerical values realistic
- Proper grammar and clarity
- Exam-pattern aware content

Generate the complete practice set now.`;
};

export const generateNewspaperPrompt = (options: NewspaperOptions): string => {
  const {
    examName,
    examYear,
    subjectName,
    topicName,
    newspapers,
    analysisColumns,
    includeVocabulary,
    includeQA,
    includeOneLiners,
    language,
  } = options;

  return `You are an expert ${examName} exam tutor specializing in current affairs and newspaper analysis.

Generate a comprehensive newspaper analysis for:
- Exam: ${examName} (${examYear})
- Subject: ${subjectName}
- Focus Topic: ${topicName}
- Date: Today's date
- Newspapers: ${newspapers.join(", ")}
- Analysis Columns: ${analysisColumns.join(", ")}
- Language: ${language === "bilingual" ? "English with Hindi key terms" : language}

ANALYSIS STRUCTURE:

1. **NEWSPAPER HEADLINES** (5-7 relevant stories)
   - Story title
   - 2-line summary
   - Relevance to ${examName}
   - Key takeaway for exam

2. **DETAILED ANALYSIS**
   - Background and context
   - Key facts and figures
   - Implications for India
   - Exam-relevant points

${includeVocabulary ? `3. **VOCABULARY & TERMINOLOGY**
   - 5-7 important terms from today's news
   - Format: Term | Definition | Example from news\n` : ""}

${includeQA ? `4. **EXAM-READY Q&A** (10-15 pairs)
   - Q: [Question based on today's news]
   - A: [Precise, exam-format answer]
   - Relevance: [Why this matters for ${examName}]\n` : ""}

${includeOneLiners ? `5. **ONE-LINER CURRENT AFFAIRS** (15-20 points)
   - ▸ [Fact] — [Source/Date]
   - Format: Concise, exam-ready\n` : ""}

6. **EXAM STRATEGY**
   - How to approach this topic in exam
   - Likely question patterns
   - Answer writing tips

7. **STATIC CONTEXT**
   - Historical background
   - Related policies/acts
   - Previous exam questions on similar topics

FORMAT REQUIREMENTS:
- Use emojis for headers (📰, 📊, 💡, 🎯, ⚡, 📌)
- Use ━━━ dividers between sections
- Bold important terms on first use
${language !== "english" ? "- Include Hindi translations in Devanagari script" : ""}
- Make content ${examName}-pattern aware

QUALITY STANDARDS:
- All information must be accurate and current
- Content must be relevant to ${examName} syllabus
- Maintain academic rigor
- Ensure clarity and completeness

Generate the complete newspaper analysis now.`;
};
