import LoginRegsiterForm from '@/components/forms/LoginRegsiterForm'
import { companyInfo } from '@/utils/contants'
import Link from 'next/link'
import React from 'react'
// future work : meta data set
const Login = () => {
  return (
    <div className="flex min-h-[80vh] w-full border flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-12 w-auto" src={companyInfo?.logo.src} alt={companyInfo?.name} />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginRegsiterForm />
      </div>
    </div>
  )
}

export default Login