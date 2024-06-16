import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const newErrors = {};

        if (!name) {
            newErrors.name = 'Name is required';
        }

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!message) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            // Form is valid, handle form submission
            console.log('Form submitted:', { name, email, message });
        } else {
            // Set errors
            setErrors(formErrors);
        }
    };
    const [formVisible, setFormVisible] = useState(true);
    const toggleForm = () => {
        setFormVisible(!formVisible);
      };
    return (
        // <div className="flex items-center justify-center h-[80vh] absolute left-[33.33vw] top-10 bg-nav-img2">
        //     <div className="container p-4 w-96">
                <form onSubmit={handleSubmit} id="displayContact" className="shadow-md rounded-xl px-4 pt-3 pb-8 mb-4 h-[80vh] absolute left-[36vw] top-10 bg-nav-img2">
                    <div className="mb-4 block">
                        <label className="inline-block text-gray-700 text-sm font-bold mb-2 m-auto mr-[40px]" htmlFor="name">
                            Name :
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                    </div>
                    <div className="mb-4 block">
                        <label className="inline-block text-gray-700 text-sm font-bold mb-2 m-auto mr-[40px]" htmlFor="email">
                            Email :
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="shadow appearance-none border rounded w-full h-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[120px] rounded focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                        <br/>
                        <button
                            className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[120px] rounded focus:outline-none focus:shadow-outline"                        
                        >
                            Back
                        </button>
                    </div>
                </form>
        //     </div>
        // </div>
    );
}

export default ContactForm;
