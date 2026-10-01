
import { useForm } from 'react-hook-form';

const Register = () => { 
    const {register, handleSubmit, formState: { errors }} = useForm(); 
    const handleRegister = (data) => {
        console.log(data);
    }
    return (
        <div >
    <p className="text-sm text-blue-600">Create an Account</p>
    <h2 className="mt-1 text-3xl font-bold leading-tight">Welcome to<br />ByteSpace</h2>

    <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
  <div className="flex flex-col gap-2">
    <label className="text-xs">Full Name</label>
    <input
      {...register('fullName', { required: true })}
      className="input input-bordered w-full bg-gray-50"
      placeholder="Jamie Davis"
    /> 
    {
        errors.fullName && <span className="text-red-500 text-xs">Full Name is required</span>
    }
  </div>

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
    <button className="btn rounded-full border-none bg-[#d4f53c] px-6 text-black">Continue</button>
  </div>
</form>

    <p className="mt-12 text-center text-xs">
      Already have an account? <a href="/login" className="text-blue-600">Login</a>
    </p>
  </div>
    );
};

export default Register;