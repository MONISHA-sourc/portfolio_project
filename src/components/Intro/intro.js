import React from 'react'
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Monisha</span><br />Website Designer</span>
        <p className='introPara'>I am a skilled Professional</p>
        {/*U<Link><button className='btn'>Download Resume</button></Link>*/}
        <button className="btn">
          <a href="../../cv/resume.pdf" target='_blank' download="resume.pdf" >
            Download Resume
          </a>
        </button>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}
export default Intro
