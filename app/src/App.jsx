// import { useState } from "react"

import "./App.css"
// import logo from "./assets/logo.jsx"

// import MyComponent from "./Components/MyComponent/MyComponent.jsx"
import Card from "./components/Card/Card.jsx"

function App() {
    // const [count, setCount] = useState(0)

    const image = logo();

    return (
        <>
            <Card image={image} />
        </>
    )
}

export default App
