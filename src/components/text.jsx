import languages from "../../data/languages";
import { useState } from "react";

function ExplanationText() {

    // condizione in cui non si seleziona nessun bottone, quindi nessun oggetto dell'array languages
    if (!languages.length) {
        return <div className="text-container">Nessun linguaggio selezionato!</div>
    }

    return languages.map(languages => <p key={languages.id}>{languages.description}</p>)
}


export default ExplanationText;