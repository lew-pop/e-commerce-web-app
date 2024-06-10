import { createStore, combineReducers, applyMiddleware } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk, { withExtraArgument } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
} from '../reducers/productReducers'

import { cartReducer } from '../reducers/cartReducers'

import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from '../reducers/userReducers'

import {
    orderCreateReducer,
    orderDetailsReducer,
    orderPayReducer,
    orderListMyReducer,
    orderListReducer,
    orderDeliverReducer,
} from '../reducers/orderReducers'

import currencyReducer from "./slices/currency-slice";
import wishlistReducer from "./slices/wishlist-slice";

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,

    currency: currencyReducer,
    wishlist: wishlistReducer
})
const currencyNameFromStorage = localStorage.getItem('currencyName') ?
    JSON.parse(localStorage.getItem('currencyName')) : {}

const wishListItemsFromStorage = localStorage.getItem('wishlistItems') ?
    JSON.parse(localStorage.getItem('wishlistItems')) : []

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
    wishlist: { wishlistItems: wishListItemsFromStorage },
    currency: { currencyName: currencyNameFromStorage }
}






const store = createStore(rootReducer, applyMiddleware(withExtraArgument(initialState)))

export default store