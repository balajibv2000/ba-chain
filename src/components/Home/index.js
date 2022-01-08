import './style.css'
import Information from '../Information'
import Activity from '../Activity'
import Metrics from '../Metrics'

export default function Home(){
    return(
        <div className="home">
            <div className="column"></div>
            <div className="main">
                <div className="top-menu">
                    <div>
                        <h3 className="BAChain">BAChains</h3>
                        <span className="Transparency">TRANSPARENCY</span>
                    </div>
                    <div className="user">
                        <div className="avatar"></div>
                        <span>Username</span>
                    </div>
                </div>
                <div className="mid-menu">
                    <Information />
                    <Activity />
                </div>
                <Metrics />
            </div>
        </div>
    )
}