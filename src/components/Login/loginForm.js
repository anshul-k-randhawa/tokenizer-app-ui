import React, { useEffect } from "react";
import { Row, Spinner } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { AuthenticateCustomerLogin } from "../../actions/authentication";
import { useHistory } from "react-router-dom";

const LoginForm = ({ isProcessing, isAuthenticated }) => {
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/home");
    }
  }, []);

  const spinner = <Spinner animation="border" size="sm" />;
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <h2 className="mb-5">Login to your account</h2>
      <br />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            dispatch(
              AuthenticateCustomerLogin(values.email, values.password, history)
            );
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("No email provided"),
          password: Yup.string().required("No password provided"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit} className="">
              <label htmlFor="email" className="mr-3">
                Email {"  "}
              </label>
              <br />
              <input
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <>
                  <br />
                  <span className="text-danger">{errors.email}</span>
                </>
              )}
              <br />
              <br />
              <label htmlFor="email" className="mr-3">
                Password {"  "}
              </label>
              <br />
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
              />
              {errors.password && touched.password && (
                <>
                  <br />
                  <span className="text-danger">{errors.password}</span>
                </>
              )}
              <br />
              <br />
              {!isProcessing && (
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              )}

              {isProcessing && (
                <div type="submit" disabled={isSubmitting}>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="mb-1"
                  />
                  Logging in...
                </div>
              )}
            </form>
          );
        }}
      </Formik>
    </>
  );
};

function mapStateToProps(state) {
  const { isProcessing, isAuthenticated } = state.authentication;
  return {
    isProcessing,
    isAuthenticated,
  };
}

export default connect(mapStateToProps)(LoginForm);
