import { MdEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contacts() {
    return (
        <section className="container p-4 text-white mt-4 ">
            <div>
                <h1 className="abril-fatface-regular" >Contacts</h1>
            </div>
            <hr />
            <div>
                <h3 className="abril-fatface-regular">e-mail:</h3>
                <p className="fs-5"><MdEmail></MdEmail>  official website e-mail:
                    <a className="fs-4" href="#">  movie_addicted_community@gmail.com</a></p>
                <p className="fs-5" ><MdEmail></MdEmail>  e-mail for customer service:
                    <a className="fs-4" href="#">  movie_addicted_customer_service@gmail.com</a></p>
                <br />
                <h3 className="abril-fatface-regular">Social:</h3>
                <p className="fs-5"><IoShareSocialSharp></IoShareSocialSharp>
                    You can find us on all social media such as:   <span className="fs-4">   Cinema Nerds </span></p>
                <br />
                <h3 className="abril-fatface-regular">Phone numbers:</h3>
                <p className="fs-5"><FaPhone></FaPhone>  Available for whatsapp:
                    <a className="fs-4" href="#">  +39 346 2581793</a> </p>
                <p className="fs-5"><FaPhone></FaPhone>  Landline:
                    <a className="fs-4" href="#">  010 967789674</a></p>
            </div>
        </section>
    )
}

