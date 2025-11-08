import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  productId:number[]
}

const initialState: CounterState = {
  value: 0,
  productId:[]
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
    singleProductDelete:(state, action:PayloadAction<number>)=>{
      const filterProduct = state.productId.filter(item => item !== action.payload)
      state.productId.length =0;
      state.value-=1;
      state.productId.push(...filterProduct);
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, productIdEmpty,singleProductDelete } = counterSlice.actions

export default counterSlice.reducer