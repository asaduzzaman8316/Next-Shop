import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  productId:number[],
  categoryId:number,
  wishlist:number,
  wishlistProductId:number[]
}

const initialState: CounterState = {
  value: 0,
  productId:[],
  categoryId:0,
  wishlist:0,
  wishlistProductId:[]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += 1
      state.productId.push(action.payload)
    },
    decrement: (state) => {
      state.value -= 1
    },
    productIdEmpty: (state) => {
      state.productId.length =0;
      state.value=0;
    },
    singleProductDelete:(state, action:PayloadAction<{id: number, quantity: number}>)=>{
      const filterProduct = state.productId.filter(item => item !== action.payload.id)
      state.productId.length = 0;
      state.value -= action.payload.quantity;
      state.productId.push(...filterProduct);
    },
      setCategoryId:(state, action:PayloadAction<number>)=>{
        state.categoryId = action.payload
      },
      setWishlist:(state, action:PayloadAction<number>)=>{
        const wdata = state.wishlistProductId.find((item) => item===  action.payload)
        if(wdata === undefined){
          state.wishlist += 1
          state.wishlistProductId.push(action.payload)
        }
      }
      ,removeWishlist:(state, action:PayloadAction<number>)=>{
        const removedid = state.wishlistProductId.filter(i => i !== action.payload)
        state.wishlistProductId.length =0;
        state.wishlistProductId.push(...removedid)
        state.wishlist = state.wishlistProductId.length
      }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, productIdEmpty,singleProductDelete, setCategoryId, setWishlist, removeWishlist } = counterSlice.actions

export default counterSlice.reducer