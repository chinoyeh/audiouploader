import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import {Songs} from './Components/Data/Data'
import './Components/Data/Data.css'
import { XYPlot, XAxis, YAxis, LineChart } from 'reactochart';
import 'reactochart/styles.css';


const Dashboard = () => {


    return (
        <div className ='Dashboard'>
         <Navbar/>
        <Sidebar/>
        <div className ='dashcontent'>
         <div className ='chart'>
           <div className = 'total'>    
            <div className = 'earning'>
             <h5>Total earning</h5>
             <h3>Amount</h3>
             <h6>date</h6>
             <h6>Last Earning</h6>
            </div>
           <div className = 'earning'>
           <h5>Total Streams</h5>
             <h3>Amount</h3>
             <h6>date</h6>
             <h6>Last Stream</h6>
           </div>
           </div>
           <div className = 'graph'>
             {/* <img src='data:image/png;base64,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'/></div> */}
              <XYPlot width={800} height ={320}>
                <XAxis/>
                <YAxis />
                <LineChart
                    data={[
                      {x: 0, y: 20},
                      {x: 5, y: 30},
                      {x: 10, y: 35},
                      {x: 15, y: 30},
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
