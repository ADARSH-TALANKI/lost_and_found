import React from 'react';
import { useState } from 'react';
const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl mb-4">Register</h2>
            <form className="flex flex-col gap-2">
                <input name="name" type="text" placeholder="Name" onChange={handleChange} className="p-2 border rounded" />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} className="p-2 border rounded" />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-2 border rounded" />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
            </form>
        </div>
    );
};
export default Register;