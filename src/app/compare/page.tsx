"use client";

import { useState } from "react";

type CompareTool = {
  name: string;
  initial: string;
  color: string;
  category: string;
  purpose: string;
  difficulty: string;
  pricing: string;
  bestFor: string;
  strengths: string[];
  cautions: string[];
};

type ComparableKey =
  | "purpose"
  | "difficulty"
  | "pricing"
  | "bestFor"
  | "strengths"
  | "cautions";

const tools: CompareTool[] = [
  {
    name: "ChatGPT",
    initial: "C",
    color: "#0B1831",
    category: "범용 AI",
    purpose: "문서 초안, 아이디어 정리, 질문 답변, 코딩 지원",
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "AI를 처음 사용하는 개인과 직장인",
    strengths: [
      "다양한 업무에 폭넓게 활용 가능",
      "초보자가 시작하기 쉬움",
    ],
    cautions: [
      "중요한 정보는 별도로 사실 확인 필요",
      "민감한 개인정보 입력 주의",
    ],
  },
  {
    name: "Claude",
    initial: "A",
    color: "#A85F3B",
    category: "문서 분석",
    purpose: "긴 문서 분석, 글쓰기, 내용 요약, 코딩 지원",
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "긴 문서와 글을 자주 다루는 사용자",
    strengths: [
      "긴 문서 중심의 작업에 활용 가능",
      "자연스러운 문장 구성에 활용",
    ],
    cautions: [
      "결과물의 정확성을 직접 검토해야 함",
      "서비스별 사용 한도 확인 필요",
    ],
  },
  {
    name: "Gemini",
    initial: "G",
    color: "#2864DC",
    category: "검색·업무",
    purpose: "자료 탐색, 문서 작성, 아이디어 정리, 코딩 지원",
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "다양한 업무 도구를 사용하는 사용자",
    strengths: [
      "다양한 업무에 활용 가능",
      "자료 탐색과 문서 작성 지원",
    ],
    cautions: [
      "출처와 답변의 정확성 검토 필요",
      "기능과 제공 범위가 변경될 수 있음",
    ],
  },
  {
    name: "Perplexity",
    initial: "P",
    color: "#168C91",
    category: "자료조사",
    purpose: "질문 기반 검색, 자료조사, 출처 확인",
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "빠르게 자료를 조사하고 싶은 사용자",
    strengths: [
      "정보 탐색 과정에 활용하기 쉬움",
      "자료 출처 확인에 도움",
    ],
    cautions: [
      "표시된 출처 내용을 직접 확인해야 함",
      "전문적인 판단을 완전히 대신할 수 없음",
    ],
  },
  {
    name: "Midjourney",
    initial: "M",
    color: "#111827",
    category: "이미지 제작",
    purpose: "이미지 생성, 콘셉트 제작, 시각적 아이디어 표현",
    difficulty: "보통",
    pricing: "공식 요금 확인",
    bestFor: "디자인과 콘텐츠를 제작하는 사용자",
    strengths: [
      "다양한 스타일의 이미지 제작 가능",
      "콘셉트 시각화에 활용",
    ],
    cautions: [
      "원하는 결과를 위한 설명 작성 연습 필요",
      "상업적 사용 조건 확인 필요",
    ],
  },
  {
    name: "Canva",
    initial: "C",
    color: "#7C3AED",
    category: "디자인·PPT",
    purpose: "이미지, 카드뉴스, 프레젠테이션 디자인",
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "디자인 비전문가, 소상공인과 콘텐츠 제작자",
    strengths: [
      "템플릿을 활용해 쉽게 시작 가능",
      "다양한 디자인 작업을 한곳에서 진행",
    ],
    cautions: [
      "일부 기능은 요금제 확인 필요",
      "사용하는 자료의 라이선스 확인 필요",
    ],
  },
  {
    name: "Gamma",
    initial: "G",
    color: "#7C55E7",
    category: "PPT 제작",
    purpose: "발표자료, 제안서와 간단한 웹 문서 구성",
    difficulty: "쉬움",
    pricing: "공식 요금 확인",
    bestFor: "발표자료를 빠르게 구성하려는 사용자",
    strengths: [
      "자료 구조와 초안을 빠르게 구성",
      "디자인 경험이 적어도 시작 가능",
    ],
    cautions: [
      "최종 내용과 디자인 검토 필요",
      "세부 편집 범위 확인 필요",
    ],
  },
  {
    name: "GitHub Copilot",
    initial: "G",
    color: "#24292F",
    category: "코딩",
    purpose: "코드 작성, 개발 보조와 프로그래밍 학습",
    difficulty: "보통",
    pricing: "공식 요금 확인",
    bestFor: "개발자와 코딩 학습자",
    strengths: [
      "코드 작성 과정의 생산성 향상 지원",
      "개발 환경에서 활용 가능",
    ],
    cautions: [
      "생성된 코드는 반드시 검토하고 테스트해야 함",
      "보안과 라이선스 확인 필요",
    ],
  },
  {
    name: "Zapier",
    initial: "Z",
    color: "#FF4F00",
    category: "업무 자동화",
    purpose: "여러 서비스 연결과 반복 업무 자동화",
    difficulty: "보통",
    pricing: "공식 요금 확인",
    bestFor: "반복 업무를 줄이려는 개인과 기업",
    strengths: [
      "다양한 업무 도구 연결에 활용",
      "코딩 없이 자동화를 시작할 수 있음",
    ],
    cautions: [
      "자동화 실행 전 충분한 테스트 필요",
      "서비스 연결 조건과 요금 확인 필요",
    ],
  },
];

