import * as actionTypes from './actionTypes';

export const incrementHandler = (id) => {
    console.log('action counter -> increment handler');

    return {
        type: actionTypes.INCREMENT,
        id:id
    }
}
export const decrementHandler = (id) => {
    console.log('action counter -> decrement handler');

    return {
        type: actionTypes.DECREMENT,
        id:id
    }
}
