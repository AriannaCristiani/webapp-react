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
            text: formData.text.trim() || undefined,
            name: formData.name.trim(),
            vote: formData.vote
        }

        if (!data.name || !data.vote) {
            console.log('Il form non è stato correttamente compilato')
            setIsFormValid(false)
            return
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
                    <h2 className='text-center py-4 abril-fatface-regular fs-1 text-white'>Add your review</h2>
                </div>
                <div className='p-4'>
                    <form onSubmit={storeReview} className='d-flex flex-column gap-3 text-center align-items-center'>
                        <p className='form-control'>
                            <label htmlFor="name"><strong>Name</strong></label>
                            <input className="input-group border-light-blue rounded" type="text" placeholder='Inserisci il tuo nome' name='name' id='name' onChange={onFormChange} />
                        </p>
                        <p className='form-control'>
                            <label htmlFor="text"><strong>Review</strong></label>
                            <textarea className="input-group border-light-blue rounded" rows="6" name="text" id="text" placeholder='Scrivi la tua recensione' onChange={onFormChange} ></textarea>
                        </p>
                        <p className='form-control text-center d-flex align-items-center flex-column'>
                            <label htmlFor="vote"><strong>Vote</strong></label>
                            <select className="input-group w-25 text-center border-light-blue rounded" name="vote" id="vote" onChange={onFormChange} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        {isFormValid === false && <div className='fs-1'>Warning. The data entered is invalid</div>}
                        <button className='form-btn abril-fatface-regular'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