const comparisonFields: {
  label: string;
  key: ComparableKey;
}[] = [
  {
    label: "주요 용도",
    key: "purpose",
  },
  {
    label: "사용 난이도",
    key: "difficulty",
  },
  {
    label: "요금",
    key: "pricing",
  },
  {
    label: "추천 대상",
    key: "bestFor",
  },
  {
    label: "주요 장점",
    key: "strengths",
  },
  {
    label: "유의 사항",
    key: "cautions",
  },
];

export default function ComparePage() {
  const [selectedNames, setSelectedNames] = useState<string[]>([
    "ChatGPT",
    "Claude",
    "Gemini",
  ]);

  const [notice, setNotice] = useState("");

  const selectedTools = selectedNames
    .map((name) => tools.find((tool) => tool.name === name))
    .filter((tool): tool is CompareTool => Boolean(tool));

  const toggleTool = (toolName: string) => {
    const isSelected = selectedNames.includes(toolName);

    if (isSelected) {
      setSelectedNames((current) =>
        current.filter((name) => name !== toolName),
      );
      setNotice("");
      return;
    }

    if (selectedNames.length >= 3) {
      setNotice("AI는 최대 3개까지 비교할 수 있습니다.");
      return;
    }

    setSelectedNames((current) => [...current, toolName]);
    setNotice("");
  };

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

            <a href="/compare" className="text-[#18B7A0]">
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
            href="/#diagnosis"
            className="ml-6 rounded-xl bg-[#18B7A0] px-5 py-3 text-sm font-bold text-white hover:bg-[#109683]"
          >
            무료 AI 진단
          </a>
        </div>
      </header>

      <main>
        <section className="bg-[#0B1831] px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-widest text-[#55D6C3]">
              AI COMPARISON
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              어떤 AI가 나에게 더 적합할까요?
            </h1>

            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              비교할 AI를 최대 3개 선택하면 주요 용도, 난이도, 추천 대상과
              유의 사항을 한눈에 확인할 수 있습니다.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-[#18B7A0]/40 bg-[#18B7A0]/10 px-5 py-3 text-sm font-bold text-[#55D6C3]">
              현재 {selectedNames.length}개 선택 · 최대 3개
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-6 py-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-black tracking-widest text-[#18B7A0]">
                  SELECT AI TOOLS
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#0B1831]">
                  비교할 AI를 선택하세요
                </h2>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedNames([]);
                  setNotice("");
                }}
                className="self-start rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
              >
                전체 선택 해제
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => {
                const isSelected = selectedNames.includes(tool.name);

                return (
                  <button
                    type="button"
                    key={tool.name}
                    onClick={() => toggleTool(tool.name)}
                    aria-pressed={isSelected}
                    className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      isSelected
                        ? "border-[#18B7A0] bg-[#E8F8F5] shadow-sm"
                        : "border-slate-200 bg-white hover:border-[#18B7A0]"
                    }`}
                  >
                    <span
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-lg font-black text-white"
                      style={{ backgroundColor: tool.color }}
                    >
                      {tool.initial}
                    </span>

                    <span className="min-w-0 flex-1">
                      <strong className="block text-[#0B1831]">
                        {tool.name}
                      </strong>
                      <span className="mt-1 block text-xs text-slate-500">
                        {tool.category}
                      </span>
                    </span>

                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-sm font-black ${
                        isSelected
                          ? "bg-[#18B7A0] text-white"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {isSelected ? "✓" : "+"}
                    </span>
                  </button>
                );
              })}
            </div>

            {notice && (
              <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm font-bold text-amber-800">
                {notice}
              </p>
            )}
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <p className="text-sm font-black tracking-widest text-[#18B7A0]">
                COMPARISON TABLE
              </p>

              <h2 className="mt-2 text-3xl font-black text-[#0B1831]">
                선택한 AI 비교 결과
              </h2>

              {selectedNames.length === 1 && (
                <p className="mt-3 text-sm text-slate-500">
                  정확한 비교를 위해 AI를 한 개 더 선택해 보세요.
                </p>
              )}
            </div>

            {selectedTools.length > 0 ? (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[850px] border-collapse">
                  <thead>
                    <tr>
                      <th className="w-44 border-b border-r border-slate-200 bg-slate-50 p-6 text-left text-sm font-black text-[#0B1831]">
                        비교 기준
                      </th>

                      {selectedTools.map((tool) => (
                        <th
                          key={tool.name}
                          className="min-w-56 border-b border-r border-slate-200 p-6 text-left last:border-r-0"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <span
                                className="grid h-12 w-12 place-items-center rounded-xl text-lg font-black text-white"
                                style={{ backgroundColor: tool.color }}
                              >
                                {tool.initial}
                              </span>

                              <p className="mt-4 text-xl font-black text-[#0B1831]">
                                {tool.name}
                              </p>

                              <p className="mt-1 text-xs font-bold text-[#109683]">
                                {tool.category}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => toggleTool(tool.name)}
                              className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-500 hover:bg-red-50 hover:text-red-600"
                            >
                              제외
                            </button>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {comparisonFields.map((field) => (
                      <tr key={field.key}>
                        <th className="border-b border-r border-slate-200 bg-slate-50 p-6 text-left align-top text-sm font-black text-[#0B1831] last:border-b-0">
                          {field.label}
                        </th>

                        {selectedTools.map((tool) => {
                          const value = tool[field.key];

                          return (
                            <td
                              key={`${tool.name}-${field.key}`}
                              className="border-b border-r border-slate-200 p-6 align-top text-sm leading-6 text-slate-600 last:border-r-0"
                            >
                              {Array.isArray(value) ? (
                                <ul className="space-y-2">
                                  {value.map((item) => (
                                    <li key={item} className="flex gap-2">
                                      <span className="text-[#18B7A0]">•</span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                value
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
                <p className="text-4xl">⚖️</p>

                <h3 className="mt-5 text-xl font-black text-[#0B1831]">
                  비교할 AI를 선택해 주세요
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  위 목록에서 AI를 두 개 이상 선택하면 비교표가 나타납니다.
                </p>
              </div>
            )}

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              현재 비교 정보는 기능 확인용 초안입니다. 실제 공개 전에는 각
              서비스의 공식 홈페이지에서 기능, 가격, 이용 조건과 확인 날짜를
              검증해야 합니다.
            </div>
          </div>
        </section>

        <section className="bg-[#18B7A0] px-6 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-bold">비교해도 선택하기 어렵나요?</p>

              <h2 className="mt-3 text-3xl font-black">
                무료 AI 진단으로 추천받아 보세요
              </h2>
            </div>

            <a
              href="/#diagnosis"
              className="rounded-xl bg-[#0B1831] px-7 py-4 text-center font-black text-white"
            >
              무료 AI 진단
            </a>
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