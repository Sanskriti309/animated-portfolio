import React, { useRef } from 'react'
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title:"Weather App",
        img: "/weatherapp.png",
        desc: "It is weather app which has been created from ReactJs. In this when we pass the name of the city then it will provide the weather report of the city like temperature, wind speed, humidity etc. For doing this I have used the API of openweathermap.",
        source: "https://github.com/Sanskriti309/weatherapp"
    },
    {
        id: 2,
        title:"Management App",
        img: "/pmt.png",
        desc: "It is web app which has been created using Django and Django HTML. I have worked on the frontend part of this project and created modals, forms, and also add proper validation to the forms.",
        source: "https://github.com/Sanskriti309/pmt"
    },
    {
        id: 3,
        title:"Contact App",
        img: "/contactmanagement.png",
        desc: "It is contact management app which has been created using ReactJs. In this I have created a local json server in which I will store my data and retrieve it. It will store the complete information of the contact and we can add, update and delete the data.",
        source: "https://github.com/TechPath-Services/PathNavig8or"
    },
    {
        id: 4,
        title:"Step Form",
        img: "/stepform.png",
        desc: "It is a Step form which has been created from HTML, CSS and Javascript. In this there are multiple page and but you can see one page at a time if all the mandatory input fields has been filled properly then only you can go to the next page and there will be differnt form.",
        source: "https://github.com/TechPath-Services/step-form"
    },
];

const Single = ({item})=>{

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-200, 200]);

    const openSource = () => {
        window.open(item.source, "_blank");
    };

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="image" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={openSource}>Source Code</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {
                items.map(item=>(
                    <Single item={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default Portfolio
