
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';
const history = require("history");
 
import App from './components/App';
import Jokes from './components/Jokes';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
 import Professional from './components/Professional';

import Header from './components/Header';

import './index.css';
  
ReactDOM.render(

    <Router history={history.createBrowserHistory()}>
        <Switch>
            <Route exact={true} path='/' render={()=> <Header><App /></Header>}/> 
            <Route  path='/projects' render={()=><Header><Projects /></Header>}/> 
            <Route  path='/jokes' render={()=><Header><Jokes /></Header>}/> 
            <Route  path='/education' render={()=><Header><Education /></Header>}/> 
            <Route  path='/professional' render={()=><Header><Professional /></Header>}/> 

             <Route  path='/contact' render={()=><Header><Contact /></Header>}/> 
        </Switch>
</Router>, 
document.getElementById('root')
);

// new Promise( (resolve, reject) => {

//    return reject(new Error('No bears'));

//     setTimeout(()=> {
//         resolve('Bears Beets Battlerstar Galactica');
//     }, 2000);

// }).then(quote => {
//     console.log(quote); 
// })
// .catch(error => console.log('error', error))





// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     speak(){
//         console.log('I am ', this.name, this.age, ' age old' );

//     }
// }

// const animal = new Animal('Simba', 3)
// animal.speak(); 

 
// console.log(animal);


// class Lion extends Animal{

//     constructor (name, age, furColor, speed){
//         super(name, age);
//         this.furColor = furColor;
//         this.speed = speed;
//     }

//     roar(){
//         console.log('Roor: I have ', 
//         this.furColor, ' fur and I can run',
//         this.speed,
//         ' miles an hours!!'
//         );
//     }
// }

// const lion1 = new Lion ('Musafa', 20, 'golden', 25);
// lion1.speak();
// lion1.roar();
// console.log(lion1)

 
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
