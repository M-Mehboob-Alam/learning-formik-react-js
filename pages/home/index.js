import { useFormik } from 'formik'
import React from 'react'

const page = () => {

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      country: '',
      state: '',
      city: '',
      address: '',
      zipcode: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })
  return (
    <>

      <div className='container flex flex-col items-center justify-center'>
        <h1 className="text-3xl bg-dark font-bold underline">
          I'm learning formik logic in react
        </h1>
        <form className='' onSubmit={formik.handleSubmit} >
          <div className="space-y-12">

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label for="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
                  <div className="mt-2">
                    <input type="text" name="first_name" id="first_name" value={formik.values.first_name} onChange={formik.handleChange} autocomplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                  <div className="mt-2">
                    <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label for="country" className="block text-sm/6 font-medium text-gray-900">Country</label>
                  <div className="mt-2 grid grid-cols-1">
                    <select id="country" name="country" autocomplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>

                <div className="col-span-full">
                  <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Street address</label>
                  <div className="mt-2">
                    <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label for="city" className="block text-sm/6 font-medium text-gray-900">City</label>
                  <div className="mt-2">
                    <input type="text" name="city" id="city" autocomplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
                  <div className="mt-2">
                    <input type="text" name="region" id="region" autocomplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
                  <div className="mt-2">
                    <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default page