import React from 'react'
import ChurchNav from '../Components/Navbar/ChurchNav'
import ChurchSide from '../Components/Sidebar/ChurchSide'

import { XYPlot, XAxis, YAxis, LineChart } from 'reactochart';
import './Dashboard.css'
import 'reactochart/styles.css';

const Dashboard = () => {
  


    return (
        <div className ='Dashboard'>
         <ChurchNav/>
         <ChurchSide/>
        <div className ='dashcontent'>
         <div className ='chart'>
           <div className = 'total'>    
            <div className = 'earning'>
             <h5>Total earning</h5>
             <h3>Amount</h3>
             <h6>Date</h6>
             <h6>Last Earning</h6>
            </div>
           <div className = 'earning'>
           <h5>Total Streams</h5>
             <h3>Amount</h3>
             <h6>Date</h6>
             <h6>Last Stream</h6>
           </div>
           </div>
           <div className = 'graph'>
          
              <XYPlot width={500} height ={330}>
                <XAxis/>
                <YAxis />
                <LineChart
                    data={[
                      {x: 'song 1', y: 20},
                      {x: 'song 2', y: 30},
                      {x: 'song 3', y: 35},
                      {x: 'song 4', y: 30},
                    ]}
                    x={d => d.x}
                    y={d => d.y}
                 />
              </XYPlot>
        
        
        
         </div>
         </div>
 
         <div className ='music'>
         
  
      <h4> Top Songs </h4>
 
 

        <h4> Top Albums </h4>
        
       
        
         </div>
         </div>
  
          

           
        </div>
    )
}

export default Dashboard
