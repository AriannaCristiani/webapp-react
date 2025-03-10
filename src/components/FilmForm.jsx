import { useState, useContext } from 'react';
import axios from 'axios';
import GlobalContext from '../contexts/GlobalContext';

const initialFormData = {
    title: '',
    director: '',
    genre: '',
    release_year: '',
    abstract: '',
    image: null
};

export default function FilmForm({ onSuccess = () => { } }) {
    const [formData, setFormData] = useState(initialFormData);
    const [isFormValid, setIsFormValid] = useState(true);
    const { setIsLoading } = useContext(GlobalContext);

    function onFormChange(event) {
        const { name, value, type, files } = event.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'file' ? files[0] : value
        }));
    }

    function validateForm() {
        console.log("Validating formData:", formData);

        return (
            formData.title.trim() &&
            formData.director.trim() &&
            formData.genre.trim() &&
            formData.release_year && !isNaN(Number(formData.release_year)) &&
            formData.abstract.trim() &&
            formData.image instanceof File
        );
    }

    function storeFilm(event) {
        event.preventDefault();

        if (!validateForm()) {
            setIsFormValid(false);
            return;
        }

        setIsLoading(true);
        setIsFormValid(true);

        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('director', formData.director);
        formDataToSend.append('genre', formData.genre);
        formDataToSend.append('release_year', Number(formData.release_year));
        formDataToSend.append('abstract', formData.abstract);
        formDataToSend.append('image', formData.image);

        for (let pair of formDataToSend.entries()) {
            console.log(pair[0] + ':', pair[1]);
        }

        axios.post('http://localhost:3000/api/movies', formDataToSend, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(() => {
                setFormData(initialFormData);
                onSuccess();
            })
            .catch((error) => {
                console.error("Errore Axios:", error.response?.data || error.message);
                setIsFormValid(false);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <section className='container form-container mb-4'>
            <div className='container'>
                <h2 className='text-center py-4 abril-fatface-regular fs-1 text-white'>Add a new movie to the platform</h2>
                <div className='p-4'>
                    <form onSubmit={storeFilm} className='d-flex flex-column gap-3 text-center align-items-center'>
                        <p className='form-control'>
                            <label htmlFor='title'><strong>Title</strong></label>
                            <input className='input-group' type='text' name='title' id='title' onChange={onFormChange} value={formData.title} required />
                        </p>
                        <p className='form-control'>
                            <label htmlFor='director'><strong>Director</strong></label>
                            <input className='input-group' type='text' name='director' id='director' onChange={onFormChange} value={formData.director} required />
                        </p>
                        <p className='form-control'>
                            <label htmlFor='genre'><strong>Gender</strong></label>
                            <input className='input-group' type='text' name='genre' id='genre' onChange={onFormChange} value={formData.genre} required />
                        </p>
                        <p className='form-control'>
                            <label htmlFor='release_year'><strong>Release Year</strong></label>
                            <input className='input-group' type='number' name='release_year' id='release_year' onChange={onFormChange} value={formData.release_year} required />
                        </p>
                        <p className='form-control'>
                            <label htmlFor='abstract'><strong>Plot</strong></label>
                            <textarea className='input-group' rows='6' name='abstract' id='abstract' onChange={onFormChange} value={formData.abstract} required></textarea>
                        </p>
                        <p className='form-control'>
                            <label htmlFor='image'><strong>Image</strong></label>
                            <input className='input-group' type='file' name='image' id='image' accept='image/*' onChange={onFormChange} required />
                        </p>
                        {!isFormValid && <div className='fs-1 text-danger'>Warning. The data entered is invalid</div>}
                        <button className='form-btn abril-fatface-regular' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
