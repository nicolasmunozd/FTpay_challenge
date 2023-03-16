import React from "react";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Integrations } from "../components/Integrations";
import { Cta } from "../components/Cta";

const Home = ()=>{
    return (
        <React.Fragment>
            <Hero />
            <Features />
            <Integrations />
            <Cta />
        </React.Fragment>
        )
}

export { Home }