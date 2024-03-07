import React from 'react';
import  './skills.css';
import Fullstack from '../../assets/fullstack.jpg';
import Frontend from '../../assets/frontend.jpg';
import Backend from '../../assets/backend.jpg';
import Deploy from '../../assets/deploy.png';

const Skills = () =>{
    return(
        <section id='skills'>
            <span className='skillTitle'>My Services</span>
            <span className='skilldesc'></span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={Fullstack} alt='Fullstack Development' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Fullstack Web Development</h2>
                        <p>As a MERN stack developer, I specialize in crafting fullstack web applications from the ground up. From conceptualization to deployment, I ensure seamless integration of frontend and backend components to deliver robust and dynamic solutions.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Frontend} alt='Frontend Development' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>UI Development</h2>
                        <p>Proficient in JavaScript, HTML, CSS, and React.js, I specialize in crafting captivating user interfaces and dynamic web experiences. With expertise in vanilla JavaScript, I bring interactivity and seamless functionality to your applications. Meticulously crafting clean HTML markup and elegant CSS styles, I ensure aesthetic appeal and cross-browser compatibility. Leveraging the power of React.js, I build scalable and interactive user interfaces, delivering fast and engaging web experiences that meet modern standards.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Backend} alt='Backend Development' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>Backend Development</h2>
                        <p>With expertise in Node.js and Express.js, I architect scalable and efficient backend systems tailored to meet your project requirements. From RESTful APIs to server-side logic, I prioritize performance and maintainability in every aspect of backend development.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src={Deploy} alt='Deployment' className='skillBarImg'/>
                    <div className='skillBarText'>
                        <h2>AWS, Heroku, Netlify Development</h2>
                        <p>Harnessing the power of cloud platforms like AWS, deployment services like Heroku, and continuous integration tools like Netlify, I streamline the deployment process for your applications. Whether it's scaling infrastructure or automating deployment pipelines, I ensure optimal performance and reliability throughout the development lifecycle.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills