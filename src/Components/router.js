import React from 'react'
import ProductContainer  from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import Login from './login'
const router =[ 
    {
        path : '/',
        exact : true,
        main : ({match})=> <ProductContainer match={match}/>
    },
    {
        path : '/Cart',
        exact : false,
        main : ()=> <CartContainer />
    },
    {
        path : '/Login',
        exact : false,
        main : ()=> <Login />
    }
]

export default router;
