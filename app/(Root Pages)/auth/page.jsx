import LoginRegsiterForm from '@/app/components/forms/LoginRegsiterForm'
import { companyInfo } from '@/utils/contants'
// future work : meta data set
const Login = () => {
  // console.log("login page")
  return (
    <div className="container mx-auto min-h-[80vh] flex items-center justify-center">
      <div className="max-w-xl w-full">
        <div className="w-full shadow-md bg-front px-6 py-12 lg:px-8 my-10">
          <LoginRegsiterForm />
        </div>
      </div>
    </div>

  )
}

export default Login