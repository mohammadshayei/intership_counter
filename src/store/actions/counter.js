import * as actionTypes from './actionTypes';

export const incrementHandler = (id) => {
    return {
        type: actionTypes.INCREMENT,
        id:id
    }
}
