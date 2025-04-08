import languages from "../../data/languages";
import Text from "./text";

function Main() {

    return <main>
        <div className="container">
            <div className="button-container">
                {languages.map(languages => <button key={languages.id}>{languages.title}</button>)}
            </div>
            <Text />
        </div>
    </main>
}









export default Main;