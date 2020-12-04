import React from 'react'
import ProductContainer  from '../containers/ProductContainer';
import CartContainer from '../containers/CartContainer';
const router =[ 
    {
        path : '/',
        exact : true,
        main : (match)=> <ProductContainer match={match}/>
    },
    {
        path : '/Cart',
        exact : false,
        main : ()=> <CartContainer />
    }
]

export default router;
