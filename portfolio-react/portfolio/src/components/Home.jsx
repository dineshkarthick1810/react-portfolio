import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import "../home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Home = () => {
  const [state,setstate]=useState("Web Developer")

  const[btnAnimationState,setbtnAnimationState]=useState(true)

  const btnConnect=()=>{
    setbtnAnimationState(false)
    setTimeout(()=>{
      setbtnAnimationState(true)

    },2000)
  }

useEffect(()=>{
  setTimeout(()=>{
    setstate("FULL STACK Developer")
      },10000)
},[])
  


  
  return (
    <>
    <Element name='/Home'>
    <div className='forbackground-img ' >
   
        
      
        
<div className='container  ' >
        <div className='row mt-3' >
            <div className='col-md-7  forfirstcolom'>

              <div className='mt-5'>
                <div className='forgreeting mb-3 '>
                  <p className='text-white mt-2  ' style={{fontWeight:"bold"}}>Welcome To My Portfolio</p>
                </div>

                <div className='mt-1 '>
                  <h1 className='text-white '>Hi! I'm Dinesh Babu</h1>
                  
                </div>
                <div className=' forlogo'>
                <p className='h1 text-white  '>{state}</p>
                </div>
                <div className='mt-5'>
                  <p className='text-secondary' style={{fontSize:"20px"}}> I am web developer with extensive experience for create and website design Fronted design and many more and also I quite interest in backend technology like Node js etc..</p>
               
                </div>
                <div className='forbtn-img ' >
                 
<Link   activeClass="active" to='/Contact'
      spy={true} 
      smooth={true} 
      offset={140} 
      duration={2000} className='btn btn-secondary-subtle text-white mt-2 ' style={{border:"none",outline:"none",fontWeight:"bold",fontSize:"20px"}} onClick={btnConnect} >Let's Connect </Link>
<img src='btnrocket.png' alt="btn rocket image" className={btnAnimationState? 'img-fluid mt-3 me-4 forrocket-img ' : "img-fluid mt-3 me-4  forrocket-img2"}
 />
</div>

              </div>

            </div>

            <div className='col-md-5  d-flex justify-content-center align-item-center h-100' >

                <div className='person-animation mt-5'>
                <img src='header-img.png' className='img-fluid forimg' />
                </div>

            </div>
        </div>
       
        </div>
        
      
    </div>
    </Element>
    </>
  )
}

export default Home
