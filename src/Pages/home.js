import React from "react";
import './home.css'

const Head = () =>{
    return(
        <div>
            <h1>Head</h1>
        </div>
    );
}

const Artile = () =>{
    return(
        <article className="">
            <h1>Article</h1>
        </article>
    );
}

const Section = () =>{
    return(
        <section>
            <h1>Section</h1>
        </section>
    );
}
const Body = () =>{
    return(
        <div className="HomeBody">
            <Artile />
            <Section />
        </div>
    );
}
const Footer = () =>{
    return(
        <div>
            <h1>Footer</h1>
        </div>
    );
}
const Home = () =>{
    return(
        <div>
            <Head />
            <Body />
            <Footer />
        </div>
    );
}
export default Home;