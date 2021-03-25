import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price*100;
    const publicablekey = 'pk_test_51IYUgGSA3GY7TjMxaNTy2NONPCZyHXtD90Al9B9yTf1L4PDLMRynUwXddm7OiJ0ibeIYvT1RdUJpnqflNSplgqY100pwaNAjRP';
    
    const onToken = (token) => {
        console.log(token);
        alert('login successfull');
    }
    return ( 
        <StripeCheckout 
            label='Pay now'
            name='crown clothing ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            discription={`Your total price $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publicablekey}
        />
    );
}
 
export default StripeCheckoutButton;