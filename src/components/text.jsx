import languages from "../../data/languages";

function ExplanationText() {

    if (!languages.length) {
        return <div className="text-container">Nessun linguaggio selezionato!</div>
    }

    return <div className="text-container">
        {languages.map(languages => <p key={languages.id}>{languages.description}</p>)}
    </div>
}


export default ExplanationText;