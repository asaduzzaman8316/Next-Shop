import React, { useState } from 'react'
import app, { db } from '../utils/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { setIslogin } from '../Cart/counterSlice'
import { useDispatch } from 'react-redux'


function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [loginEmail, setLoginEmail] = useState('')
    const [LoginPassword, setLoginPassword] = useState('')
    const navigaet = useNavigate()
    const dispatch = useDispatch()
    const [btnForLoign, setBtnForLoing] = useState(true)

    //for sign up
    async function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isSubmitting) return
        setIsSubmitting(true)

        if (name.trim() === '' || email.trim() === '' || password === '') {
            toast.warn('Please fill all information')
            setIsSubmitting(false)
            return
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.warn('Please enter a valid email')
            setIsSubmitting(false)
            return
        }

        const auth = getAuth(app)

        try {
            const userCred = await createUserWithEmailAndPassword(auth, email.trim(), password)
            const user = userCred.user


            const usersCollection = collection(db, 'users')
            await addDoc(usersCollection, {
                uid: user.uid,
                username: name.trim(),
                email: email.trim(),
                createdAt: new Date()
            })

            toast.success('Account created successfully')
            setName('')
            setEmail('')
            setPassword('')
        } catch (err: unknown) {
            console.error('Failed to create account', err)
            const message = err instanceof Error ? err.message : String(err)
            toast.error(message || 'Failed to create account')
        } finally {
            setIsSubmitting(false)
        }
    }

    // for login 
    function handlerLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isSubmitting) return
        setIsSubmitting(true)

        if (loginEmail.trim() === '' || LoginPassword === '') {
            toast.warn('Please fill all information login')
            setIsSubmitting(false)
            return
        }

        if (!/\S+@\S+\.\S+/.test(loginEmail)) {
            toast.warn('Please enter a valid email')
            setIsSubmitting(false)
            return
        }
        const auth = getAuth(app)
        try {
            signInWithEmailAndPassword(auth, loginEmail.trim(), LoginPassword)
            toast.success('Loign successfully')
            dispatch(setIslogin())
            navigaet('/account')
        } catch (err: unknown) {
            console.error('Failed to login account', err)
            const message = err instanceof Error ? err.message : String(err)
            toast.error(message || 'Failed to login account')
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <>
            <div className={`container mx-auto py-24 ${btnForLoign ? 'hidden' : 'block'}`}>
                <form onSubmit={handlerSubmit} className='flex flex-col justify-center items-center '>
                    <h1 className='text-3xl text-center py-3 text-gray-700 font-[quicksand] font-bold '>Sing Up</h1>
                    <div className='flex flex-col gap-8 py-8 border p-4 border-gray-200 rounded-md'>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className='border w-100 px-4 py-2 text-lg font-semibold font-[quicksand] rounded-md border-gray-200 outline-none bg-transparent' type="text" placeholder='Your Name' />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='border w-100 px-4 py-2 text-lg font-semibold font-[quicksand] rounded-md border-gray-200 outline-none bg-transparent' type="email" placeholder='Your Email' />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='border w-100 px-4 py-2 text-lg font-semibold font-[quicksand] rounded-md border-gray-200 outline-none bg-transparent' type="password" placeholder='Password' />
                        <p
                            onClick={() => setBtnForLoing(true)}
                            className='text-start leading-0 px-1 text-green-500 cursor-pointer'>Login</p>
                    </div>
                    <button
                        disabled={isSubmitting}
                        type='submit' className='px-6 py-2 bg-green-600 text-xl text-white font-[quicksand] font-semibold hover:-translate-y-1 duration-500 hover:bg-green-400 rounded-md my-6 disabled:opacity-50'>
                        {isSubmitting ? 'Creating...' : 'Submit'}
                    </button>
                </form >
            </div >


            {/* this is for login  */}
            <div  className={`container mx-auto py-24 ${btnForLoign ? 'block' : 'hidden'}`
            }>
                <form onSubmit={handlerLogin} className='flex flex-col justify-center items-center '>
                    <h1 className='text-3xl text-center py-3 text-gray-700 font-[quicksand] font-bold '>Login</h1>
                    <div className='flex flex-col gap-8 py-8 border p-4 border-gray-200 rounded-md'>

                        <input
                            onChange={(e) => setLoginEmail(e.target.value)}
                            value={loginEmail}
                            className='border w-100 px-4 py-2 text-lg font-semibold font-[quicksand] rounded-md border-gray-200 outline-none bg-transparent' type="email" placeholder='Your Email' />
                        <input
                            onChange={(e) => setLoginPassword(e.target.value)}
                            value={LoginPassword}
                            className='border w-100 px-4 py-2 text-lg font-semibold font-[quicksand] rounded-md border-gray-200 outline-none bg-transparent' type="password" placeholder='Password' />
                        <p
                            onClick={() => setBtnForLoing(false)}
                            className='text-start leading-0 px-1 text-green-500 cursor-pointer'>Create Account</p>
                    </div>
                    <button
                        disabled={isSubmitting}
                        type='submit' className='px-6 py-2 bg-green-600 text-xl text-white font-[quicksand] font-semibold hover:-translate-y-1 duration-500 hover:bg-green-400 rounded-md my-6 disabled:opacity-50'>
                        {isSubmitting ? 'Checking...' : 'Login'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default SignUp
