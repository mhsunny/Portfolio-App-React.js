import React  from 'react';
import udemy from '../assets/udemy.png';
import basis from '../assets/basis.png';
import hubspotacademy from '../assets/hubspot-academy.png';
import apnic from '../assets/apnic.svg';
import bbf from '../assets/BBF-Logo.png';
import google from '../assets/google.png';
import microsoft from '../assets/microsoft.png';

  import uspc from '../assets/Peace-Corps-Logo.png';
  import afd from '../assets/afd.png';

const Training = () => (

 
   <div className="education">  
                
   <h2>Training, Workshop &amp; Other Certifications </h2>
   <div className="container">
  
    <div className="row heading mb-md-3">
       <div className="col-md-2">
          <h4 className="p-md-2">DateTime</h4>   
       </div>
       <div className="col-md-2">  
            <h4  className="p-md-2">Institution</h4>  
           </div>
       <div className="col-md-8">                        
        <h4  className="p-md-2">Course / Certification   </h4>
       </div>
   </div>

   {/* Course 1 */}
   <div className="row">
       <div className="col-md-2">
          <p>January, 2020</p>   
       </div>
       <div className="col-md-3">  

            <p>
               <img src={udemy} alt="Udemy is an online learning platform (Headquarters: San Francisco, CA"  title="Udemy is an online learning platform (Headquarters: San Francisco, CA" /><br/> 
               Udemy is an online learning platform (Headquarters: San Francisco, CA)</p>  
           </div>
       <div className="col-md-7">                        
          <h4>Certification on Build Web Apps with Vue JS 2 & Firebase </h4>
          <ul>
              <li>Learn Vue JS & Firebase by creating & deploying dynamic web apps (including Authentication). </li>
              <li>Get in-depth knowledge of Vue JS & Firebase from the ground up</li>
              <li>Build & deploy 3 real-world web apps with Vue JS & Firebase</li>
              <li>Learn about & implement Firebase authentication into Vue JS web apps Use other Firebase services such as a Firestore database, Cloud Functions & Hosting</li>
          </ul> 
       </div>
   </div>   
   
   
   <hr />

   {/* Course 2 */}
   <div className="row">
       <div className="col-md-2">
          <p>June, 2013</p>   
       </div>
       <div className="col-md-3">  
            <p>
            <img src={basis} alt=" Bangladesh Association of Software and Information Services Institute of Technology & Management (BITM)"  title=" Bangladesh Association of Software and Information Services Institute of Technology & Management (BITM)" /><br/><br/>
               Bangladesh Association of Software and Information Services Institute of Technology & Management (BITM)
               </p>  
           </div>
       <div className="col-md-7">                        
          <h4>Android app development course</h4>
          <ul> 
               
           <li>I learnt the advanced Java Programming (Java SE ) which helps me for developing cross-platform and object-oriented applications.</li>

           <li>After the course the end of this course, I was familliar with programming in Java and I built The Daily Star news App on Android platform.</li>

           <li>Java variables, class, Data Types, operators, array, ArrayList, Loops</li>
           <li>Methods, Encapsulation, Access modifiers, Inheritance, polymorphism, objects and constructors, abstract classes and interfaces, Exceptions and Assertions</li>
           <li>Manage and control thread lifecycle, </li>
           <li>Activities Using Intents, Fragments, Displaying Notifications                                                                                                               </li>
           <li>Components of a Screen, Display Orientation, Action Bar, Designing User Interface with Views                                                         </li>
           <li>Basic Views. Picker Views, Pictures and Menus with Views                                                                                                              </li>
           <li>Creating and Using Databases, Sharing Data, SMS Messaging, Location Tracking, Networking                                                                                                      </li>
           <li>Web Services Using HTTP, JSON Services, Sockets Programming, Android Services                                                                   </li>
           <li>Establishing Communication between a Service and an Activity, Threading   </li>
           <li>Publishing Android Applications, Deploying APK Files</li>


            
          </ul> 
       </div>
   </div>



   <hr />

   {/* Course 3 */}
   <div className="row">
       <div className="col-md-2">
          <p>March, 2016</p>   
       </div>
       <div className="col-md-3">  
       
            <p>
            <img src={hubspotacademy} alt="Hubspot Academy,  Cambridge, MA"  title="Hubspot Academy,  Cambridge, MA" /><br/><br/>
               Hubspot Academy,  Cambridge, MA</p>  
           </div>
       <div className="col-md-7">                        
          <h4>Hubspot Design Certification  </h4>
          <ul>
              <li>Learn how to build responsive styled templates using hubsopt;s desgn tools.</li>
              <li>The certification helps to learn how to apply template and style knowledge to create blog, landing page, and email template and also able to sell assets to Hubspots Marketplace.</li>
          </ul> 
       </div>
   </div>

   <hr />

   {/* Course 4 */}
   <div className="row">
       <div className="col-md-2">
          <p>April, 2016</p>   
       </div>
       <div className="col-md-3">  
            <p>
            <img src={apnic} alt="APNIC ( Asia-Pacific Network Information Centre, Brisbane, Australia )"  title="APNIC ( Asia-Pacific Network Information Centre, Brisbane, Australia )" /><br/><br/>
            APNIC ( Asia-Pacific Network Information Centre, Brisbane, Australia )</p>  
           </div>
       <div className="col-md-7">                        
          <h4>Certification on Cyber Security and Network Security  </h4>
          <ul>
               <li>Learn the nature and structure of network attacks and the motivation that drives such on-line malicious activity.</li> 
               <li>Network Security Fundamentals</li>
               <li>Security on Different Layers and Attack Mitigation</li>
               <li>Cryptography and PKI</li>
               <li>Device and Infrastructure Security</li>
               <li>Operational Security and Policies</li>
               <li>Virtual Private Networks and IPSec</li>
               <li>DNSSEC</li>
               <li>Route Filtering</li>

          </ul> 
       </div>
   </div>

   <hr />

   {/* Course 5 */}
   <div className="row">
       <div className="col-md-2">
          <p>April, 2016</p>   
       </div>
       <div className="col-md-3">  
            <p>
            <img src={bbf} alt="Bangladesh BRAND FORUM and MARKEDU (Markedu is an international marketing training and research institute. )"  title="Bangladesh BRAND FORUM and MARKEDU (Markedu is an international marketing training and research institute. )" /><br/> 

               Bangladesh BRAND FORUM and MARKEDU (Markedu is an international marketing training and research institute. )</p>  
           </div>
       <div className="col-md-7">                        
          <h4>Certification on participating in the masterclass titled "Digital Marketing Masterclass"</h4>
          <ul>
               
           <li>Marketing Fundamentals</li>
           <li>Content Strategy</li>
           <li>Social Media Marketing (Organic)</li>
           <li>Social Media Advertising (Paid)</li>
           <li>SEO (Search Engine Marketing)</li>
           <li>Search Engine Marketing with AdWords (SEM)</li>
           <li>Display Advertising</li>
           <li>Email Marketing</li>
           <li>Web & Marketing Analytics</li>
            
          </ul> 
       </div>
   </div>

   <hr /> 

   {/* Course 6 */}
   <div className="row">
       <div className="col-md-2">
          <p>April, 2016</p>   
       </div>
       <div className="col-md-3">  
            <p>
            <img src={google} alt="Google App Analytics Fundamentals Certification"  title="Google App Analytics Fundamentals Certification" /><br/>

            Google </p>  
           </div>
       <div className="col-md-7">                        
          <h4>Certification on Mobile App Analytics Fundamentals </h4>
          <ul>

           <li>This certification helps the app developer or an experienced marketer in the mobile app space, knowing the fundamentals of mobile app measurement to improve the app marketing and monetization efforts</li>
           <li>Learn how to identify your most valuable users, how to find more of them, and how to tailor your monetization experience for different groups of users. </li>

          </ul> 
       </div>
   </div>

   <hr />

   {/* Course 7 */}
   <div className="row">
       <div className="col-md-2">
          <p>October, 2009</p>   
       </div>
       <div className="col-md-3">  
            <p>   <img src={microsoft} alt="Microsoft Certified Professional (MCP) Certification"  title="Microsoft Certified Professional (MCP) Certification" /><br/> 
            Microsoft Corporation </p>  
           </div>
       <div className="col-md-7">                        
          <h4>Microsoft Certified Professional (MCP)  </h4>
          <ul> 
           <li>Certification on Microsoft .net framework application development foundation and Windows-based client development.</li>
           <li>This certification validates IT professional and developer technical expertise through rigorous, industry-proven, and industry-recognized exams.  </li>

          </ul> 
       </div>
   </div>


   <hr />

   <h2 className="heading ptb-3">Language Certification</h2>
 

    {/* Course 8 */}
   <div className="row">
       <div className="col-md-2">
          <p>October, 2005</p>   
       </div>
       <div className="col-md-3">  
            <p> <img src={uspc} alt="United States Peace Corps"  title="United States Peace Corps" /><br/> 
            United States Peace Corps   </p>  
           </div>
       <div className="col-md-7">                        
          <h4> English language development course  </h4>
          <ul> 
           <li><h4>The course curriculum has been designed to:</h4></li>
           <li>Provide a firm base in English through the development of listening, speaking, reading, and
           writing skills.</li> 
           <li>Develop competence in English to achieve academically in all content areas.</li> 
           <li>Help understanding, respect, and appreciation for the traditions and values of the United States.</li> 
           <li>Provide exposure to and affirmation of the multicultural nature of the United States.</li> 
          </ul> 
       </div>
   </div>



    {/* Course 9 */}
    <div className="row">
       <div className="col-md-2">
          <p>June, 2015</p>   
       </div>
       <div className="col-md-3">  
            <p> <img src={afd} alt="Alliance Française de Dhaka"  title="Alliance Française de Dhaka" /><br/>
            Alliance Française de Dhaka
            </p>  
           </div>
       <div className="col-md-7">                        
          <h4>French Language Diploma </h4>
          <ul> 
           <li><h4>DELF Certification A1 and A2 and learn up-to B1 level</h4></li>
           
           <li>DELF (Diplôme d’Etudes en Langue Française) is official qualifications awarded by the French Ministry of Education to certify the competency of candidates from outside France in the French language. These certificates are valid for life.</li> 

          </ul> 
       </div>
   </div> 

   </div>
</div>

   ) 
         
export default Training;