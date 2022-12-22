import Head from 'next/head'
import styles from 'styles/Home.module.scss'
import Hero from 'components/layouts/Hero'
import Header from 'components/layouts/Header'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AboutMe from 'components/layouts/AboutMe'
import Skills from 'components/layouts/Skills'
import RecentWork from 'components/layouts/RecentWork'
import ContactMe from 'components/layouts/ContactMe'
export default function Home() {
  //TODO: iphone SE
  //TODO: ipad
  //todo: galaxy fold
  //todo: nest hub 
  return (
    <div className={styles.container}>
      <Head>
        <title>Yero CS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="maincontainer">
        <section className='heroSection'>
          <Header />
          <Hero />
        </section>
        <section id="aboutMe">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="recentWork">
          <RecentWork />
        </section>
        <section id="contactMe">
          <ContactMe />
        </section>
      </div>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
