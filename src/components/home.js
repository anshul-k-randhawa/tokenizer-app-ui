import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tokens from "../components/tokens";
import Layout from "../layout";

function Home() {
  var dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getSubjects());
  }, []);

  let isAuthenticated = useSelector(state => state.authentication.isAuthenticated)

  if(!isAuthenticated){
    window.location.href="/login";
  }

  return (
    <Layout>
      <div>
        <Tokens></Tokens>
      </div>
    </Layout>
  );
}

export default Home;
