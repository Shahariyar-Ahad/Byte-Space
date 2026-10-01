
import { Link } from 'react-router';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm(); 

    const handleLogin = (data) => {
        console.log(data);
    }
    return (
        <div>
    <p className="text-sm text-blue-600">Sign In</p>
    <h2 className="mt-1 text-3xl font-bold leading-tight">Welcome Back</h2>

    <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
      <div className="flex flex-col gap-2">
        <label className="text-xs">Email</label>
        <input
          type="email"
          {...register('email', { required: true })}
          className="input input-bordered w-full bg-gray-50"
          placeholder="designer@example.com"
        /> 
        {
            errors.email && <span className="text-red-500 text-xs">Email is required</span>
        }
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs">Password</label>
        <input
          type="password"
          {...register('password', { required: true })}
          className="input input-bordered w-full bg-gray-50"
          placeholder="********"
        /> 
        {
            errors.password && <span className="text-red-500 text-xs">Password is required</span>
        }
      </div>

      <div className="flex justify-end">
        <button className="btn rounded-full border-none bg-[#d4f53c] px-6 text-black">
          Sign In
        </button>
      </div>
    </form>

    {/* or divider */}
    <div className="mt-12 flex items-center gap-3 text-xs text-gray-500">
      <span className="h-px flex-1 bg-gray-200" />
      or
      <span className="h-px flex-1 bg-gray-200" />
    </div>

    {/* social buttons */}
    <div className="mt-8 flex justify-center gap-4">
      <button type="button" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 text-2xl">
        <FaFacebook />
      </button>
      <button type="button" className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 text-2xl">
        <FaGoogle />
      </button>
    </div>

    <p className="mt-12 text-center text-xs text-gray-500">
      New user?{' '}
      <Link
       to="/register" className="text-blue-600">Create an account</Link>
    </p>
  </div> 
    );
};

export default Login;