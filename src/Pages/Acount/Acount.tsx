
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import type { RootState } from '../../Redux/store'
import { setLogout } from '../../Cart/counterSlice'

function Acount() {
    const navigate = useNavigate()
    const isLogin = useSelector((state: RootState) => state.counter.isLogin)
    const dispatch = useDispatch()
    return (
        <div className='container mx-auto py-16 text-center'>
            {
                isLogin === false ? <div>
                    <div className='container mx-auto py-24 text-center' >
                        For
                        <p
                            onClick={() => navigate('/account/login')}
                            className='text-3xl text-green-600 font-semibold cursor-pointer font-[quicksand]'
                        >
                            LogIn | Sing Up</p >
                    </div >
                </div> : 
                <div >
                        <p>You are in your Account</p>
                        <button 
                        onClick={()=>dispatch(setLogout())}
                        className='bg-red-600 duration-500 hover:-translate-y-1 mt-5 px-6 py-2 rounded-md text-white border w-30 cursor-pointer'>Log Out</button>
                </div>
            }
        </div>
    )
}

export default Acount
