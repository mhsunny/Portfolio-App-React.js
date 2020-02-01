import React  from 'react'; 

import Training from '../components/Training';


const Education = () => (
 
            <div className="education">
                <h2>Education </h2>  
  
                <table className="table">
               
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Year</th>
                    <th scope="col">Degree / Major</th>
                    <th scope="col">University / Intitution</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>2016-2017</td>
                    <td>Masters of Computer Science / Software Engineering</td>
                    <td>American International University Bangladesh</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>2007-2010</td>
                    <td>MBA / Management Information System</td>
                    <td>ASA University Bangladesh</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>2008-2009</td>
                    <td>Diploma / Web Programming</td>
                    <td>IDB-BISEW IT Scholarship</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>2003-2006</td>
                    <td>Bachelor of Science / Major: Mathematics</td>
                    <td>National University, largest public university of Bangladesh</td>
                    </tr>
                </tbody>
                </table>
               
               <Training />
            
            </div>
        ) 
         
export default Education;