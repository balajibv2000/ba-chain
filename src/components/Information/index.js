import './style.css'
import Header from '../Header/Index'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


const data = {
  labels: ['Shareholder A', 'Shareholder B' , 'Shareholder C' , 'Shareholder D'],
  datasets: [
    {
      backgroundColor: 'rgba(116,103,240,1)',
      borderWidth: 0,
      barPercentage: 0.4,
      barThickness: 8,
      maxBarThickness: 10,
      minBarLength: 2,
      data: [0.6 , 0.7 , 0.4 , 0.3 ]
    }
  ]
}


function Shares(props){
    return(
        <div className="shares">
            <h3>{props.header}</h3>
            <span>{props.price}</span>
        </div>
    )
}

export default function Information(){
    return(
        <div className="info">
            <div className='info-header'>
                <Header
                    title="Your company information"   
                    subtitle="Main metrics" 
                />
                <div className="shares-container">
                    <Shares header="Total Shares" price="3660" />
                    <Shares header="Total Value" price="$ 3660" />
                </div>
            </div>
            <div className='chart-area'>
            <Chart 
                type='bar' 
                data={data}
                options={{
                  indexAxis: 'y',
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                        display: false,
                    }
                },
                  scales: {
                    x: {
                        position: 'top',
                        ticks: {
                          format: {
                              style: 'percent'
                          },
                          maxTicksLimit: 10
                        },
                        suggestedMax: 1,
                        count: 5
                    },

                    y: {
                      grid: {
                        offset: false
                      }
                    }
                      
                  }
                }} />

            </div>
        </div>
    )
}