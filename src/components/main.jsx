import languages from "../../data/languages";
import ExplanationText from "./text";
import { useState } from "react";

function Main() {

    // useState per mostrare/nascondere degli elementi
    const [isOpen, setIsOpen] = useState(true);

    // con prev => !prev, facciamo in modo che si verifichi: la prima volta una condizione, la volta dopo la condizione opposta
    const toggle = () => {
        setIsOpen(prev => !prev)
    };

    return <main>
        <div className="container">
            <div className="button-container">
                {languages.map(languages =>
                    <button key={languages.id} onClick={toggle}>
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