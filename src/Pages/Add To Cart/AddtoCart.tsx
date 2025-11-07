import useData from '../../Compomemts/Share/useData'
import type { RootState } from '../../Redux/store'
import { useSelector } from 'react-redux'
import { RiDeleteBin6Line } from "react-icons/ri";
import RaringWithP from '../../Compomemts/Share/RaringWithP';
import { useEffect, useState } from 'react';

type ProductData = {
    id: number,
    name: string,
    image1: string,
    currentPrice: number,
    rating: number
}

type CartItem = ProductData & { quantity: number }

function AddtoCart() {
    const count = useSelector((state: RootState) => state.counter.value)
    const totalProductWithId = useSelector((state: RootState) => state.counter.productId) as number[]

    const { products } = useData() as { products: ProductData[] }
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    useEffect(() => {
        const newCartData: CartItem[] = products
            .filter((p: ProductData) => totalProductWithId.includes(p.id))
            .map((p: ProductData) => ({
                ...p,
                quantity: totalProductWithId.filter(id => id === p.id).length
            }))
        setCartItems(newCartData)
    }, [products, totalProductWithId])

    function handleQuantityChange(id: number, updatedQuantity: number) {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: updatedQuantity } : item
            )
        )
    }

    return (
        <div className='container mx-auto py-16 gap-14 font-[quicksand] grid grid-cols-3'>
            <div className='col-span-2'>
                <h1 className='text-5xl text-gray-700 font-bold'>Your Cart</h1>
                <div className='flex justify-between items-center'>
                    <p className='py-5 font-semibold text-gray-500 tracking-tight'>
                        There are <span className='text-green-600'>{count}</span> products in your cart
                    </p>
                    <button className='flex cursor-pointer hover:text-red-400 items-center gap-2 font-bold text-gray-400'>
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

                    {cartItems.map((item, idx) => (
                        <div key={idx} className='border-b border-gray-200 flex items-center pr-8 justify-between'>
                            <div className='flex items-center px-4 py-6 w-140'>
                                <input type="checkbox" />
                                <div className='flex items-center gap-4'>
                                    <img
                                        className='w-30 border border-gray-200 rounded-2xl mx-4'
                                        src={item.image1}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h1 className='font-semibold text-gray-700'>{item.name}</h1>
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
                                    <div>
                                        <RiDeleteBin6Line className='cursor-pointer hover:text-red-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='border h-screen col-span-1'>
            </div>
        </div>
    )
}

export default AddtoCart
