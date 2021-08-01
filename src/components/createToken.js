import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {generateToken} from "../actions/tokens"
import Layout from "../layout";

function CreateToken() {
  var dispatch = useDispatch();

  let tokenGenerated = useSelector(state=> state.token.tokenGenerated)

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
        <button onClick={()=>{dispatch(generateToken())}}>Generate Token</button>
        {tokenGenerated &&
            <div className="text-success">Token has been generated successfully</div>
        }
      </Container>
    </Layout>
  );
}

export default CreateToken;
