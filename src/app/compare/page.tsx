"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aiTools, type AiTool } from "@/data/ai-tools";

type ComparableKey =
  | "purpose"
  | "difficulty"
  | "pricing"
  | "bestFor"
  | "strengths"
  | "cautions";

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
    .map((name) => aiTools.find((tool) => tool.name === name))
    .filter((tool): tool is AiTool => Boolean(tool));

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
      <SiteHeader />

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
              {aiTools.map((tool) => {
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
                        <th className="border-b border-r border-slate-200 bg-slate-50 p-6 text-left align-top text-sm font-black text-[#0B1831]">
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
                                      <span className="text-[#18B7A0]">
                                        •
                                      </span>
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
              <p className="font-bold">
                비교해도 선택하기 어렵나요?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                무료 AI 진단으로 추천받아 보세요
              </h2>
            </div>

            <Link
              href="/diagnosis"
              className="rounded-xl bg-[#0B1831] px-7 py-4 text-center font-black text-white"
            >
              무료 AI 진단
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
