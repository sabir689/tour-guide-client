import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const UniqueFeature2 = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6rq4z3m', 'template_2ygjxje', form.current, '9HUU9vp6JakC2eTcr')
            .then((result) => {
                console.log(result.text);
                
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your message has been sent successfully.',
                }).then(() => {
                    
                    window.location.reload();
                  });
            })
            .catch((error) => {
                console.log(error.text);
            
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Oops... Something went wrong!',
                });
            });
    };


    return (
        <Fade>
            <div className=" rounded-box py-16 bg-green-300 p-8">
                <h2 className='text-center text-white font-bold text-4xl my-10'>Join As A <span className='text-[#804dee]'>Tour Guide</span></h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex gap-4 mb-4">
                        <div className="w-1/2">
                            <label className="block text-2xl mb-2 text-white">
                                Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name='from_name'
                                className="w-full border-gray-300 border p-2 rounded "
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="contactNumber" className="block text-2xl mb-2 text-white">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                id="contactNumber" className="w-full border-gray-300 border p-2 rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className="w-1/2">
                            <label className="block text-2xl mb-2 text-white">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name='from_email'
                                className="w-full border-gray-300 border p-2 rounded"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="subject" className="block text-2xl mb-2 text-white">
                                Email Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full  border-gray-300 border p-2 rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="my-4">
                        <label htmlFor="message" className="block text-2xl mb-2 text-white">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name='message'
                            className="w-full border-gray-300 border p-2 rounded"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <div className='text-center'>
                        <button type='submit'>
                            <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#804dee] absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-400 ease-in-out group-hover:text-white">Send Message</span>
                            </a>
                        </button>
                    </div>
                </form>
            </div>
        </Fade>
    );
};

export default UniqueFeature2;
