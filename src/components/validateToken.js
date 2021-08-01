import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {validateToken} from "../actions/tokens"
import Layout from "../layout";

function ValidateToken() {
  var dispatch = useDispatch();

  let isTokenValid = useSelector(state=> state.token.isTokenValid)

  useEffect(() => {
    //dispatch(getSubjects());
  }, []);

  let isAuthenticated = useSelector(state => state.authentication.isAuthenticated)

  if(!isAuthenticated){
    window.location.href="/login";
  }

  return (
    <Layout>
      <Container>
          <br/>
          <br/>
        <input id="txtToken" type="text" />
        <button onClick={()=>{dispatch(validateToken(document.getElementById("txtToken").value))}}>Validate Token</button>
        {isTokenValid &&
            <div className="text-success">Token is Valid</div>
        }
        {!isTokenValid &&
            <div className="text-success">Token is not valid</div>
        }
      </Container>
    </Layout>
  );
}

export default ValidateToken;
