"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import Input from "../form-elements/Input"
import Link from "next/link"

const LoginRegsiterForm = () => {
    // use form 
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const onSubmit = (data) => {
        setLoading(true)
        try {
            console.log(data)
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full px-5 py-2" method="POST">
                {
                    !isLogin && <Input
                        label="Your Name"
                        name="name"
                        register={register("name", { required: isLogin ? false : "Name is required" })}
                        errors={errors}
                        required={!isLogin}
                    />
                }
                <Input
                    label="Your Email"
                    name="email"
                    register={register("email", { required: "Email is required" })}
                    errors={errors}
                    required
                />
                <Input
                    label="Your Password"
                    name="password"
                    register={register("password", { required: "Password is required" })}
                    errors={errors}
                    required
                    type="password"
                />
                {
                    !isLogin &&
                    <Input
                        label="Confirm Password"
                        name="confirmPassword"
                        register={register("confirmPassword", {
                            required: "Confirm password is required", validate: {
                                validateConfirmPassword: (value) => value === register("password").value ? null : "Passwords do not match"
                            }
                        })}
                        errors={errors}
                        required={!isLogin}
                        type="password"
                    />
                }

            </form>
            {
                isLogin
                    ? <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <span onClick={() => setIsLogin(false)} className="font-semibold leading-6 text-link ml-1">Register</span>
                    </p>
                    : <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?
                        <span onClick={() => setIsLogin(true)} className="ml-1 font-semibold leading-6 text-link">Sign In</span>
                    </p>
            }

        </>
    )
}

export default LoginRegsiterForm