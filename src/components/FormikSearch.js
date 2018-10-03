import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Yup from 'yup';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('shop')
@observer
class FormikSearch extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    debugger;
    return (
      <Formik
        initialValues={{ search: '' }}
        validationSchema={Yup.object().shape({
          search: Yup.string().required(),
        })}
        onSubmit={(searchTerm, { setSubmitting }) => {
          debugger;
          this.props.history.push(`/search/${searchTerm}`);
          setSubmitting(false);
          this.props.closeNav();
        }}
      >
        {() => (
          <Form>
            <div className="field has-addons">
              <div className="control">
                <Field className="input" type="search" name="search" placeholder="Search" />
              </div>
              <div className="control">
                <Link className="button is-dark" to={`/search/${this.state.searchTerm}`}>
                  Search
                </Link>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormikSearch;
