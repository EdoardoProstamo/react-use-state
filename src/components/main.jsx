import languages from "../../data/languages";

function Main() {

    return <main>
        <div className="container">
            <div className="button-container">
                {languages.map(languages => <button key={languages.id}>{languages.title}</button>)}
            </div>
            <div className="text-container"></div>
        </div>
    </main>
}









export default Main;