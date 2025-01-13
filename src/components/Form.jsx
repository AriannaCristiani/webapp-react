export default function Form() {
    return (
        <section className='container form-container mb-4'>
            <div className="container w-50">
                <div>
                    <h2 className='text-center py-4'>Aggiungi una recensione</h2>
                </div>
                <div className='p-4'>
                    <form className='d-flex flex-column gap-3 text-center align-items-center'>
                        <p className='form-control'>
                            <label htmlFor="name"><strong>Nome</strong></label>
                            <input class="input-group" type="text" placeholder='Inserisci il tuo nome' name='name' id='name' />
                        </p>
                        <p className='form-control'>
                            <label htmlFor="text"><strong>Recensione</strong></label>
                            <textarea class="input-group" rows="6" name="text" id="text" placeholder='Scrivi la tua recensione'></textarea>
                        </p>
                        <p className='form-control text-center d-flex align-items-center flex-column'>
                            <label htmlFor="vote"><strong>Voto</strong></label>
                            <select class="input-group w-25 text-center" name="vote" id="vote">
                                <option value="1">1</option>
                                <option value="1">2</option>
                                <option value="1">3</option>
                                <option value="1">4</option>
                                <option value="1">5</option>
                            </select>
                        </p>
                        <button className='btn btn-dark'>Invia</button>
                    </form>
                </div>
            </div>
        </section>
    )
}