import './style.css'
import Header from '../Header/Index'

export default function Activity(){
    return(
        <div className="activity">
            <Header
                title="Past Activity"   
            />
            <div className='list'>
                <ul>
                    <li>
                        <h3>Company creation</h3>
                        <span>January 1, 2022</span>
                    </li>
                    <li>
                        <h3>Loans tokenised</h3>
                        <span>February 1, 2022</span>
                    </li>
                    <li>
                        <h3>Legal status modified</h3>
                        <span>March 1, 2022</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}