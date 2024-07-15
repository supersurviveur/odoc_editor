import "./App.css";
import {PlaygroundDemo} from "@/components/pages/editor";

function App() {
    return (
        <div className="flex items-start justify-center h-screen">
            <div className="w-5/6">
                <PlaygroundDemo id="1" />
            </div>
        </div>
    );
}

export default App;
