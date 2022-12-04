import React from 'react';
import { useAuth } from '../hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Error from '../components/Error';

function SignIn() {
  const { signIn, error, user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password, data.name);
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
        <p className="self-start text-2xl ">Sign In</p>
        <label className="flex flex-col space-y-1">
          <p>Email</p>
          <input
            type="email"
            className="outline-none rounded-lg border-2 border-opacity-0 focus:border-red-500 focus:border-opacity-100 text-black"
            {...register('email', { required: true })}
          />
          {errors?.email?.type === 'required' ? (
            <p className="text-red-500 pt-2">Please enter a valid email</p>
          ) : (
            ''
          )}
        </label>
        <label className="flex flex-col space-y-1">
          <p>Password</p>
          <input
            type="password"
            className="outline-none rounded-lg border border-opacity-0 focus:border-red-500 focus:border-opacity-100 text-black"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors?.password?.type === 'required' ||
          errors?.password?.type === 'minLength' ? (
            <p className="text-red-500 pt-2">Please enter a valid password</p>
          ) : (
            ''
          )}
        </label>

        <div className="pt-2">
          <button className="bg-[#F3D078] px-16 text-black font-medium rounded-lg">
            Sign in
          </button>
        </div>
        <p className="text-base">
          Don't have an account?{' '}
          <Link
            to="/signUp"
            className="text-teal-500 text-lg"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
