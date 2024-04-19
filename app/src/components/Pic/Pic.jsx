import "./Pic.css"

export default function Pic(props) {
    return (
        <div className="Pic">
            <p>Pic</p>
            <img src={props.image} alt="" />
        </div>
    );
}
