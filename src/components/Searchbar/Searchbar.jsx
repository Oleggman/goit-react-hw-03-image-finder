import { Formik } from "formik";
import { SearchForm, Input, SubmitBtn } from "./Searchbar.styled";
import * as Yup from 'yup';
import { BsSearch } from 'react-icons/bs'
import { Header } from "./Searchbar.styled";

const ContactSchema = Yup.object().shape({
  query: Yup.string()
      .trim()
      .min(1, 'Too short contact name!')
      .required('Required')
 });

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
        validationSchema={ContactSchema}
      >
        <SearchForm>
          <SubmitBtn type="submit">
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