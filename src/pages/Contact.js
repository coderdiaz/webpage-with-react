import React from 'react';

const Contact = () => (
    <>
        <div className="container">
            <h1>Contact</h1>
            <label>Email</label>
            <input name="email" type="email" />
            <label>Password</label>
            <input name="password" type="password" />
            <button>Enviar</button>
        </div>
    </>
);

export default Contact;