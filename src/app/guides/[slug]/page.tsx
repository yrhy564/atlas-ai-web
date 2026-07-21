import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { guides } from "@/data/guides";

export function generateStaticParams() { return guides.map((guide) => ({ slug: guide.slug })); }

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();

  return (
    <div className="min-h-screen bg-[#F7FAFC] text-[#0B1831]">
      <SiteHeader />
      <main>
        <section className="bg-[linear-gradient(120deg,#082956,#0d3c72)] px-6 py-16 text-white sm:py-20"><div className="mx-auto max-w-4xl"><Link href="/guides" className="text-sm font-bold text-cyan-300">← 활용 가이드</Link><p className="mt-9 text-sm font-black tracking-widest text-[#55D6C3]">{guide.category}</p><h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{guide.title}</h1><p className="mt-6 max-w-2xl leading-8 text-slate-300">{guide.summary}</p></div></section>
        <section className="px-6 py-14"><article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12"><div className="rounded-xl bg-amber-50 p-5 text-sm leading-6 text-amber-900">현재 콘텐츠는 홈페이지 구조 확인을 위한 초안입니다. 실제 공개 전에는 사례와 출처를 보강합니다.</div>{guide.sections.map((section,index)=><section key={section.title} className="border-b border-slate-200 py-9 last:border-0"><p className="text-sm font-black text-[#18B7A0]">STEP {index+1}</p><h2 className="mt-3 text-2xl font-black">{section.title}</h2><p className="mt-4 leading-8 text-slate-600">{section.body}</p></section>)}</article><div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-between gap-4"><Link href="/guides" className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold">다른 가이드 보기</Link><Link href="/diagnosis" className="rounded-xl bg-[#18B7A0] px-6 py-4 font-bold text-white">무료 AI 진단</Link></div></section>
      </main><SiteFooter />
    </div>
  );
}
