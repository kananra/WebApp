import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/store/configureStore";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { setBasket } from "../basket/basketSlice";
import { error } from "console";
import LoadingComponent from "../../app/layout/LoadingComponent";

const stripePromise=loadStripe('pk_test_51NreIEFfhkJ5CGqI0hsOKM181flGRBaoN30D4JU7Ipg0HSbW11HCrwNget5BmMR4xychVGXxK1Aj07alFYuAveVw00SquEqefk')


export default function CheckoutWrapper(){
   const dispatch=useAppDispatch();
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
    agent.Payments.createPaymentIntent()
         .then(basket=>dispatch(setBasket(basket)))
         .catch(error=>console.log(error))
         .finally(()=>setLoading(false))
   },[dispatch]);

    if(loading) return <LoadingComponent message="Loading checkout..."/>

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage/>
        </Elements>
    )
}