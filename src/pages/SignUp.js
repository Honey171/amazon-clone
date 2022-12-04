import React from 'react';
import { useAuth } from '../hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Error from '../components/Error';

function SignUp() {
  const { signUp, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password, data.name);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="mx-auto flex flex-col space-y-3 w-[400px] items-center text-lg text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        {error ? <Error /> : ''}
        <p className="self-start text-2xl ">Sign Up</p>
        <p className="self-start text-sm">
          For name input you can write at least 2 character up to 15 you can't
          use special characters like: !@$ <br /> Minimum password length must
          be at least six characters
        </p>
        <label className="flex flex-col space-y-1">
          <p>Email</p>
          <input
            type="email"
            className="outline-none rounded-lg border-2 border-opacity-0 focus:border-teal-500 focus:border-opacity-100 text-black"
            {...register('email', { required: true })}
          />
          {errors?.email?.type === 'required' ? (
            <p className="text-red-500 text-base">Please enter a valid email</p>
          ) : (
            ''
          )}
        </label>
        <label className="flex flex-col space-y-1">
          <p>Password</p>
          <input
            type="password"
            className="outline-none rounded-lg border-2 border-opacity-0 focus:border-teal-500 focus:border-opacity-100 text-black"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors?.password?.type === 'required' ||
          errors?.password?.type === 'minLength' ? (
            <p className="text-red-500 text-base">
              Please enter a valid password
            </p>
          ) : (
            ''
          )}
        </label>
        <label className="flex flex-col space-y-1">
          <p>Your name</p>
          <input
            type="text"
            className="outline-none rounded-lg border-2 border-opacity-0 focus:border-teal-500 focus:border-opacity-100 text-black"
            {...register('name', {
              pattern: /^[A-Za-z]+$/i,
              required: true,
              minLength: 2,
              maxLength: 15,
            })}
          />
          {errors?.name?.type === 'pattern' ||
          errors?.name?.type === 'required' ||
          errors?.name?.type === 'maxLength' ||
          errors?.name?.type === 'minLength' ? (
            <p className="text-red-500 text-base">Please enter a valid name</p>
          ) : (
            ''
          )}
        </label>
        <div className="pt-2">
          <button className="bg-[#F3D078] px-16 text-black font-medium rounded-lg">
            Sign up
          </button>
        </div>
        <p className="text-base">
          Have an account?{' '}
          <Link
            to="/signIn"
            className="text-teal-500 text-lg"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
