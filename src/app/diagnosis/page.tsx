"use client";

import { useMemo, useState } from "react";

type AnswerKey = "purpose" | "experience" | "budget" | "priority";

type Answers = Record<AnswerKey, string>;

type Question = {
  id: AnswerKey;
  label: string;
  title: string;
  description: string;
  options: {
    value: string;
    icon: string;
    label: string;
    description: string;
  }[];
};

type RecommendationTool = {
  name: string;
  initial: string;
  color: string;
  category: string;
  summary: string;
  profiles: {
    purpose: string[];
    experience: string[];
    budget: string[];
    priority: string[];
  };
};

const questions: Question[] = [
  {
    id: "purpose",
    label: "STEP 01",
    title: "AI로 어떤 일을 해결하고 싶으신가요?",
    description: "가장 자주 사용할 목적 한 가지를 선택해 주세요.",
    options: [
      {
        value: "document",
        icon: "📝",
        label: "문서·보고서",
        description: "보고서, 이메일, 기획서와 글 작성",
      },
      {
        value: "research",
        icon: "🔍",
        label: "자료조사",
        description: "정보 탐색, 시장조사와 자료 정리",
      },
      {
        value: "image",
        icon: "🎨",
        label: "이미지 제작",
        description: "광고, 썸네일과 디자인 제작",
      },
      {
        value: "presentation",
        icon: "📊",
        label: "PPT 제작",
        description: "발표자료, 제안서와 슬라이드 구성",
      },
      {
        value: "coding",
        icon: "💻",
        label: "코딩",
        description: "코드 작성, 오류 해결과 개발 학습",
      },
      {
        value: "automation",
        icon: "⚙️",
        label: "업무 자동화",
        description: "반복 업무와 서비스 연결 자동화",
      },
    ],
  },
  {
    id: "experience",
    label: "STEP 02",
    title: "현재 AI 사용 경험은 어느 정도인가요?",
    description: "본인의 현재 수준과 가장 가까운 항목을 선택해 주세요.",
    options: [
      {
        value: "beginner",
        icon: "🌱",
        label: "처음 사용",
        description: "AI를 거의 사용해 본 적이 없습니다.",
      },
      {
        value: "intermediate",
        icon: "🚀",
        label: "가끔 사용",
        description: "질문과 간단한 업무에 사용해 봤습니다.",
      },
      {
        value: "advanced",
        icon: "🧠",
        label: "자주 사용",
        description: "여러 AI를 업무에 적극적으로 활용합니다.",
      },
    ],
  },
  {
    id: "budget",
    label: "STEP 03",
    title: "AI 서비스 예산은 어떻게 생각하시나요?",
    description: "서비스별 요금은 달라질 수 있으므로 선호 기준만 선택합니다.",
    options: [
      {
        value: "free",
        icon: "🆓",
        label: "무료부터 시작",
        description: "무료로 체험한 후 필요하면 결제하고 싶습니다.",
      },
      {
        value: "paid",
        icon: "💳",
        label: "유료도 가능",
        description: "업무 효과가 있다면 유료 서비스도 사용할 수 있습니다.",
      },
    ],
  },
  {
    id: "priority",
    label: "STEP 04",
    title: "AI를 선택할 때 무엇이 가장 중요한가요?",
    description: "여러 조건 중 가장 중요한 기준 한 가지를 선택해 주세요.",
    options: [
      {
        value: "easy",
        icon: "👍",
        label: "쉬운 사용법",
        description: "배우는 데 시간이 많이 들지 않아야 합니다.",
      },
      {
        value: "quality",
        icon: "✨",
        label: "결과물 품질",
        description: "시간이 걸려도 결과물의 완성도가 중요합니다.",
      },
      {
        value: "speed",
        icon: "⚡",
        label: "빠른 작업",
        description: "짧은 시간 안에 초안과 결과가 필요합니다.",
      },
      {
        value: "automation",
        icon: "🔗",
        label: "자동화·연결",
        description: "다른 업무 도구와 연결해 반복 작업을 줄이고 싶습니다.",
      },
    ],
  },
];

