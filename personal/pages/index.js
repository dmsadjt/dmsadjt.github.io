import styles from '../styles/Home.module.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import SectionHeader from '../components/SectionHeader'
import css from './index.module.css';
import Link from 'next/link';
import linkedIn from '../public/img/In-white.png';



export default function Home() {
  return (
    <>
      <Navigation></Navigation>
      <section className={css.sectionProfile}>
        <Container>
          <SectionHeader title="Hi"></SectionHeader>
          <div className={css.CenterText}>
            My name is <br></br>
            <h1>Muhammad <b>Dimas</b> Adijanto</h1>
            Dimas | donmai <br></br>
            An aspiring developer and japan enthusiast <br></br>
            Currently enrolled in the Information Systems Departement <br></br>
            Get the details of my experiences <Link class="cv" href="https://drive.google.com/file/d/1KEeVo3gkeHvEYYNkXu46L_UOd__guydE/view"><b>here</b></Link>
          </div>
        </Container>


      </section>
      <section className={css.sectionAbout}>
        <Container>
          <SectionHeader title="About me"></SectionHeader>
          <div className={css.middleJustify}>
            <br></br>
            <p>
              My name is Muhammad Dimas Adijanto, or usually i go by <b>Dimas</b> or <b>donmai</b>. I am an
              Information Student in Indonesia. i have an interest
              in many things, including creating things with code. Generally i like to follow anything related to technologies and computer science,
              but currently i am studying to be a web developer learning HTML, CSS, and JavaScript.
            </p>
            <p>
              I plan to use this space in the internet for portraying myself as an individual. It may be quite barren for a while 
              so my apologies regarding that. I think implementing the things i 
              learned here will be interesting to watch as time goes and making it
              more colorful!
            </p>

            <p>I have a few more stories to be told, you can visit my LinkedIn for more information!</p>
          </div>
          <Button href="https://www.linkedin.com/in/dimmas/">
            LinkedIn
          </Button>
        </Container>
      </section>
    </>
  )
}
