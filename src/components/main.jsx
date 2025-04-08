import languages from "../../data/languages";
import ExplanationText from "./text";
import { useState } from "react";

function Main() {

    const [isOpen, setIsOpen] = useState(true);

    return <main>
        <div className="container">
            <div className="button-container">
                {languages.map(languages =>
                    <button key={languages.id}>
                        {languages.title}
                    </button>)}
            </div>
            {isOpen && <div>
                <ExplanationText />
            </div>}
        </div>
    </main>
}









export default Main;