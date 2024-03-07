import React from 'react';
import './works.css';
import Reactpic from '../../assets/react.svg';
import Javascript from '../../assets/javascript.svg'
import Nodejs from '../../assets/nodedotjs.svg';
import Mongodb from '../../assets/mongodb.svg';
import Express from '../../assets/express.svg';
import Git from '../../assets/git.svg';

const Works = ()=>{
    return(
        <section id="works">
            <h2 className='workstitle'>My Skills</h2>
            <span className='worksDesc'>Hi, here I am showcasing my skills</span>
            <div className='worksImgs'>
                <div className='imageContainer'>
        <img src={Reactpic} alt='ReactJS' className='worksImg'/>
        <h3>React.js</h3>
    </div>
    {/* Add similar containers for other images */}
    <div className='imageContainer'>
        <img src={Javascript} alt='Javascript' className='worksImg'/>
        <h3>Javascript</h3>
    </div>
    <div className='imageContainer'>
        <img src={Nodejs} alt='NodeJS' className='worksImg'/>
        <h3>Node.js</h3>
    </div>
    <div className='imageContainer'>
        <img src={Mongodb} alt='MongoDB' className='worksImg'/>
        <h3>MongoDB</h3>
    </div>
    <div className='imageContainer'>
        <img src={Express} alt='ExpressJS' className='worksImg'/>
        <h3>Express.js</h3>
    </div>
    <div className='imageContainer'>
        <img src={Git} alt='Git' className='worksImg'/>
        <h3>Git</h3>
    </div>
            </div>
        </section>
    );
}
export default Works