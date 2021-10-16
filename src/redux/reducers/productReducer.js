import { ActionTypes } from '../constance/action-types';

const initialState = {
    products: [
        {
            is: 1,
            title: 'Ilya',
            category: 'programmer',
        },
    ],
};

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
};
