import styles from '../styles/Home.module.css'
import { Container} from 'react-bootstrap'
import Navigation from '../components/Navigation'
import SectionHeader from '../components/SectionHeader'

export default function Home() {
  return (
    <>
        <Navigation></Navigation>
        <Container>
          <section>
            <SectionHeader title={`My Profile`}>

            </SectionHeader>
          </section>
        </Container>
    </>
  )
}
