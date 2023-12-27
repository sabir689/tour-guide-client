import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Components/SectionTitle/Sectiontitle";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51OFVIKJytP2Mj9vWLytF5btR38Hl5wiivsYzpIquTzdtdv5zBrVhH1M2xHCDVtrpYiJvRZ7MskTz3xGBjazMFGm700d7lNUbwA');

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat" />
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
