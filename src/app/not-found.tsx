import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound(){return <div className="flex min-h-screen flex-col bg-[#F7FAFC] text-[#0B1831]"><SiteHeader/><main className="grid flex-1 place-items-center px-6 py-20 text-center"><div><p className="text-7xl font-black text-[#18B7A0]">404</p><h1 className="mt-5 text-3xl font-black">페이지를 찾을 수 없습니다</h1><p className="mt-4 text-slate-500">주소가 변경되었거나 존재하지 않는 페이지입니다.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/" className="rounded-xl bg-[#082956] px-6 py-4 font-bold text-white">홈으로 이동</Link><Link href="/ai" className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold">AI 찾아보기</Link></div></div></main><SiteFooter/></div>}
