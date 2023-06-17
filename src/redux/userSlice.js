import {createSlice} from "@reduxjs/toolkit"

const initialState={
    authentic:false,
   
}
export const userSlice=createSlice({
  name:"users",
    initialState,
    reducers:{
        loginRedux:(state,action)=>{
            console.log(action.payload.data)
           
            state.authentic=action.payload.authentic

        }
    }
})
export const {loginRedux}=userSlice.actions;
export default userSlice.reducer;