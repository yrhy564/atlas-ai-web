const categories = [
  {
    icon: "📝",
    title: "문서·보고서",
    description: "기획서, 보고서, 이메일 작성에 적합한 AI",
  },
  {
    icon: "🔍",
    title: "자료조사",
    description: "검색, 논문, 시장조사를 도와주는 AI",
  },
  {
    icon: "🎨",
    title: "이미지 제작",
    description: "광고, 썸네일, 디자인을 생성하는 AI",
  },
  {
    icon: "📊",
    title: "PPT 제작",
    description: "발표자료와 제안서를 제작하는 AI",
  },
  {
    icon: "💻",
    title: "코딩",
    description: "개발, 오류 해결, 코드 작성을 돕는 AI",
  },
  {
    icon: "⚙️",
    title: "업무 자동화",
    description: "반복 업무와 데이터 처리를 자동화하는 AI",
  },
];

const tools = [
  {
    initial: "C",
    name: "ChatGPT",
    category: "범용 AI",
    description: "문서 작성, 아이디어 정리, 업무 지원에 활용할 수 있습니다.",
  },
  {
    initial: "A",
    name: "Claude",
    category: "문서 분석",
    description: "긴 문서 분석과 자연스러운 글쓰기에 활용할 수 있습니다.",
  },
  {
    initial: "G",
    name: "Gemini",
    category: "검색·업무",
    description: "자료 탐색과 다양한 업무 지원에 활용할 수 있습니다.",
  },
];

