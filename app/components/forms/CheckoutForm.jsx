"use client"
import { useForm } from "react-hook-form";
import Button from "../smallUI/Button";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createNewOrder } from "@/utils/CRUD/orders";
import Input from "../form-elements/Input";

const CheckoutForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {
        cartItems,
    } = useSelector(state => state.cart)
    const onSubmit = async (data) => {
        // Add logic to handle the checkout data
        data.purchasedProducts = cartItems.map(({ title, slug, thumbnail, discountPrice, regularPrice, quantity }) => ({
            title,
            slug,
            thumbnail,
            price: (discountPrice ? discountPrice : regularPrice) * quantity,
            quantity
        }))
        data.userId = "My_USER_ID"
        const result = await createNewOrder(data)
        if (result.success) {
            toast.success("Order Confirmed for " + result.data.firstName)
            console.log(result.data)
        }
        else {
            toast.success("Something Went Wrong")

        }
    };
    return (
        <div className="w-full p-6 bg-front shadow-md rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        type="text"
                        label={"Your Firstname"}
                        name="firstName"
                        register={register("firstName", { required: 'First name is required' })}
                        errors={errors}
                        required
                    />
                    <Input
                        type="text"
                        label={"Your Lastname"}
                        name="lastName"
                        register={register("lastName", { required: 'Last name is required' })}
                        errors={errors}
                        required
                    />
                </div>

                {/* create input component for email , card, cvv, expiry
         */}
                <Input
                    type="email"
                    label={"Your Email"}
                    name="email"
                    register={register("email", { required: 'Email is required' })}
                    errors={errors}
                    required
                />
                <Input
                    type="text"
                    label={"Your Card Number"}
                    name="cardNumber"
                    register={register("cardNumber", { required: 'Card number is required' })}
                    errors={errors}
                    required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

                    <Input
                        type="text"
                        label={"Card Expiry Date"}
                        name="expiryDate"
                        register={register("expiryDate", { required: 'Card Expiry Date is required' })}
                        errors={errors}
                        required
                    />
                    <Input
                        type="text"
                        label={"Card Expiry Year"}
                        name="expiryYear"
                        register={register("expiryYear", { required: 'Card Expiry Year is required' })}
                        errors={errors}
                        required
                    />
                    <Input
                        type="text"
                        label={"Your CVV"}
                        name="cvv"
                        register={register("cvv", { required: 'CVV is required' })}
                        errors={errors}
                        required
                    />
                </div>

                <Button
                    type="submit"
                >
                    Place Order
                </Button>
            </form>
        </div>

    )
}

export default CheckoutForm