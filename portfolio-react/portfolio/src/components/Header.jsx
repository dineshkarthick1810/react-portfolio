import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../App.css"
import   './Skills'
import { Link,  animateScroll as scroll, scrollSpy } from 'react-scroll';




const Header = () => {

  

  return (
    <>

    <nav className='navbar navbar-dark navbar-expand-lg fixed-top' style={{position:"fixed",backgroundColor:"#0c0b0c"}} >
        <div className='container'>
        <Link to='/' className='navbar-brand text-white ' style={{fontWeight:"bold",fontSize:"30px"}}>Dinesh <span>Babu</span></Link>

<button className='navbar-toggler ' data-bs-toggle='offcanvas' data-bs-target="#offcanvasRight"><span className='navbar-toggler-icon'></span></button>


        
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{width:"250px"}}>
  <div className="offcanvas-header">
    <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body d-flex justify-content-between " style={{flexWrap:"wrap"}}>
   
 <ul className='navbar-nav me-auto  foradjust'>
    <li className='nav-item ms-3'><Link  className='nav-link '
    activeClass="active" 
      to="/Home" 
      spy={true} 
      smooth={true} 
      offset={20} 
      duration={100} style={{fontWeight:"bold",fontSize:"20px",cursor:'pointer'}}>Home</Link></li>
    <li className='nav-item ms-3'><Link to="/Skills" 
    activeClass="active"
      spy={true} 
      smooth={true} 
      offset={140} 
      duration={100} className='nav-link' style={{fontWeight:"bold",fontSize:"20px",cursor:"pointer"}} >Skills</Link></li>
    <li className='nav-item ms-3'><Link to="/Projects"
    activeClass="active" 
      spy={true} 
      smooth={true} 
       
      duration={100}  className='nav-link'style={{fontWeight:"bold",fontSize:"20px",cursor:"pointer"}} >Projects</Link></li>
 </ul>
 <ul className='navbar-nav me-auto  ' >
<div className='foricon mt-2 ms-2 ' style={{backgroundColor:"blue",border:"2px solid white"}}><li className='nav-item '><a href='https://www.linkedin.com/in/dineshkarthick' className='nav-link text-white'  target='_blank'><LinkedInIcon/></a></li></div>
 <div className='foricon mt-2 ms-2' style={{backgroundColor:"blue",border:"2px solid white"}}><li className='nav-item'><a href='https://github.com/dineshkarthick1810' target='_blank' className='nav-link text-white'><GitHubIcon/></a></li></div>

  
 </ul>
 <div className='forbtn'>
    <Link   activeClass="active" to='/Contact'
      spy={true} 
      smooth={true} 
      offset={140} 
      duration={100}  className='btn  text-white  text-center ' style={{fontWeight:"bold",border:"none",outline:"none",width:"100%"}}>Let's Connect</Link>
 </div>

 </div>
    
  </div>

</div>
            
       
       

     
       
       



    </nav>
   
    

  
      
    
    </>
  )
}

export default Header
