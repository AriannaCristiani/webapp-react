import { useState, useContext } from 'react'
import axios from 'axios'
import GlobalContext from '../contexts/GlobalContext'


const initialFormData = {
    vote: 1,
    name: '',
    text: ''
}



export default function Form({ id, onSuccess = () => { } }) {

    const [formData, setFormData] = useState(initialFormData)

    const [isFormValid, setIsFormValid] = useState(true)

    const { setIsLoading } = useContext(GlobalContext)


    function onFormChange(event) {
        const { value, name: propName } = event.target
        console.log(value, propName)


        setFormData({
            ...formData,
            [propName]: value
        })
    }

    function storeReview(event) {
        event.preventDefault()

        setIsFormValid(true)
        console.log('salvata la recensione sul server')

        const data = {
            text: formData.text,
            name: formData.name,
            vote: formData.vote
        }

        setIsLoading(true)

        axios.post(`http://localhost:3000/api/movies/${id}/reviews`, data)
            .then(res => {
                console.log(res)
                setFormData(initialFormData)
                onSuccess()
            }).catch(err => {
                console.log(err)
                setIsFormValid(false)
            })

        setIsLoading(false)
    }



    return (
        <section className='container form-container mb-4'>
            <div className="container">
                <div>
                    <h2 className='text-center py-4'>Aggiungi una recensione</h2>
                </div>
                <div className='p-4'>
                    <form onSubmit={storeReview} className='d-flex flex-column gap-3 text-center align-items-center'>
                        <p className='form-control'>
                            <label htmlFor="name"><strong>Nome</strong></label>
                            <input className="input-group" type="text" placeholder='Inserisci il tuo nome' name='name' id='name' onChange={onFormChange} />
                        </p>
                        <p className='form-control'>
                            <label htmlFor="text"><strong>Recensione</strong></label>
                            <textarea className="input-group" rows="6" name="text" id="text" placeholder='Scrivi la tua recensione' onChange={onFormChange} ></textarea>
                        </p>
                        <p className='form-control text-center d-flex align-items-center flex-column'>
                            <label htmlFor="vote"><strong>Voto</strong></label>
                            <select className="input-group w-25 text-center" name="vote" id="vote" onChange={onFormChange} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <button className='btn btn-dark'>Invia</button>
                    </form>
                </div>
            </div>
        </section>
    )
}