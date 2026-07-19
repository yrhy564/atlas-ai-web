"use client";

import { useMemo, useState } from "react";
import { AI_CATEGORIES, aiTools } from "@/data/ai-tools";

export default function AiFinderPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredTools = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    return aiTools.filter((tool) => {
      const matchesCategory =
        selectedCategory === "전체" ||
        tool.categories.includes(selectedCategory);

      const searchableText = [
        tool.name,
        tool.summary,
        tool.bestFor,
        ...tool.categories,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        keyword.length === 0 || searchableText.includes(keyword);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

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

            <a href="/ai" className="text-[#18B7A0]">
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
              FIND YOUR AI
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              내 목적에 맞는 AI를 찾아보세요
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-300">
              이름을 검색하거나 사용 목적을 선택하면 조건에 맞는 AI 도구를
              확인할 수 있습니다.
            </p>

            <div className="mt-9 flex max-w-3xl items-center gap-3 rounded-2xl bg-white p-3 shadow-2xl">
              <span className="pl-2 text-2xl">🔎</span>

              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="AI 이름 또는 하고 싶은 일을 검색하세요"
                className="min-w-0 flex-1 px-2 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                aria-label="AI 검색"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="rounded-lg px-3 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100"
                >
                  지우기
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-6 py-7">
          <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
            {AI_CATEGORIES.map((category) => {
              const isSelected = category === selectedCategory;

              return (
                <button
                  type="button"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${
                    isSelected
                      ? "bg-[#0B1831] text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#18B7A0] hover:text-[#109683]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold text-[#18B7A0]">
                  AI TOOL DIRECTORY
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#0B1831]">
                  AI 도구 목록
                </h2>
              </div>

              <p className="text-sm text-slate-500">
                검색 결과{" "}
                <strong className="text-[#0B1831]">
                  {filteredTools.length}개
                </strong>
              </p>
            </div>

            {filteredTools.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((tool) => (
                  <article
                    key={tool.name}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="grid h-14 w-14 place-items-center rounded-2xl text-xl font-black text-white"
                        style={{ backgroundColor: tool.color }}
                      >
                        {tool.initial}
                      </span>

                      <span className="rounded-full bg-[#E8F8F5] px-3 py-2 text-xs font-bold text-[#109683]">
                        난이도 {tool.difficulty}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-black text-[#0B1831]">
                      {tool.name}
                    </h3>

                    <p className="mt-3 min-h-20 text-sm leading-6 text-slate-500">
                      {tool.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {tool.categories.map((category) => (
                        <span
                          key={category}
                          className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600"
                        >
                          {category}
                        </span>
                      ))}
                    </div>

                    <dl className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm">
                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 font-bold text-slate-700">
                          추천
                        </dt>

                        <dd className="text-slate-500">
                          {tool.bestFor}
                        </dd>
                      </div>

                      <div className="flex gap-3">
                        <dt className="w-16 shrink-0 font-bold text-slate-700">
                          요금
                        </dt>

                        <dd className="text-slate-500">
                          {tool.pricing}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-7 grid gap-3">
                      <a
                        href="/compare"
                        className="block rounded-xl border border-slate-200 px-5 py-4 text-center text-sm font-bold text-[#0B1831] hover:bg-slate-50"
                      >
                        AI 비교하기
                      </a>

                      <a
                        href="/diagnosis"
                        className="block rounded-xl bg-[#0B1831] px-5 py-4 text-center text-sm font-bold text-white hover:bg-[#18B7A0]"
                      >
                        무료 진단에 활용하기 →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
                <p className="text-4xl">🔎</p>

                <h3 className="mt-5 text-xl font-black text-[#0B1831]">
                  검색 결과가 없습니다
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  다른 이름이나 카테고리로 다시 검색해 보세요.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedCategory("전체");
                  }}
                  className="mt-6 rounded-xl bg-[#18B7A0] px-5 py-3 text-sm font-bold text-white"
                >
                  검색 초기화
                </button>
              </div>
            )}

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              현재 AI 정보는 홈페이지 기능 확인을 위한 초안입니다. 실제 공개
              전에는 각 서비스의 공식 홈페이지에서 기능, 요금과 확인 날짜를
              검증해야 합니다.
            </div>
          </div>
        </section>

        <section className="bg-[#18B7A0] px-6 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-bold">
                어떤 AI를 선택해야 할지 어렵나요?
              </p>

              <h2 className="mt-3 text-3xl font-black">
                3분 무료 진단으로 추천받아 보세요
              </h2>
            </div>

            <a
              href="/diagnosis"
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