import FilmForm from "../components/FilmForm"

export default function AddFilms() {
    return (
        <section className="container p-4 text-white mt-4 ">
            <h1 className="abril-fatface-regular">Do you want to be part of our community?</h1>
            <hr />
            <p className="fs-5 mb-4" >Complete the Form below with the data and image of the movie you want to include on our page.
                This will be visible to all users of the site, who will review and vote on it.
                Remember to include all the required information so that other users can learn more about the film.
                Thank you for your contribution!
            </p>
            <FilmForm></FilmForm>
        </section>
    )
}