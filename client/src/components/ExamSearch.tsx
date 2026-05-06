import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Search, X } from "lucide-react";
import { searchExams, examCategories } from "@/lib/examData";

export default function ExamSearch() {
  const [query, setQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchExams(query);
  }, [query]);

  const allResults = useMemo(() => {
    if (!query.trim()) return [];
    const categories = searchExams(query);
    const allTopics: Array<{
      type: "category" | "exam" | "subject" | "topic";
      categoryId: string;
      categoryName: string;
      categoryIcon: string;
      name: string;
      id?: string;
    }> = [];

    categories.forEach((cat) => {
      allTopics.push({
        type: "category",
        categoryId: cat.id,
        categoryName: cat.name,
        categoryIcon: cat.icon,
        name: cat.name,
      });

      cat.exams.forEach((exam) => {
        if (exam.name.toLowerCase().includes(query.toLowerCase())) {
          allTopics.push({
            type: "exam",
            categoryId: cat.id,
            categoryName: cat.name,
            categoryIcon: cat.icon,
            name: exam.name,
            id: exam.id,
          });
        }
      });

      cat.subjects.forEach((subject) => {
        if (subject.name.toLowerCase().includes(query.toLowerCase())) {
          allTopics.push({
            type: "subject",
            categoryId: cat.id,
            categoryName: cat.name,
            categoryIcon: cat.icon,
            name: subject.name,
            id: subject.id,
          });
        }

        subject.topics.forEach((topic) => {
          if (topic.name.toLowerCase().includes(query.toLowerCase())) {
            allTopics.push({
              type: "topic",
              categoryId: cat.id,
              categoryName: cat.name,
              categoryIcon: cat.icon,
              name: topic.name,
              id: topic.id,
            });
          }
        });
      });
    });

    return allTopics.slice(0, 10);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search exams, topics..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-10 pr-10"
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && allResults.length > 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 max-h-96 overflow-y-auto">
          {allResults.map((result, idx) => (
            <Link key={idx} href={`/exam/${result.categoryId}`}>
              <div className="px-4 py-3 hover:bg-muted cursor-pointer border-b last:border-b-0 flex items-start gap-3">
                <span className="text-lg flex-shrink-0">{result.categoryIcon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{result.name}</p>
                  <p className="text-xs text-muted-foreground">{result.categoryName}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {result.type === "category" && "Exam Category"}
                    {result.type === "exam" && "Exam"}
                    {result.type === "subject" && "Subject"}
                    {result.type === "topic" && "Topic"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Card>
      )}

      {isOpen && query && allResults.length === 0 && (
        <Card className="absolute top-full mt-2 w-full z-50 p-4 text-center text-sm text-muted-foreground">
          No results found for "{query}"
        </Card>
      )}
    </div>
  );
}
