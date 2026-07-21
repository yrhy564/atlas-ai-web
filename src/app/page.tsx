import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aiTools } from "@/data/ai-tools";

const categories = [
  ["▤", "문서·보고서", "bg-emerald-50 text-emerald-600"],
  ["⌕", "자료조사", "bg-blue-50 text-blue-600"],
  ["▧", "이미지 제작", "bg-violet-50 text-violet-600"],
  ["▣", "PPT 제작", "bg-orange-50 text-orange-600"],
  ["〈 〉", "코딩", "bg-sky-50 text-sky-600"],
  ["⚙", "업무 자동화", "bg-teal-50 text-teal-600"],
];

const comparisonRows = [
  ["▤", "주요 용도", "글쓰기, 요약, 아이디어 생성", "긴 글 요약, 문서 분석", "검색 기반 정보 수집"],
  ["♙", "무료 플랜", "있음", "있음", "있음"],
  ["✓", "한글 지원", "지원", "지원", "지원"],
  ["⚙", "사용 난이도", "보통  ▮▮▮▫", "쉬움  ▮▮▮▮", "쉬움  ▮▮▮▮"],
];

const steps = [
  ["1", "목적 선택", "해결하고 싶은 업무와 목표를 선택하세요.", "☑", "bg-emerald-500"],
  ["2", "간단한 진단", "몇 가지 질문에 답하면 조건을 분석해요.", "✓", "bg-blue-500"],
  ["3", "맞춤 추천", "나에게 맞는 AI 도구와 활용법을 확인해요.", "◇", "bg-violet-500"],
];

const reasons = [
  ["⚖", "중립적인 비교", "광고가 아닌 동일한 기준으로 장단점을 비교합니다."],
  ["⌕", "직접 테스트한 정보", "실제 사용 경험을 바탕으로 쉽게 설명합니다."],
  ["↻", "지속적인 업데이트", "빠르게 변하는 AI 정보를 꾸준히 반영합니다."],
  ["♙", "실제 활용 중심", "기능보다 업무에서 얻는 결과를 중심으로 안내합니다."],
];

