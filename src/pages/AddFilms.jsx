import FilmForm from "../components/FilmForm"

export default function AddFilms() {
    return (
        <section className="container p-4 text-white mt-4 ">
            <h1 className="abril-fatface-regular">Vuoi far parte della nostra community?</h1>
            <hr />
            <p className="fs-5 mb-4" >Completa il Form sottostante con i dati e l'immagine del film che vuoi inserire nella nostra pagina.
                Questo sarà visibile a tutti gli utenti del sito, che portanno recensirlo e votarlo.
                Ricorda di inserire tutte le informazioni richieste per permettere agli altri utenti di conoscere meglio il film.
                Grazie per il tuo contributo!
            </p>
            <FilmForm></FilmForm>
        </section>
    )
}