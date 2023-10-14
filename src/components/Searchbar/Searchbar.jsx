import { Formik } from "formik";
import { SearchForm, Input, SubmitBtn } from "./Searchbar.styled";
import { BsSearch } from 'react-icons/bs'
import { Header } from "./Searchbar.styled";

export const Searchbar = ({onSubmit}) => {
  const onSubmitForm = (values, helpers) => {
    onSubmit(values);
    helpers.resetForm();
  }

  return (
    <Header>
      <Formik 
        initialValues={{ query: ''}}
        onSubmit={onSubmitForm}
      >
        <SearchForm>
          <SubmitBtn type="submit" onClick={onSubmit}>
            <BsSearch />
          </SubmitBtn>

          <Input
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            />
        </SearchForm>
      </Formik>
    </Header>
  );
}