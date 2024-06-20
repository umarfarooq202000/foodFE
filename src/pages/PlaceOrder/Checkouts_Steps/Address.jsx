import { Formik,Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

function Address() {

//initial values of Address form
  const initialValues = {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  };

//Address form validation using Yups 
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    street: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.string().required('Zip code is required'),
    country: Yup.string().required('Country is required')
  });

  return (
    <div className="h-[] my-2">
    
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values)=>{
        console.log(values);
      }}
    
    >
      {() => (
        <Form className="font-mono border-4 w-[100%] max-h-[100vh] p-2">
          <div className="flex gap-2 direction-column flex-wrap">
              <div  className="flex flex-col">
                <label htmlFor="name">Name:</label>
                <Field type="text" id="name" name="name" className="border p-1 outline-none rounded-sm"/>
                <div className="text-red-600 text-sm">
                    <ErrorMessage name="name" />
                </div>
                
              </div>
              <div  className="flex flex-col ">
                <label htmlFor="street">Street Address:</label>
                <Field type="text" id="street" name="street" className="border p-1 outline-none rounded-sm" />
                <div className="text-red-600 text-sm">
                    <ErrorMessage name="street" />
                </div>
              </div>
          </div>
          <div className="flex gap-2 direction-column flex-wrap">
              <div className="flex flex-col ">
                  <label htmlFor="city">City:</label>
                  <Field type="text" id="city" name="city" className="border p-1 outline-none rounded-sm"/>
                  <div className="text-red-600 text-sm">
                    <ErrorMessage name="city" />
                  </div>
                </div>
                <div  className="flex flex-col ">
                  <label htmlFor="state">State:</label>
                  <Field type="text" id="state" name="state" className="border p-1 outline-none rounded-sm"/>
                  <div className="text-red-600 text-sm">
                    <ErrorMessage name="state" />
                </div>
                </div>

          </div>
          <div className="flex gap-2 direction-column flex-wrap">
                <div className="flex flex-col">
                  <label htmlFor="zip">Zip Code:</label>
                  <Field type="text" id="zip" name="zip" className="border p-1 outline-none rounded-sm"/>
                  <ErrorMessage name="zip"/>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="country">Country:</label>
                  <Field type="text" id="country" name="country" className="border p-1 outline-none rounded-sm"/>
                  <ErrorMessage name="country"  />
                </div>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default Address
