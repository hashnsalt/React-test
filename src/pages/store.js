import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: 'user',
  initialState: {name: '홍길동', memberYear: 0},
  reducers: {
    changeName(state) {
      state.name = '이순신'
    },
    changeYear(state, action) {
      state.memberYear += action.payload
    },
    // changeYearMinus(state) {
    //   state.memberYear -=1
    // } 
  }
})

// const cart = createSlice({})

export const {changeName, changeYear} = user.actions

const cart = createSlice({
  name: 'cart',
  initialState: [
    {id: 'best-01', title: '캠핑어묵탕', count: 1},
    {id: 'best-02', title: '어묵탕모음어묵 플러스', count: 1}
  ],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((foundId) => {return foundId.id === action.payload})
      state[index].count++   
    },
    subCount(state, action) {
      const index = state.findIndex((foundId) => {return foundId.id === action.payload})
      if( state[index].count > 1 ) {
        state[index].count--
      }
    },
    deleteItem(state, action) {
      const index = state.findIndex((foundId) => {return foundId.id === action.payload})
      state.splice(index, 1)
    },
    addItem(state, action) {
      const index = state.findIndex((foundId) => {return foundId.id === action.payload.id})
      if(index > -1) {
        // -1보다 크다는 말은 배열의 인덱스가 0번부터 시작을 하기 때문에 -1보다 크다는 말은 아이템이 존재한다는 말임
        state[index].count++
      } else{
        //그렇지 않다면
        state.push(action.payload);
      }
      // state.push(action.payload);
    }
  }
})

export const {addCount,subCount, deleteItem, addItem} = cart.actions

export default configureStore ({
  reducer: {
    user: user.reducer,
    cart: cart.reducer
  }
})