import React, { useState } from 'react';

const Cart = () => {

    return (<div className='cartContainer flex flex-row'>
        <div className='leftPanel flex flex-col w-[500px] bg-slate-200'>
            <div className='itemContainer flex flex-col'>
                <section className='w-[100px] h-[100px] bg-slate-300 text-center'>Image</section>
                <div className='itemContainer flex flex-col'>
                    <h2>Subtotal:</h2>
                    <h2>Shipping:</h2>
                    <h2>Taxes:</h2>
                    <h2>Total:</h2>
                </div>
            </div>
        </div>
        <div className='rightPanel flex flex-col bg-slate-500'>

        </div>

    </div>
    )

};

export default Cart;