import React from "react";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";

const Home = ()=>{
    return (
        <React.Fragment>
            <Hero />
            <Features />
            
        </React.Fragment>
        )
}

export {Home}