const tools: RecommendationTool[] = [
  {
    name: "ChatGPT",
    initial: "C",
    color: "#0B1831",
    category: "범용 AI",
    summary: "문서 작성, 아이디어 정리, 질문 답변과 코딩 등 다양한 업무에 활용할 수 있습니다.",
    profiles: {
      purpose: ["document", "research", "coding", "automation"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["easy", "speed", "automation"],
    },
  },
  {
    name: "Claude",
    initial: "A",
    color: "#A85F3B",
    category: "문서 분석",
    summary: "긴 문서 분석, 내용 정리와 자연스러운 글쓰기에 활용할 수 있습니다.",
    profiles: {
      purpose: ["document", "research", "coding"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["quality", "easy"],
    },
  },
  {
    name: "Gemini",
    initial: "G",
    color: "#2864DC",
    category: "검색·업무",
    summary: "자료 탐색, 문서 작성과 다양한 업무 지원에 활용할 수 있습니다.",
    profiles: {
      purpose: ["document", "research", "coding"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["easy", "speed"],
    },
  },
  {
    name: "Perplexity",
    initial: "P",
    color: "#168C91",
    category: "자료조사",
    summary: "질문을 바탕으로 정보를 탐색하고 관련 출처를 확인할 때 활용합니다.",
    profiles: {
      purpose: ["research"],
      experience: ["beginner", "intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["quality", "speed", "easy"],
    },
  },
  {
    name: "Midjourney",
    initial: "M",
    color: "#111827",
    category: "이미지 제작",
    summary: "콘셉트 이미지와 다양한 스타일의 시각 자료를 제작할 때 활용합니다.",
    profiles: {
      purpose: ["image"],
      experience: ["intermediate", "advanced"],
      budget: ["paid"],
      priority: ["quality"],
    },
  },
  {
    name: "Canva",
    initial: "C",
    color: "#7C3AED",
    category: "디자인·PPT",
    summary: "이미지, 카드뉴스와 프레젠테이션을 쉽게 디자인할 때 활용합니다.",
    profiles: {
      purpose: ["image", "presentation"],
      experience: ["beginner", "intermediate"],
      budget: ["free", "paid"],
      priority: ["easy", "speed"],
    },
  },
  {
    name: "Gamma",
    initial: "G",
    color: "#7C55E7",
    category: "PPT 제작",
    summary: "발표자료, 제안서와 간단한 웹 문서를 빠르게 구성할 때 활용합니다.",
    profiles: {
      purpose: ["presentation", "document"],
      experience: ["beginner", "intermediate"],
      budget: ["free", "paid"],
      priority: ["easy", "speed"],
    },
  },
  {
    name: "GitHub Copilot",
    initial: "G",
    color: "#24292F",
    category: "코딩",
    summary: "코드 작성과 개발 작업을 지원하는 프로그래밍 보조 도구입니다.",
    profiles: {
      purpose: ["coding"],
      experience: ["intermediate", "advanced"],
      budget: ["paid"],
      priority: ["speed", "automation"],
    },
  },
  {
    name: "Zapier",
    initial: "Z",
    color: "#FF4F00",
    category: "업무 자동화",
    summary: "여러 업무 서비스를 연결해 반복 작업을 자동화할 때 활용합니다.",
    profiles: {
      purpose: ["automation"],
      experience: ["intermediate", "advanced"],
      budget: ["free", "paid"],
      priority: ["automation", "speed"],
    },
  },
];

const initialAnswers: Answers = {
  purpose: "",
  experience: "",
  budget: "",
  priority: "",
};

function getAnswerLabel(id: AnswerKey, value: string) {
  const question = questions.find((item) => item.id === id);
  const option = question?.options.find((item) => item.value === value);

  return option?.label ?? value;
}

export default function DiagnosisPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = questions[step];
  const currentAnswer = answers[currentQuestion.id];

  const recommendations = useMemo(() => {
    return tools
      .map((tool) => {
        let score = 0;
        const reasons: string[] = [];

        if (tool.profiles.purpose.includes(answers.purpose)) {
          score += 5;
          reasons.push(
            `${getAnswerLabel("purpose", answers.purpose)} 목적에 적합`,
          );
        }

        if (tool.profiles.experience.includes(answers.experience)) {
          score += 2;
          reasons.push("현재 AI 사용 경험과 잘 맞음");
        }

        if (tool.profiles.budget.includes(answers.budget)) {
          score += 2;
          reasons.push("선호하는 예산 기준과 비교 가능");
        }

        if (tool.profiles.priority.includes(answers.priority)) {
          score += 3;
          reasons.push(
            `${getAnswerLabel("priority", answers.priority)} 기준에 적합`,
          );
        }

        return {
          ...tool,
          score,
          reasons,
        };
      })
      .sort((first, second) => second.score - first.score)
      .slice(0, 3);
  }, [answers]);

  const selectAnswer = (value: string) => {
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: value,
    }));
  };

  const goNext = () => {
    if (!currentAnswer) {
      return;
    }

    if (step === questions.length - 1) {
      setShowResult(true);
      return;
    }

    setStep((current) => current + 1);
  };

  const goBack = () => {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  };

  const resetDiagnosis = () => {
    setAnswers(initialAnswers);
    setStep(0);
    setShowResult(false);
  };

  const progress = showResult
    ? 100
    : ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
          <a
            href="/"
            className="text-2xl font-black tracking-tight text-[#0B1831]"
          >
            ATLAS <span className="text-[#18B7A0]">AI</span>
          </a>

          <nav className="ml-auto hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
            <a href="/" className="hover:text-[#18B7A0]">
              홈
            </a>

            <a href="/ai" className="hover:text-[#18B7A0]">
              AI 찾기
            </a>

            <a href="/compare" className="hover:text-[#18B7A0]">
              AI 비교
            </a>

            <a href="/#guides" className="hover:text-[#18B7A0]">
              활용 가이드
            </a>

            <a href="/#contact" className="hover:text-[#18B7A0]">
              기업 문의
            </a>
          </nav>

          <a
            href="/diagnosis"
            className="ml-6 rounded-xl bg-[#18B7A0] px-5 py-3 text-sm font-bold text-white"
          >
            무료 AI 진단
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#0B1831] px-6 py-16 text-white">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-black tracking-widest text-[#55D6C3]">
              FREE AI DIAGNOSIS
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              3분 무료 AI 진단
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              네 가지 질문에 답하면 목적과 사용 조건에 맞는 AI를 추천합니다.
            </p>

            <div className="mx-auto mt-9 max-w-2xl">
              <div className="mb-3 flex justify-between text-xs font-bold text-slate-400">
                <span>
                  {showResult
                    ? "진단 완료"
                    : `${step + 1} / ${questions.length} 단계`}
                </span>
                <span>{Math.round(progress)}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#18B7A0] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            {!showResult ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
                <p className="text-sm font-black tracking-widest text-[#18B7A0]">
                  {currentQuestion.label}
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-[#0B1831]">
                  {currentQuestion.title}
                </h2>

                <p className="mt-4 text-slate-500">
                  {currentQuestion.description}
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {currentQuestion.options.map((option) => {
                    const isSelected = currentAnswer === option.value;

                    return (
                      <button
                        type="button"
                        key={option.value}
                        onClick={() => selectAnswer(option.value)}
                        className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition ${
                          isSelected
                            ? "border-[#18B7A0] bg-[#E8F8F5] shadow-sm"
                            : "border-slate-200 bg-white hover:border-[#18B7A0]"
                        }`}
                      >
                        <span className="text-2xl">{option.icon}</span>

                        <span className="min-w-0 flex-1">
                          <strong className="block text-[#0B1831]">
                            {option.label}
                          </strong>

                          <span className="mt-2 block text-sm leading-6 text-slate-500">
                            {option.description}
                          </span>
                        </span>

                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-black ${
                            isSelected
                              ? "bg-[#18B7A0] text-white"
                              : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {isSelected ? "✓" : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-7">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={step === 0}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ← 이전
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!currentAnswer}
                    className="rounded-xl bg-[#0B1831] px-6 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    {step === questions.length - 1
                      ? "추천 결과 보기"
                      : "다음 질문 →"}
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="rounded-3xl bg-[#0B1831] p-8 text-white sm:p-12">
                  <p className="text-sm font-black tracking-widest text-[#55D6C3]">
                    DIAGNOSIS RESULT
                  </p>

                  <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                    추천 AI 3개를 확인하세요
                  </h2>

                  <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                    선택한 목적과 조건을 기준으로 점수가 높은 AI를
                    추천했습니다.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {questions.map((question) => (
                      <span
                        key={question.id}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300"
                      >
                        {getAnswerLabel(question.id, answers[question.id])}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                  {recommendations.map((tool, index) => (
                    <article
                      key={tool.name}
                      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className="grid h-14 w-14 place-items-center rounded-2xl text-xl font-black text-white"
                          style={{ backgroundColor: tool.color }}
                        >
                          {tool.initial}
                        </span>

                        <span className="rounded-full bg-[#E8F8F5] px-3 py-2 text-xs font-black text-[#109683]">
                          추천 {index + 1}순위
                        </span>
                      </div>

                      <p className="mt-6 text-xs font-bold text-[#109683]">
                        {tool.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-black text-[#0B1831]">
                        {tool.name}
                      </h3>

                      <p className="mt-4 min-h-24 text-sm leading-6 text-slate-500">
                        {tool.summary}
                      </p>

                      <div className="mt-6 border-t border-slate-200 pt-5">
                        <p className="text-sm font-black text-[#0B1831]">
                          추천 이유
                        </p>

                        <ul className="mt-3 space-y-2">
                          {tool.reasons.length > 0 ? (
                            tool.reasons.map((reason) => (
                              <li
                                key={reason}
                                className="flex gap-2 text-sm leading-6 text-slate-500"
                              >
                                <span className="text-[#18B7A0]">✓</span>
                                <span>{reason}</span>
                              </li>
                            ))
                          ) : (
                            <li className="text-sm text-slate-500">
                              추가 비교가 필요한 도구입니다.
                            </li>
                          )}
                        </ul>
                      </div>

                      <a
                        href="/compare"
                        className="mt-7 block rounded-xl bg-[#0B1831] px-5 py-4 text-center text-sm font-bold text-white hover:bg-[#18B7A0]"
                      >
                        비교 페이지에서 확인 →
                      </a>
                    </article>
                  ))}
                </div>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={resetDiagnosis}
                    className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-[#0B1831]"
                  >
                    진단 다시 하기
                  </button>

                  <a
                    href="/ai"
                    className="rounded-xl bg-[#18B7A0] px-6 py-4 text-center font-bold text-white"
                  >
                    전체 AI 목록 보기
                  </a>
                </div>

                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
                  현재 진단 결과는 기능 확인을 위한 초안입니다. 실제 공개
                  전에는 AI 정보와 추천 점수 기준을 검증하고 지속적으로
                  개선해야 합니다.
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-[#071326] px-6 py-10 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 md:flex-row">
          <div>
            <p className="text-xl font-black text-white">
              ATLAS <span className="text-[#18B7A0]">AI</span>
            </p>

            <p className="mt-2 text-sm">
              사람들이 원하는 결과를 AI로 달성하도록 돕습니다.
            </p>
          </div>

          <p className="text-sm">
            © 2026 ATLAS AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}