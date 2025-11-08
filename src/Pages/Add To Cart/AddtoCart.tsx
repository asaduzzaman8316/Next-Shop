import useData from '../../Compomemts/Share/useData'
import type { RootState } from '../../Redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { RiDeleteBin6Line } from "react-icons/ri";
import RaringWithP from '../../Compomemts/Share/RaringWithP';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoExitOutline } from 'react-icons/io5';
import { confirmAlert } from 'react-confirm-alert';
import "react-confirm-alert/src/react-confirm-alert.css";
import { productIdEmpty, singleProductDelete } from '../../Cart/counterSlice';
import { FaArrowLeft } from 'react-icons/fa';

type ProductData = {
    id: number,
    name: string,
    image1: string,
    currentPrice: number,
    rating: number
}

type CartItem = ProductData & { quantity: number }

function AddtoCart() {
    const [animatin, setAnimation] = useState(false)
    const [btnText, setBtnText] = useState("Proced To CheckOut")
    const count = useSelector((state: RootState) => state.counter.value)
    const totalProductWithId = useSelector((state: RootState) => state.counter.productId) as number[]
    const { products } = useData() as { products: ProductData[] }
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [subTotal, setSubtotal] = useState(0)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const newCartData: CartItem[] = products
            .filter((p: ProductData) => totalProductWithId.includes(p.id))
            .map((p: ProductData) => ({
                ...p,
                quantity: totalProductWithId.filter(id => id === p.id).length
            }))
        setCartItems(newCartData)
    }, [products, totalProductWithId])

    useEffect(() => {
        const total = cartItems.reduce((acc, it) => acc + (Number(it.currentPrice) * Number(it.quantity || 0)), 0)
        setSubtotal(Number(total.toFixed(2)))
    }, [cartItems])

    function handleQuantityChange(id: number, updatedQuantity: number) {
        const qty = Number(updatedQuantity) || 1
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, qty) } : item
            )
        )
    }
    function deleteAll() {
        confirmAlert({
            title: "Confirm to Delete All",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => dispatch(productIdEmpty())
                },
                {
                    label: "No"
                }
            ]
        });
    }

    function deleteOne(id: number) {
        confirmAlert({
            title: "Confirm to Delete This One",
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => dispatch(singleProductDelete(id))
                },
                {
                    label: "No"
                }
            ]
        });
    }

    return (
        <div className='container mx-auto py-16 items-start gap-14 font-[quicksand] grid grid-cols-3'>
            <div className='col-span-2'>
                <h1 className='text-5xl text-gray-700 font-bold'>Your Cart</h1>
                <div className='flex justify-between items-center'>
                    <p className='py-5 font-semibold text-gray-500 tracking-tight'>
                        There are <span className='text-green-600'>{count}</span> products in your cart
                    </p>
                    <button
                        onClick={deleteAll}
                        className='flex cursor-pointer hover:text-red-400 items-center gap-2 font-bold text-gray-400'>
                        <RiDeleteBin6Line />
                        Clear Cart
                    </button>
                </div>

                <div className='border border-gray-200 rounded-md mt-5'>
                    <div className='flex justify-between items-center font-bold text-gray-700 p-4 bg-gray-100'>
                        <div className='flex items-center gap-4'>
                            <input type="checkbox" />
                            <p>Product</p>
                        </div>
                        <div className='flex items-center gap-24'>
                            <div className='flex items-center gap-4'>
                                <p>Unit Price</p>
                                <p>Quantity</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <p>Subtotal</p>
                                <p>Remove</p>
                            </div>
                        </div>
                    </div>

                    {cartItems.map((item) => (
                        <div key={item.id} className='border-b border-gray-200 flex items-center pr-8 justify-between'>
                            <div className='flex items-center px-4 py-6 w-140'>
                                <input type="checkbox" />
                                <div className='flex items-center gap-4'>
                                    <img
                                        className='w-30 border border-gray-200 rounded-2xl mx-4'
                                        src={item.image1}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h1
                                            onClick={() => navigate(`/shop/${item.id}`)}
                                            className='font-semibold hover:text-yellow-500 text-gray-700'>{item.name}</h1>
                                        <RaringWithP rating={item.rating} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-16'>
                                <div className='flex items-center gap-4'>
                                    <div className='text-2xl min-w-18 font-bold text-gray-500'>
                                        ${item.currentPrice.toFixed(2)}
                                    </div>
                                    <div>
                                        <input
                                            onChange={(e) =>
                                                handleQuantityChange(item.id, Number(e.target.value))
                                            }
                                            value={item.quantity}
                                            className='border max-w-20 min-w-20 border-green-600 outline-none font-semibold text-black px-4 cursor-pointer  py-3 rounded-md '
                                            type="number"
                                            min={1}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center gap-7'>
                                    <div className='text-2xl font-bold  min-w-30 text-center text-green-500'>
                                        ${(item.currentPrice * item.quantity).toFixed(2)}
                                    </div>
                                    <div
                                        onClick={() => deleteOne(item.id)}
                                    >
                                        <RiDeleteBin6Line className='cursor-pointer hover:text-red-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex  py-3 hover:bg-yellow-500 duration-500 rounded-md mt-8 font-semibold text-sm gap-2 bg-[#3BB77E] text-white w-50 items-center justify-center cursor-pointer'>
                        <FaArrowLeft />
                    <button
                    onClick={()=> navigate('/shop')}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>

            <div className='border space-y-5 border-gray-200 rounded-md mt-32 col-span-1 p-4'>
                <div className='border border-gray-200 rounded-md '>
                    <div className='flex  p-2 justify-between items-center'>
                        <p className='text-lg font-semibold text-gray-400'>Subtotal</p>
                        <p className='text-xl text-green-600 font-bold'>${subTotal.toFixed(2)}</p>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-md '>
                    <div className='flex  p-2 justify-between items-center'>
                        <p className='text-lg font-semibold text-gray-400'>Shipping</p>
                        <p className='text-xl  font-bold'>Free</p>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-md '>
                    <div className='flex  p-2 justify-between items-center'>
                        <p className='text-lg font-semibold text-gray-400'>Estimate for</p>
                        <p className='text-xl  font-bold'>7 days</p>
                    </div>
                </div>

                <div className='border border-gray-200 rounded-md '>
                    <div className='flex  p-2 justify-between items-center'>
                        <p className='text-lg font-semibold text-gray-400'>Total</p>
                        <p className='text-xl text-green-600 font-bold'>${subTotal.toFixed(2)}</p>
                    </div>
                </div>
                <div className='bg-[#3BB77E] h-10  py-2 flex items-center justify-center text-white  font-semibold rounded-md gap-2 hover:bg-yellow-500 duration-500'>
                    <button
                        onClick={() => (
                            setBtnText(''),
                            setAnimation(true),
                            setTimeout(() => {
                                setBtnText("Proced to CheckOut")
                                setAnimation(false)
                            }, 1000)
                        )}
                        className='peer'>{btnText} </button>
                    <div className={`-translate-x-[310px] ${animatin && 'translate-x-[310px]'} duration-500 `}>
                        <IoExitOutline />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddtoCart
