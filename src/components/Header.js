import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import Title from './Title';
import SocialProfiles from './SocialProfiles';

const Header = ({children} ) =>{
 
  const style = {
    display : 'inline-block',
    margin: 10,
    marginBottom: 10
  };

  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <div className="d-flex flex-column flex-md-row align-items-center">
          {/* my-0 mr-md-auto */} 
          <img src={profile} alt="MH Sunny web Developer" className="profile  " /> 
          <div className="d-flex align-items-center justify-content-center pl-2"><h3 className="font-weight-normal  m-0">MH Sunny... <Title /> </h3>   </div>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center ml-auto mr-auto">
          <div className="justify-content-center">
          <SocialProfiles />
          <i className="fa fa-linkedin"></i>

         </div>
        </div>

          
        <nav className="d-flex flex-row align-items-center">
        <Link  className="p-2 text-dark inline-block"  to='/'><h3>Home</h3></Link>
          <Link  className="p-2 text-dark inline-block" to='/projects'><h3>Projects</h3></Link>
          <Link  className="p-2 text-dark inline-block" to='/education'><h3>Education</h3></Link>
          <Link  className="p-2 text-dark inline-block" to='/professional'><h3>Experience</h3></Link>
          <Link  className="p-2 text-dark inline-block" to='/contact'><h3  className="btn btn-outline-primary" >Contact</h3></Link>
      </nav>
         
    </div>

      <div id="main" className="container">
        
        {children}

      </div>
   
    </div>
  )
}

export default Header; 