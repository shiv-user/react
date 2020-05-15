import React from "react";
import {Pie} from "react-chartjs-2";


const Card=({ details,confirm,recover })=>{
const dc =`${details}`
const cc = `${confirm}`
const rc = `${recover}`


const state = {
    labels: ['Deaths','Confirmed cases','Recovered Cases'],
    datasets: [
      {
        label: 'COVID-19',
        backgroundColor: [
          '	#FF0000',
          '#FF4500',
          '#32CD32',
          
        ],
        hoverBackgroundColor: [
        '	#FF0000',
        '#FF4500',
        '#32CD32',
        
        ],
        data: [dc,cc,rc]
      }
    ]
  }
    return(
        //
        <div >
            <h1><center>COVID-19 Status</center></h1>
            <Pie
          data={state}
          width={100}
          height={300}
          
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'left',
              labels:{
                  fontColor:"#000"
              }
            },
            maintainAspectRatio: false
          }}
        />

        </div>
        

    )

}


export default Card;