import './style.css'

export default function Header(props){
    return(
        <div className="header">
            <h3>{props.title}</h3>
            <span>{props.subtitle}</span>
            <hr />
        </div>
    )
}