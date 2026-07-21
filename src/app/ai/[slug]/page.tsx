import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aiTools, getAiToolSlug } from "@/data/ai-tools";

export function generateStaticParams() {
  return aiTools.map((tool) => ({ slug: getAiToolSlug(tool.name) }));
}

export default async function AiToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = aiTools.find((item) => getAiToolSlug(item.name) === slug);
  if (!tool) notFound();

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#0B1831]">
      <SiteHeader />
      <main>
        <section className="border-b border-slate-200 bg-white px-6 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <Link href="/ai" className="text-sm font-bold text-[#109683]">← AI 도구 목록</Link>
            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl text-3xl font-black text-white" style={{ backgroundColor: tool.color }}>{tool.initial}</span>
              <div><p className="text-sm font-black text-[#18B7A0]">{tool.category}</p><h1 className="mt-2 text-4xl font-black sm:text-5xl">{tool.name}</h1><p className="mt-4 max-w-2xl leading-7 text-slate-500">{tool.summary}</p></div>
            </div>
          </div>
        </section>
        <section className="px-6 py-14">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6">
              <article className="rounded-2xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-black">주요 활용 목적</h2><p className="mt-4 leading-7 text-slate-500">{tool.purpose}</p><div className="mt-5 flex flex-wrap gap-2">{tool.categories.map((category)=><span key={category} className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">{category}</span>)}</div></article>
              <div className="grid gap-6 sm:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-white p-7"><h2 className="text-xl font-black">주요 장점</h2><ul className="mt-5 space-y-3">{tool.strengths.map((item)=><li key={item} className="flex gap-3 text-sm leading-6 text-slate-500"><span className="text-emerald-500">✓</span>{item}</li>)}</ul></article>
                <article className="rounded-2xl border border-amber-200 bg-amber-50 p-7"><h2 className="text-xl font-black">사용 전 확인</h2><ul className="mt-5 space-y-3">{tool.cautions.map((item)=><li key={item} className="flex gap-3 text-sm leading-6 text-amber-900"><span>!</span>{item}</li>)}</ul></article>
              </div>
            </div>
            <aside className="h-fit rounded-2xl bg-[#082956] p-7 text-white"><h2 className="text-xl font-black">한눈에 보기</h2><dl className="mt-6 space-y-5 text-sm"><div><dt className="text-slate-400">추천 대상</dt><dd className="mt-2 leading-6">{tool.bestFor}</dd></div><div><dt className="text-slate-400">사용 난이도</dt><dd className="mt-2">{tool.difficulty}</dd></div><div><dt className="text-slate-400">요금 안내</dt><dd className="mt-2">{tool.pricing}</dd></div></dl><Link href="/compare" className="mt-7 block rounded-xl bg-[#18B7A0] px-5 py-4 text-center font-bold">다른 AI와 비교하기</Link><Link href="/diagnosis" className="mt-3 block rounded-xl border border-white/20 px-5 py-4 text-center font-bold">무료 진단 시작</Link></aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
