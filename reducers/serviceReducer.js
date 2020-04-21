import { NAME, MOBILE_NUMBER, BILL_NUMBER, MODEL_NUMBER, PROBLEM, SEEN_DAMAGES, RECEIVED_DATE, DELIVERY_DATE, BRAND, ESTIMATED_AMOUNT } from '../actions/types'

import { EMAIL_ID, PASSWORD, ISLOGGED_IN, DATA_UPDATED} from '../actions/types'

const initialState = { 
    name : '',
    mobileNumber: '',
    modelNumber :'',
    billNumber :'',
    problem : '',
    seenDamages : '',
    receivedDate :'',
    deliveryDate :'',
    brand :'',
    estimatedAmount : '',
    finalMessage :'',
    isLoggedIn : false,
    emailId : '',
    password : '',
    dataUpdated : false,
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME: {
            return {
                ...state,
                name: action.payload
            };
        }
        case DATA_UPDATED : {
            return{
                ...state, 
                dataUpdated : action.payload
            }
        }
        case MOBILE_NUMBER: {
            return {
                ...state,
                mobileNumber: action.payload
            };
        }
        case EMAIL_ID: {
            return {
                ...state,
                emailId: action.payload
            };
        }
        case PASSWORD: {
            return {
                ...state,
                password: action.payload
            };
        }
        case ISLOGGED_IN: {
            return {
                ...state,
                isLoggedIn: action.payload
            };
        }
        case BILL_NUMBER: {
            return {
                ...state,
                billNumber: action.payload
            };
        }
        case MODEL_NUMBER: {
            return {
                ...state,
                modelNumber: action.payload
            };
        }
        case PROBLEM: {
            return {
                ...state,
                problem: action.payload
            };
        }
        case SEEN_DAMAGES: {
            return {
                ...state,
                seenDamages: action.payload
            };
        }
        case RECEIVED_DATE: {
            return {
                ...state,
                receivedDate: action.payload
            };
        }
        case DELIVERY_DATE: {
            return {
                ...state,
                deliveryDate: action.payload
            };
        }
        case BRAND: {
            return {
                ...state,
                brand: action.payload
            };
        }
        case ESTIMATED_AMOUNT: {
            return {
                ...state,
                estimatedAmount: action.payload
            };
        }
        default:
            return state;
    }
}

export default serviceReducer;