import "./Card.css"
import Pic from "../Pic/Pic.jsx"

export default function Card(props) {
    return (
        <div className="Card">
            <Pic image={props.image} />
        </div>
    )
  }
