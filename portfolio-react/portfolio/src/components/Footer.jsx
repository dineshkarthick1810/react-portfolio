import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "../footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Footer = () => {
    return (
        <>
            <div className='container-fluid forbackground-footer  ' >
                <div className='container forcenter-footer-content '>
                    <div className='  text-white  ' style={{width:"100%",padding:"40px",borderRadius:"40px",fontWeight:"bold",backgroundImage: "linear-gradient(147deg, #0c0b0c 95%,  #b6186762  )",paddingLeft:"100px"}}>
                        <h1 className=''>LET'S WORK TOGETHER...!</h1>
                        <a href='Dinesh.pdf' className='btn text-white forresume-animation px-4 py-1 mt-3' style={{fontWeight:"bold"}} download="Resume">Resume</a>

                    </div>

                    <p className='text-white '>Copyright &copy; 2024.Designed by DINESH</p>

                    <div style={{position:"absolute",bottom:"50px",right:'10px'}} className='
                    forfooter-sm'>
                    <ul className='list-unstyled'>
                        <li className='list-unstyled-item foricon-footer mb-3'  style={{backgroundColor:"blue",border:"2px solid white"}}><a href='www.linkedin.com/in/dineshkarthick' className='text-decoration-none text-white' ><LinkedInIcon/></a></li>

                        <li className='list-unstyled-item foricon-footer mb-3'  style={{backgroundColor:"blue",border:"2px solid white"}}><a href='https://github.com/dineshkarthick1810' target='_blank' className='text-decoration-none text-white'><GitHubIcon/></a></li>
                        
                    </ul>
                </div>
                </div>
                
               

            </div>

        </>

    )
}

export default Footer
