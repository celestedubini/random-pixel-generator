import './App.css'

import CodeGenerator from "./components/code-generator/code-generator";
import Title from "./atoms/title/title";

function App() {

    return (
        <div className="App">
            <main className="App-header">
                <Title copy='Random Pixel Pattern Generator'></Title>
                <CodeGenerator></CodeGenerator>
            </main>
        </div>
    )
}

export default App
