import { Navbar } from '../Navbar'
import { LeftSection } from '../LeftSection'
import './Hero.scss'
import { Mockups } from '../Mockups'
const Hero = (): JSX.Element => {
  return (<div className="Hero">
        <Navbar />
        <section className="Hero__section">
            <LeftSection />
            <Mockups />
        </section>
        <hr />
    </div>)
}

export { Hero }
