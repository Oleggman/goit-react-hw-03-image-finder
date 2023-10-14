import { Formik, Field } from "formik";
import { SearchForm, Input, SubmitBtn } from "./Searchbar.styled";

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
        <SearchForm>
          <SubmitBtn type="submit" onClick={onSubmit}>
            <span >Search</span>
          </SubmitBtn>

          <Input
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </SearchForm>
      </Formik>
    </header>
  );
}