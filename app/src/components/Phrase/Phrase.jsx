import "./Phrase.css"
import Card from "../Card/Card.jsx"

export default function Phrase(props) {
    return (
        <>
        <div className="PhraseTitle">{props.name}</div>
        <div className="Phrase">
            {props.children}
        </div>
        </>
    );
}
