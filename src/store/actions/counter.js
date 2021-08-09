import * as actionTypes from './actionTypes';

export const incrementHandler = (id) => {
    return {
        type: actionTypes.INCREMENT,
        id:id
    }
}
export const decrementHandler = (id) => {
    return {
        type: actionTypes.DECREMENT,
        id:id
    }
}
export const addRecordHandler = (name,price)=>{
    return {
        type: actionTypes.ADD_RECORD,
        price : price ,
        name : name
    }
}

