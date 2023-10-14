import { Formik, Form, Field } from "formik";


export const Searchbar = ({onSubmit}) => {
  const onSubmitForm = (values, helpers) => {
    onSubmit(values);
    helpers.resetForm();
  }
  
  return (
    <header>
      <Formik 
        initialValues={{ query: ''}}
        onSubmit={onSubmitForm}
      >
        <Form>
          <button type="submit" onClick={onSubmit}>
            <span >Search</span>
          </button>

          <Field
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </Form>
      </Formik>
    </header>
  );
}