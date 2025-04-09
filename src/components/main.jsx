import { useState } from "react"
import Text from "./Text"
import Button from "./Button";
import languages from "../data/languages";


function Main() {

    const startingLanguage = null;
    const [selectedLanguage, setSelectedLanguage] = useState(startingLanguage);

    return (
        <>
            {
                languages.map(language => <Button key={language.id} title={language.title} isSelected={selectedLanguage === language} onSelect={() => setSelectedLanguage(language)} />)
            }

            {!selectedLanguage ? <div className="container">Nessun linguaggio selezionato</div> : <Text item={selectedLanguage} />}
        </>
    )
};

export default Main;
