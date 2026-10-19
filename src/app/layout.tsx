import type {Metadata} from 'next';import {Header} from '@/components/header';import {Footer} from '@/components/footer';import {site} from '@/lib/site';import './globals.css';
import { Analytics } from "@vercel/analytics/next"
export const metadata:Metadata={metadataBase:new URL(site.url),title:{default:'TechMindsVerse | Technology Mindset Universe',template:'%s | TechMindsVerse'},description:site.description,openGraph:{title:'TechMindsVerse',description:site.description,type:'website'},robots:{index:true,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body><Header/><main id="main-content">{children}</main><Footer/></body></html>}
<Analytics />