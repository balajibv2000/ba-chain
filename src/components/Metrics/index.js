import './style.css'
import Header from '../Header/Index'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


export default function Metrics(){
    const data = {
        labels: ['Party A', 'Party B' , 'Party C' , '' , '' , '' , '' , '' , '' , ''],
        datasets: [
          {
            backgroundColor: ['#f36f4e', '#7467f0' , '#ae4afa' ],
            borderWidth: 0,
            barPercentage: 0.35,
            data: [8 , 6 , 4 ]
          }
        ]
      }
    return(
        <div className="metrics">
            <Header
                title="Loans Metrics"   
                subtitle="Loans owners" 
            />
            <div className='chart-area'>
            <Chart 
                type='bar' 
                data={data}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                        display: false,
                    }
                },
                  scales: {
                    x: {
                        position: 'right',
                        ticks: {
                          maxTicksLimit: 10
                        },
                        suggestedMax: 1,
                        count: 5
                    },

                    y: {
                        position: 'right',
                        ticks: {
                            maxTicksLimit: 6
                          },
                          suggestedMax: 1,
                          count: 5, 
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