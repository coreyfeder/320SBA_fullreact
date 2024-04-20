import "./Pic.css"

export default function Pic(props) {
    return (
        <div className="Pic">
            <img src={props.image.src} alt={props.image.alt} />
        </div>
    );
}
