import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../layout";
import { Container } from "react-bootstrap";
import LoginForm from "./loginForm";

function Login() {
  var dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <Layout>
      <>
        <div className="page">
          <div className="no-auth">
            <Container>
              <LoginForm />
            </Container>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default Login;
