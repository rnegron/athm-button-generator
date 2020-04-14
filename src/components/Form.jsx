import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { AthmButtonDispatchContext } from '../context';

const Form = () => {
  const { dispatch } = useContext(AthmButtonDispatchContext);

  const { register, handleSubmit, errors } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) =>
        dispatch({ type: 'SUBMIT_FORM', payload: data })
      )}
    >
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 sm:col-span-2">
              <label
                htmlFor="publicToken"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Account number
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  id="publicToken"
                  name="publicToken"
                  className="block w-full pr-10 form-input sm:text-sm sm:leading-5"
                  placeholder="abcdefg123456789"
                  ref={register({ required: true, minLength: 10, maxLength: 32 })}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {errors.publicToken && 'Public Token is required'}
            </div>
          </div>

          <div className="mt-6">
            <label className="block mt-4">
              <span className="text-gray-700">Language</span>
              <select
                name="lang"
                className="block w-full mt-1 form-select"
                ref={register}
              >
                <option value="es">Spanish</option>
                <option value="en">English</option>
              </select>
            </label>
          </div>

          <div className="mt-6">
            <label className="block mt-4">
              <span className="text-gray-700">Theme</span>
              <select
                name="theme"
                className="block w-full mt-1 form-select"
                ref={register}
              >
                <option value="btn">Normal</option>
                <option value="btn-light">Light</option>
                <option value="btn-dark">Dark</option>
              </select>
            </label>
          </div>

          <div className="mt-6">
            <label
              htmlFor="total"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Total
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm sm:leading-5">$</span>
              </div>
              <input
                id="total"
                name="total"
                className="block w-full pr-12 form-input pl-7 sm:text-sm sm:leading-5"
                placeholder="0.00"
                ref={register}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm sm:leading-5">USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 mt-8">
        <div className="flex justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => dispatch({ type: 'RESET_FORM' })}
              className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            >
              Reset
            </button>
          </span>
          <span className="inline-flex ml-3 rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Submit
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Form;
