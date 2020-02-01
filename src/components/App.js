
import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
// import Jokes from './Jokes';
import Header from './Header'
import Training from './Training';
import Education from './Education';


// class RegularClass{}
// class ComponentClass extends Component{}
// const RegularClassInstance = new RegularClass();
// const ComponentClassInstance = new ComponentClass()
// console.log('RegularClassInstanc',RegularClassInstance );
// console.log('ComponentClassInstance',ComponentClassInstance );
class App extends Component{
/*
  constructor(){
    super();
    this.state = {displayBio: false };
    console.log('component this', this);
    // this.readMore = () =>{
    //   console.log('readmore this ', this);
    // }
   // this.readMore  = this.readMore.bind(this)
   this.toogleDisplayBio  = this.toogleDisplayBio.bind(this)
  } 
  // readMore(){
  //    // this.setState({displayBio: true})
  //   //console.log('readmore this ', this);
  // }
  toogleDisplayBio(){
    this.setState({displayBio: !this.state.displayBio})
  }
*/
state = {displayBio: false };
toogleDisplayBio = () => {
  this.setState({displayBio: !this.state.displayBio})
}
  render(){ 
    return (
      <div>
          
    

        <div className="alert alert-info" role="alert">
         
        <p>My full name is Mahamudul Hasan. I love to play with web development especially HTML5, CSS3, JavaScript, jQuery, React.js and Vue.js for front-end programming. I have been working for 8 years on PHP, MySQL, WordPress, Woo-Commerce, and other PHP frameworks like PHP Flight, CodeIgniter, Laravel, Slim, etc. </p>
        <p>Now I would like to build Progressive Web App and focus on Vue.js, React.js, Node.js, Ember.js, NoSQL, MongoDB, Firebase, etc. I am always looking forward to working on meaningful projects. </p>  
        {
          this.state.displayBio ?  (
            <div>
            <p class="mb-0">I live in New York, and code every day. My favorite language is JavaScript, I think both React.js and Vue.js are awesome. Beside coding, I also love to travel, music and movies</p> 
             <button onClick={this.toogleDisplayBio}>Show less</button>
            </div>
          ): (
            <div><button onClick={this.toogleDisplayBio}>Read more</button></div>
          ) 
        }  
        </div>
 
        <Education />

        <hr />
        <Projects />
         <hr />
         <h2>Connect with me!</h2>
         <SocialProfiles />
         {/* <hr />
         <Jokes /> */}
      </div>
    )
  }
} 

export default App;
