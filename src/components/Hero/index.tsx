import { Navbar } from "../Navbar";
import { LeftSection } from "../LeftSection";
import './Hero.css';
import { Mockups } from "../Mockups";
const Hero = () =>{
    return(<div className="Hero">
        <Navbar />
        <section className="Hero__section">
            <LeftSection />
            <Mockups />
        </section>
    </div>)
}

export {Hero};