const guides = [
  "직장인을 위한 AI 도구 선택 기준",
  "무료 AI와 유료 AI의 차이",
  "AI로 보고서 초안 만드는 방법",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center px-6">
          <a href="#top" className="text-2xl font-black tracking-tight text-[#0B1831]">
            ATLAS <span className="text-[#18B7A0]">AI</span>
          </a>

          <nav className="ml-auto hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
            <a href="/ai" className="hover:text-[#18B7A0]">
              AI 찾기
            </a>
            <a href="#compare" className="hover:text-[#18B7A0]">
              AI 비교
            </a>
            <a href="#guides" className="hover:text-[#18B7A0]">
              활용 가이드
            </a>
            <a href="#contact" className="hover:text-[#18B7A0]">
              기업 문의
            </a>
          </nav>

          <a
            href="#diagnosis"
            className="ml-6 rounded-xl bg-[#18B7A0] px-5 py-3 text-sm font-bold text-white hover:bg-[#109683]"
          >
            무료 AI 진단
          </a>
        </div>
      </header>

      <main id="top">
        <section className="overflow-hidden bg-[#0B1831] text-white">
          <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-[#18B7A0]/40 bg-[#18B7A0]/10 px-4 py-2 text-sm font-bold text-[#55D6C3]">
                AI 선택을 더 쉽고 정확하게
              </p>

              <h1 className="text-5xl font-black leading-tight tracking-[-3px] sm:text-6xl">
                나에게 맞는 AI,
                <br />
                <span className="text-[#18B7A0]">이제 헤매지 마세요.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                ATLAS AI가 목적, 예산, 사용 난이도를 비교해
                가장 적합한 AI를 찾을 수 있도록 도와드립니다.
              </p>

              <div className="mt-9 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-2xl sm:flex-row sm:items-center">
                <span className="px-2 text-2xl">🔎</span>
                <span className="flex-1 px-2 text-sm text-slate-500">
                  어떤 일을 AI로 해결하고 싶으신가요?
                </span>
                <a
                  href="/ai"
                  className="rounded-xl bg-[#18B7A0] px-6 py-4 text-center text-sm font-bold text-white"
                >
                  AI 찾기
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-slate-400">
                <span>✓ 목적 기반 추천</span>
                <span>✓ 한눈에 비교</span>
                <span>✓ 무료 진단</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-[#18B7A0]/20 blur-3xl" />

              <div className="relative rounded-3xl border border-white/20 bg-white p-8 text-slate-900 shadow-2xl">
                <p className="flex items-center gap-2 text-sm font-black text-[#109683]">
                  <span className="h-3 w-3 rounded-full bg-[#18B7A0]" />
                  맞춤 추천 결과
                </p>

                <p className="mt-7 text-sm text-slate-500">
                  보고서 작성에 적합한 AI
                </p>

                <h2 className="mt-2 text-2xl font-black text-[#0B1831]">
                  추천 AI 3개를 비교해 보세요
                </h2>

                {[
                  ["01", "쉬운 사용법", "초보자도 바로 시작할 수 있는 도구"],
                  ["02", "업무 목적 중심", "원하는 결과를 기준으로 비교"],
                  ["03", "객관적인 정보", "장점과 한계를 함께 안내"],
                ].map(([number, title, description]) => (
                  <div
                    key={number}
                    className="flex gap-4 border-t border-slate-200 py-5 first:mt-6"
                  >
                    <strong className="text-[#18B7A0]">{number}</strong>
                    <div>
                      <p className="font-bold text-[#0B1831]">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}

                <a
                  href="#diagnosis"
                  className="mt-3 block rounded-xl bg-[#0B1831] px-5 py-4 text-center font-bold text-white hover:bg-[#18B7A0]"
                >
                  3분 무료 진단 시작하기 →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-black tracking-widest text-[#18B7A0]">
                AI CATEGORIES
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1831]">
                무엇을 하고 싶은지 선택하세요
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                기술 이름이 아닌 사용 목적을 기준으로 필요한 AI를 찾습니다.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <a
                  href="#diagnosis"
                  key={category.title}
                  className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-[#18B7A0] hover:shadow-xl"
                >
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="mt-5 text-xl font-black text-[#0B1831]">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {category.description}
                  </p>
                  <p className="mt-6 text-sm font-bold text-[#109683]">
                    AI 찾아보기 →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="bg-slate-50 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-black tracking-widest text-[#18B7A0]">
                AI COMPARISON
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1831]">
                인기 AI를 한눈에 비교하세요
              </h2>
              <p className="mt-4 text-slate-500">
                주요 용도, 사용 난이도와 추천 대상을 비교합니다.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {tools.map((tool) => (
                <article
                  key={tool.name}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B1831] text-xl font-black text-white">
                      {tool.initial}
                    </span>
                    <span className="rounded-full bg-[#E8F8F5] px-3 py-2 text-xs font-bold text-[#109683]">
                      {tool.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black text-[#0B1831]">
                    {tool.name}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-500">
                    {tool.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl border border-slate-200 px-4 py-3 font-bold text-[#0B1831] hover:bg-[#0B1831] hover:text-white"
                  >
                    비교 목록에 담기
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="diagnosis" className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 rounded-3xl bg-[#0B1831] p-8 text-white md:p-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black tracking-widest text-[#18B7A0]">
                FREE AI DIAGNOSIS
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight">
                3분이면 나에게 맞는
                <br />
                AI를 찾을 수 있습니다
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-300">
                사용 목적, 직업, 예산과 AI 경험을 바탕으로 가장 적합한
                도구를 추천합니다.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex rounded-xl bg-[#18B7A0] px-6 py-4 font-bold text-white"
              >
                무료 진단 시작하기
              </a>
            </div>

            <div className="space-y-4">
              {[
                ["1", "목적 선택", "AI로 해결하고 싶은 일"],
                ["2", "조건 입력", "예산과 사용 경험"],
                ["3", "추천 확인", "추천 이유와 비교 결과"],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#18B7A0] font-black text-[#0B1831]">
                    {number}
                  </span>
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="guides" className="px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-black tracking-widest text-[#18B7A0]">
              ATLAS GUIDE
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#0B1831]">
              AI를 실제 업무에 활용하는 방법
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {guides.map((guide, index) => (
                <a
                  href="#contact"
                  key={guide}
                  className="rounded-2xl bg-slate-50 p-7 hover:shadow-lg"
                >
                  <span className="text-xs font-black text-[#109683]">
                    GUIDE {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 min-h-16 text-lg font-black leading-7 text-[#0B1831]">
                    {guide}
                  </h3>
                  <p className="mt-6 text-sm font-bold text-slate-500">
                    활용 가이드 읽기 →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="bg-[#18B7A0] px-6 py-20 text-white"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="font-bold">ATLAS AI와 함께 시작하세요</p>
              <h2 className="mt-3 text-4xl font-black">
                AI 선택부터 업무 적용까지
              </h2>
              <p className="mt-4 text-[#E8FFFB]">
                개인과 기업이 원하는 결과를 만들 수 있도록 돕습니다.
              </p>
            </div>

            <a
              href="mailto:contact@atlas-ai.kr"
              className="rounded-xl bg-[#0B1831] px-7 py-4 font-black text-white"
            >
              문의하기
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#071326] px-6 py-12 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">
          <div>
            <p className="text-xl font-black text-white">
              ATLAS <span className="text-[#18B7A0]">AI</span>
            </p>
            <p className="mt-3 text-sm">
              사람들이 원하는 결과를 AI로 달성하도록 돕습니다.
            </p>
          </div>
          <p className="text-sm">© 2026 ATLAS AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}