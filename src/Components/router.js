import React from 'react'
import ProductContainer  from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
import Login from './login'
import Inventory from './inventory';
import NotFound from './NotFound';
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
    },
    {
        path : '/Inventory',
        exact : false,
        main : ()=> <Inventory />
    },
    {
        path : '',
        exact : false,
        main : ()=> <NotFound />
    }
]

export default router;
