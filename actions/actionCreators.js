import { NAME, MOBILE_NUMBER, BILL_NUMBER, MODEL_NUMBER, PROBLEM, SEEN_DAMAGES, RECEIVED_DATE, DELIVERY_DATE, BRAND, ESTIMATED_AMOUNT, FINAL_MESSAGE } from './types'

import { EMAIL_ID, ISLOGGED_IN, PASSWORD, DATA_UPDATED } from './types';

export function emailId(emailtext){
    return{
        type:EMAIL_ID,
        payload : emailtext
    }
}

export function dataUpdated(dataUpdationBool){
    return{
        type:DATA_UPDATED,
        payload : dataUpdationBool
    }
}

export function password(passText){
    return{
        type:PASSWORD,
        payload : passText
    }
}
export function isLoggedIn(isLoggedInBool){
    return{
        type:ISLOGGED_IN,
        payload : isLoggedInBool
    }
}

export function name(textName) {
    return {
        type: NAME,
        payload: textName,
    }
}
export function mobileNumber(textMobileNumber) {
    return {
        type: MOBILE_NUMBER,
        payload: textMobileNumber,
    }
}
export function billNumber(textBillNumber) {
    return {
        type: BILL_NUMBER,
        payload: textBillNumber,
    }
}
export function modelNumber(textModelNumber) {
    return {
        type: MODEL_NUMBER,
        payload: textModelNumber,
    }
}
export function problem(textProblem) {
    return {
        type: PROBLEM,
        payload: textProblem
    }
}
export function seenDamages(textSeenDamages) {
    return {
        type: SEEN_DAMAGES,
        payload: textSeenDamages
    }
}
export function receivedDate(textReceivedDate) {
    return {
        type: RECEIVED_DATE,
        payload: textReceivedDate
    }
}
export function deliveryDate(textDeliveryDate) {
    return {
        type: DELIVERY_DATE,
        payload: textDeliveryDate,
    }
}
export function brand(textBrand) {
    return {
        type: BRAND,
        payload: textBrand
    }
}
export function estimatedAmount(textEstimatedAmount) {
    return {
        type: ESTIMATED_AMOUNT,
        payload: textEstimatedAmount,
    }
}
export function finalMessage(textFinalMessage) {
    return {
        type: FINAL_MESSAGE,
        payload: textFinalMessage,
    }
}