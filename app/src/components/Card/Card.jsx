import "./Card.css"
import Pic from "../Pic/Pic.jsx"

export default function Card(props) {
    return (
        <div className="Card">
            <p>Card</p>
            <p>Contains Pic(1)</p>
            <Pic image={props.image} />
        </div>
    );
  }
