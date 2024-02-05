
import CheckoutForm from "@/components/forms/CheckoutForm";
import CartTable from "@/components/layers/CartTable";
import Heading from "@/components/smallUI/Heading";

const Checkout = () => {

    return (
        <div className="max-w-7xl mx-auto">
            <Heading >
                Checkout Section
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                <div className="col-span-1">
                    <CartTable />
                </div>
                <div className="col-span-1">
                    <CheckoutForm />
                </div>
            </div>


        </div>
    );
};

export default Checkout