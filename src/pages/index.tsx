import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '../component/main/Main'
import About from '../component/about/About'
import Skills from '../component/skills/Skills'
import Projects from '../component/projcets/Projects'
import Contact from '@/component/contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Furkan | Front-End</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href='/favicon.ico'></link>
      </Head>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
