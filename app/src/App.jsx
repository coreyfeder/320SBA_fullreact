// import { useState } from "react"

import "./App.css"
// import logo from "./assets/logo.jsx"

// import MyComponent from "./Components/MyComponent/MyComponent.jsx"
import Card from "./components/Card/Card.jsx"

function App() {
    // const [count, setCount] = useState(0)

    const sampleImages = {
        ok: {src: "https://em-content.zobj.net/source/joypixels/369/ok-button_1f197.png", alt: "OK"},
        peanuts: {src: "https://em-content.zobj.net/source/apple/391/peanuts_1f95c.png", alt: "peanuts"},
        death: {src: "https://em-content.zobj.net/source/samsung/395/skull_1f480.png", alt: "death"},
        equals: {src: "https://em-content.zobj.net/source/apple/391/heavy-equals-sign_1f7f0.png", alt: "equals"},
        thumbsup: {src: "https://em-content.zobj.net/source/apple/391/thumbs-up_1f44d.png", alt: "thumbs up"},
        thumbsdown: {src: "https://em-content.zobj.net/source/apple/391/thumbs-down_1f44e.png", alt: "thumbs down"},
    }

    return (
        <div className="App">
            <Card image={sampleImages.peanuts} />
            <Card image={sampleImages.equals} />
            <Card image={sampleImages.death} />
        </div>
    )
}

export default App
