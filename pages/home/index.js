import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const page = () => {

  const validate = values => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = 'Required';
    } else if (values.first_name.length > 10) {
      errors.first_name = 'Must be 10 characters or less';
    }
    if (!values.last_name) {
      errors.last_name = 'Required';
    } else if (values.last_name.length > 10) {
      errors.last_name = 'Must be 10 characters or less';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (values.email.length > 10) {
      errors.email = 'Must be 10 characters or less';
    }
    return errors;
  }
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
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
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
                    {formik.errors.first_name ? <div className='text-red-500'>{formik.errors.first_name}</div> : null}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
                  <div className="mt-2">
                    <input type="text" name="last_name" id="last_name" onChange={formik.handleChange} value={formik.values.last_name} autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    {formik.errors.last_name ? <div className='text-red-500'>{formik.errors.last_name}</div> : null}
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input id="email" name="email" type="email" value={formik.values.email} onChange={formik.handleChange} autocomplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    {formik.errors.email ? <div className='text-red-500'>{formik.errors.email}</div> : null}
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