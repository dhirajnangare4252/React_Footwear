import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  products: [],
  totalAmount:0
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {

        let product = action.payload
        let findProduct = state.products.find((item)=> item.id === product.id)

        if(findProduct){
            findProduct.quantity +=1
        }
        else{

            state.products.push(action.payload)
        }
    },
    removeFromCart:(state,action)=>{

        let productID =action.payload
        state.products =  state.products.filter((item)=> item.id != productID)
    },

    incrementQuantity:(state,action)=>{

      let productId = action.payload

      let findProduct = state.products.find((item)=> item.id ===productId)
      if(productId){
        findProduct.quantity +=1
      }
    },

    decrementQuantity : ((state,action)=>{
      let productId = action.payload

      let findProduct = state.products.find((item)=> item.id===productId)
      if(productId && findProduct.quantity>1)
      {
        findProduct.quantity -=1
      }
    }),

    setTotalAmount:((state,action)=>{
      const amount = action.payload
      state.totalAmount = amount
    })
 
  },
})

export const { addToCart, removeFromCart, incrementQuantity ,decrementQuantity,setTotalAmount} = cartSlice.actions

export default cartSlice.reducer