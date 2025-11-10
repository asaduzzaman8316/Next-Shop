import React from 'react'


import { useState } from 'react'

function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
        setError('')
        setSuccess('')
    }

    function validateEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email)
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!form.name || !form.email || !form.subject || !form.message) {
            setError('Please fill in all fields.')
            return
        }
        if (!validateEmail(form.email)) {
            setError('Please enter a valid email address.')
            return
        }
        setSuccess('Thank you for contacting us! We will get back to you soon.')
        setForm({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="max-w-xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow">
                <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                {success && <p className="text-green-600 text-sm text-center">{success}</p>}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default Contact
