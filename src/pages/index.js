import styles from 'styles/Home.module.scss'
import Hero from 'components/layouts/Hero'
import Header from 'components/layouts/Header'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AboutMe from 'components/layouts/AboutMe'
import Skills from 'components/layouts/Skills'
import RecentWork from 'components/layouts/RecentWork'
import ContactMe from 'components/layouts/ContactMe'
import Head from 'next/head'
export default function Home() {
  //TODO: iphone SE
  //TODO: ipad
  //todo: galaxy fold
  //todo: nest hub 
  return (
    <main className={styles.container}>
      <Head>
        <title>Yerodin Cuellar</title>
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

        <RecentWork />

        <section id="contactMe">
          <ContactMe />
        </section>
      </div>
    </main>
  )
}
