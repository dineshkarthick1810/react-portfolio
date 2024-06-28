import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "../projects.css"
import VisibilityIcon from '@mui/icons-material/Visibility';
import Lottie from 'react-lottie';
import Animation from "../animation.json"
import {  Element, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Projects = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
  <>
  <Element name='/Projects'>
  <div className='container-fluid forpadding '  style={{backgroundColor:"#0c0b0c"}}>
  <div className='container    forfirst-div '>
    <div className='' style={{display:"flex",justifyContent:"center"}}>

    
   
    <div className='mt-3' style={{width:"70%"}}>

        <h2 className='text-white text-center'>Projects</h2>
        <p className='text-secondary mt-3'>
          My projects are simple and basic to handle easily.I tried Three projects thats Expense Tracker,Task Manager,Add to Cart .Based on my knowledge I will work in these Projects.Its an beginner level projects but i will Show my knowledge to my best to You.Add to cart Project are inspired by popular E-commerce website,That particular carts section functinality will made by my own knowledge without anyone help..Its not finish , i will  do projects what I inspired or whatever see..
       </p>

       {/* for nav tabs vaikanu */}
       <div style={{display:"flex",justifyContent:"center",backgroundImage:" linear-gradient(147deg, #0c0b0c 10%,  #b6186762  )",borderRadius:"20px"}}>

       <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist" style={{display:"flex",justifyContent:"space-around",width:"100%"}}>
 
    <button className= "btn mt-2   text-decoration-none text-white"  id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{border:"none",outline:"none",fontWeight:"bold"}} >Projects</button>
  
 
    <button className= "btn mt-2  text-decoration-none text-white"  id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{border:"none",outline:"none",fontWeight:"bold"}} >Description</button>
 
 
</ul>

      
  
</div>


</div>

    </div>
    </div>




    <div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">


<div className='row mt-5'>

  <div className='col-lg-4 col-md-6 forcenter' >
    <div className='card  forcard' style={{position:"relative",backgroundColor:"#0c0b0c",border:"4px solid #b6186762",overflow:"hidden"}}  >
      <img src='https://cdni.iconscout.com/illustration/premium/thumb/expense-management-4268366-3561009.png' alt="something eroor occred" className='card-img img-top'  />

<div className=' foranimation  w-100 ' >
  
  
  <p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>Expense Tracker</span></p>

  <p className='text-white text-center mt-2' style={{fontWeight:"bold"}}>Description : <span className='text-white'>Its is an Expense Tracker .its helps to track expense of our daily lives.To more View Description section. </span></p>

  <a href='https://expense-tracker-virid-kappa.vercel.app/' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"#da0a72ea "}}>View <span><VisibilityIcon/></span></a>
 


<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
              />
              </div>
 

</div>
     
    </div>

  </div>
   <div className='col-lg-4 col-md-6 forcenter'>
    <div className='card  forcard forsm-margin' style={{backgroundColor:"#0c0b0c",border:"4px solid #b6186762"}} >
    <img src='e-commerce.png' alt="something eroor occred" className='card-img img-top '  style={{borderRadius:"36px"}}/>


    <div className=' foranimation  w-100 ' >
  
  
  <p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>Product Manager</span></p>

  <p className='text-white text-center mt-2' style={{fontWeight:"bold"}}>Description : <span className='text-white'>Its an Product Manager.it will show the details of  products sold and clear barchart for selected month.TO  more view Description section...  </span></p>

  <a href='https://productmanager-flame.vercel.app/' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"#da0a72ea "}}>View <span><VisibilityIcon/></span></a>
 


<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
              />
              </div>
 

</div>



    </div>

  </div>

   <div className='col-lg-4   forcenter'>

    <div className='card forcard  forsm-height' style={{backgroundColor:"#0c0b0c",border:"4px solid #b6186762"}}>
    <img src='taskmanager.png' alt="something eroor occred" className='card-img img-top '  style={{borderRadius:"36px",height:"100%"}}/>



    <div className=' foranimation  w-100 ' >
  
  
  <p className='text-white mt-2 ' style={{fontWeight:"bold"}}>Title :<span className='text-white ms-1'>Task Manager</span></p>

  <p className='text-white text-center mt-2' style={{fontWeight:"bold"}}>Description : <span className='text-white'>It is an Task Manager .its very useful to handle tasks especially for study and practising coding.To more View Description section. </span></p>

  <a href='https://dineshkarthick1810.github.io/Task-manager/' target="_blank" className='btn text-white mt-2' style={{backgroundColor:"#da0a72ea "}}>View <span><VisibilityIcon/></span></a>
 


<div className='forlotie-animation' >
<Lottie options={defaultOptions}  
              />
              </div>
 

</div>
      
    </div>

  </div>
  
  

</div>




  </div>












  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
<div className='container-fluid'>
<div className='row mt-4'>
<div className='col-lg-6 forcenter'>
  <div className='card forcard ' style={{border:"4px solid #b6186762",backgroundColor:"#0c0b0c",display:"flex",flexDirection:"column",alignItems:"center"}}>
    <ul className=''>
      <li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}>Expense Tracker</p>
</li>

<li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}>Its helps to Track our Daily Expense day to day life.</p>
</li>

<li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}>Tracking your expenses helps you create a more accurate budget for your business</p>
</li>

<li className='text-white' ><p className='text-white' style={{fontWeight:"bold"}}> making a habit of tracking expenses can help you getting used to budgeting. It means that when daily expenses are handled well</p>
</li>
    </ul>
    


  </div>

 
</div>

<div className='col-lg-6  forcenter'>

<div className='card forcard forsm-margin ' style={{border:"4px solid #b6186762",backgroundColor:"#0c0b0c",display:"flex",flexDirection:"column",alignItems:"center"}}>

  <ul >
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Product manager</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>It will show the details of products for selected month.it will help for identify statistics of products sold and unsold.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>it gives users to select month .after selecting the particlar month added products will be disolayed in UI.</p></li>

    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>node js is used for get api of products to load in fronted.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Allow users to see clearly details of selected months of products details and sold and unsold items in statistics and gives barchart for the products.</p></li>


  </ul>

    
</div>
</div>

<div className='col-lg-6 forcenter'>

<div className='card forcard formd-margin mt-5'  style={{border:"4px solid #b6186762",backgroundColor:"#0c0b0c",display:"flex",flexDirection:"column",alignItems:"center"}}>
<ul >
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Task Manager</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Task tracking allows you to prioritize your tasks and get the most important ones out of the way quickly and efficiently.</p></li>
    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Increase Efficiency. Productivity improvement will also lead to increased efficiency.</p></li>

    <li className='text-white'><p className='text-white' style={{fontWeight:"bold"}}>Task Management. Task management and scheduling allow you to set deadlines ahead of time.</p></li>


  </ul>

    
</div>
</div>

</div>
</div>


  </div>
  
</div>



    

    </div>
    

      
    </Element>

  </>
    
  )
}

export default Projects