const guides = [
  ["활용 팁", "▱", "보고서 작성 시간을 줄이는 AI 활용법 7가지", "2026.05.20", "bg-emerald-50 text-emerald-700"],
  ["비교 가이드", "⚖", "ChatGPT vs Claude, 어떤 상황에 더 적합할까?", "2026.05.17", "bg-blue-50 text-blue-700"],
  ["활용 팁", "▧", "AI 이미지 제작 도구 완벽 활용 가이드", "2026.05.15", "bg-violet-50 text-violet-700"],
  ["업무 자동화", "⌘", "AI로 반복 업무 자동화하기 실전 가이드", "2026.05.13", "bg-orange-50 text-orange-700"],
];

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[530px] rounded-xl border border-slate-200 bg-white p-3 shadow-[0_20px_50px_rgba(15,42,78,0.13)]">
      <div className="flex min-h-[320px] overflow-hidden rounded-lg bg-slate-50">
        <aside className="hidden w-14 shrink-0 flex-col items-center gap-5 bg-[#092957] py-5 text-xs text-white sm:flex">
          <span className="text-xl font-black">A</span><span>▣</span><span>▤</span><span>▧</span><span>⚙</span>
        </aside>
        <div className="flex-1 p-3 sm:p-4">
          <div className="mb-3 flex h-7 items-center justify-between rounded-md border border-slate-100 bg-white px-3 text-[10px] text-slate-300">
            <span>ATLAS AI DASHBOARD</span><span>•••</span>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
            {["추천 AI 도구", "비교한 도구"].map((label, index) => (
              <div key={label} className="rounded-lg border border-slate-100 bg-white p-3 shadow-sm">
                <p className="text-[10px] font-bold text-slate-500">{label}</p><strong className="mt-2 block text-2xl text-[#0B1831]">{index ? 8 : 12}</strong>
                <span className="mt-4 block h-1.5 w-14 rounded bg-slate-100" />
              </div>
            ))}
            <div className="hidden rounded-lg border border-slate-100 bg-white p-3 shadow-sm lg:block">
              <p className="text-[10px] font-bold text-slate-500">업무 카테고리 분포</p>
              <div className="mx-auto mt-3 h-14 w-14 rounded-full border-[10px] border-cyan-400 border-r-emerald-400 border-b-blue-300" />
            </div>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-[1.5fr_1fr]">
            <div className="rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
              <p className="text-[10px] font-bold text-slate-500">추천 결과</p>
              {["C", "A", "G"].map((item, index) => (
                <div key={item} className="mt-3 flex items-center gap-3">
                  <span className={`grid h-7 w-7 place-items-center rounded text-xs font-black text-white ${index === 0 ? "bg-emerald-500" : index === 1 ? "bg-sky-400" : "bg-indigo-500"}`}>{item}</span>
                  <span className="h-1.5 flex-1 rounded bg-slate-200" /><span className="text-[9px] text-amber-400">★★★★★</span>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-slate-100 bg-white p-4 text-center shadow-sm">
              <p className="text-[10px] font-bold text-slate-500">업무 적합도</p>
              <div className="mx-auto mt-4 grid h-20 w-20 place-items-center rounded-full border-[7px] border-emerald-500 border-b-slate-100 text-xl font-black text-emerald-500">92%</div>
              <div className="mt-4 flex h-8 items-end gap-1">{[2,4,3,6,5,8,7,10].map((h,i)=><span key={i} className="flex-1 rounded-t bg-cyan-200" style={{height:`${h*3}px`}} />)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const topTools = aiTools.slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#0B1831]">
      <SiteHeader />
      <main>
        <section className="overflow-hidden bg-[linear-gradient(115deg,#ffffff_30%,#f1fbff_100%)] px-6 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="inline-flex rounded-lg bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">AI 선택부터 실제 활용까지</p>
              <h1 className="mt-6 text-4xl font-black leading-[1.18] tracking-[-0.055em] sm:text-5xl lg:text-[3.7rem]">
                나에게 맞는 AI,<br /><span className="text-[#13A7AA]">이제 헤매지 마세요.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">목적과 업무를 알려주면 ATLAS AI가 적합한 도구와<br className="hidden sm:block" /> 활용 방법을 찾아드립니다.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/diagnosis" className="rounded-lg bg-[#18B7A0] px-7 py-4 text-sm font-black text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-[#109683]">무료 AI 진단 시작</Link>
                <Link href="/compare" className="rounded-lg border border-[#0B1831] bg-white px-7 py-4 text-sm font-black text-[#0B1831] transition hover:bg-slate-50">AI 비교하기</Link>
              </div>
            </div>
            <DashboardPreview />
          </div>
          <Link href="/ai" className="mx-auto mt-12 flex max-w-7xl items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm text-slate-400 shadow-sm transition hover:border-cyan-300 hover:text-slate-600">
            <span className="text-xl text-slate-500">⌕</span><span className="flex-1">어떤 일을 AI로 해결하고 싶으신가요?</span><span>→</span>
          </Link>
        </section>

        <section id="categories" className="border-t border-slate-100 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl font-black sm:text-3xl">목적에 맞는 AI를 찾아보세요</h2>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map(([icon, title, color]) => (
                <Link href={`/ai?category=${encodeURIComponent(title)}`} key={title} className="group rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
                  <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full text-xl font-bold ${color}`}>{icon}</span>
                  <h3 className="mt-4 text-sm font-black sm:text-base">{title}</h3><p className="mt-3 text-right text-slate-400 group-hover:text-[#18B7A0]">→</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="border-y border-slate-100 bg-[#FBFDFF] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl font-black sm:text-3xl">인기 AI 한눈에 비교</h2>
            <div className="mt-9 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[760px] table-fixed text-sm">
                <thead><tr><th className="w-44 p-5" />{topTools.map((tool)=><th key={tool.name} className="border-l border-slate-200 p-5 text-lg"><span className="mr-2 inline-grid h-8 w-8 place-items-center rounded-lg text-sm text-white" style={{backgroundColor:tool.color}}>{tool.initial}</span>{tool.name}</th>)}</tr></thead>
                <tbody>{comparisonRows.map(([icon,label,...values])=><tr key={label} className="border-t border-slate-200"><th className="p-5 text-left"><span className="mr-3 text-slate-500">{icon}</span>{label}</th>{values.map((value,index)=><td key={`${label}-${index}`} className="border-l border-slate-200 p-5 text-center leading-6 text-slate-500">{value}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <div className="mt-6 text-center"><Link href="/compare" className="inline-flex rounded-lg border border-blue-400 bg-white px-7 py-3 text-sm font-bold text-blue-600 hover:bg-blue-50">더 많은 AI 비교하기　→</Link></div>
          </div>
        </section>

        <section id="diagnosis" className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-2xl font-black sm:text-3xl">3분이면 나에게 맞는 AI를 찾을 수 있어요</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {steps.map(([number,title,description,icon,color],index)=><div key={number} className="relative flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full font-black text-white ${color}`}>{number}</span><div className="flex-1"><h3 className="font-black">{number}. {title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{description}</p></div><span className="text-4xl text-[#18B7A0]">{icon}</span>{index<2&&<span className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 text-2xl text-blue-500 lg:block">→</span>}</div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#F7FBFF] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl"><h2 className="text-center text-2xl font-black sm:text-3xl">ATLAS AI가 다르게 추천하는 이유</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{reasons.map(([icon,title,description],index)=><div key={title} className="rounded-xl border border-slate-200 bg-white p-6"><span className={`grid h-12 w-12 place-items-center rounded-full text-2xl ${index%2 ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"}`}>{icon}</span><h3 className="mt-5 font-black">{title}</h3><p className="mt-3 text-xs leading-5 text-slate-500">{description}</p></div>)}</div></div>
        </section>

        <section id="guides" className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl"><h2 className="text-center text-2xl font-black sm:text-3xl">AI 활용 가이드</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{guides.map(([tag,icon,title,date,color])=><Link href="/guides" key={title} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"><span className={`inline-flex rounded px-2 py-1 text-xs font-bold ${color}`}>{tag}</span><span className="mt-5 grid h-20 place-items-center text-5xl text-slate-500">{icon}</span><h3 className="mt-4 min-h-12 text-sm font-black leading-6">{title}</h3><p className="mt-4 text-xs text-slate-400">{date}</p></Link>)}</div><div className="mt-6 text-center"><Link href="/guides" className="inline-flex rounded-lg border border-blue-400 px-7 py-3 text-sm font-bold text-blue-600">더 많은 가이드 보기　→</Link></div></div>
        </section>

        <section id="contact" className="px-6 pb-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-xl bg-[#082956] px-8 py-8 text-white sm:flex-row sm:items-center lg:px-14">
            <div><h2 className="text-2xl font-black">AI를 고르는 데서 끝내지 마세요</h2><p className="mt-3 text-sm text-slate-300">원하는 결과를 만들 수 있도록 ATLAS AI가 함께합니다.</p></div><Link href="/diagnosis" className="rounded-lg bg-[#18B7A0] px-8 py-4 text-sm font-black text-white hover:bg-[#109683]">무료 진단 시작하기</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
