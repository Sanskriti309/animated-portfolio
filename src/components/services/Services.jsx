import React, { useRef } from 'react';
import "./services.scss";
import { useInView, motion } from 'framer-motion';

const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

    return (
        <motion.div className='services' variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on creating user interfaces for <br/> web applications</p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/port.jpg" alt="Image" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Modern</motion.b> Tools
                    </h1>
                </div>
                <div className="title">
                    <h1>
                    <motion.b whileHover={{ color: "orange" }}>For Web</motion.b> Creation.
                    </h1>
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer">
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Web Apps</h2>
                    <p>
                        I design web applications using HTML, CSS, Javascript
                        and I also use ReactJs if needed and provides proper 
                        responsiveness to the websites too. I can also create
                        the webpages using Wordpress.
                    </p>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>UI Designer</h2>
                    <p>
                        I can also create a proper UI for the client as per their 
                        demonstration and needs. I can use figma too an create a 
                        proper figma for an UI with responsive design too for that.
                    </p>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>API Calling</h2>
                    <p>
                        I can also call and integrate the APIs too in the websites
                        or the web applicaiton if needed. And it doesn't matter that 
                        in which language API has been created. I can integrate the APIs
                        in ReactJs as well as Nextjs.
                    </p>
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Backend</h2>
                    <p>
                        I can also create and implement an application using Django,
                        Django HTML and Python. I can create a fully functional backend 
                        of a webpage using Django and Django HTML, and can also add 
                        authentication and all to it.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services
