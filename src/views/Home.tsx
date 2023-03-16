import React from "react";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import { Cta } from "../components/Cta";
import { Footer } from "../components/Footer";

const Home = ()=>{
    return (
        <React.Fragment>
            <Hero />
            <Features />
            <Integrations />
            <Cta />
            <Footer />
        </React.Fragment>
        )
}

export { Home }