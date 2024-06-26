import React from "react";
import * as types from "./action_types";

const initialState={
    users:[],
    user:{},
    loading:false
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_USERS:
            return {
                ...state,
                users:action.payload,
                loading:false
            }
        default:
            return state;

    }
}
export default userReducer;