import React, { useEffect } from "react";
import { getTokens } from "../actions/tokens";
import { useDispatch, useSelector } from "react-redux";
import Token from "./token";
import Layout from "../layout";
import { Container } from "react-bootstrap";

function Tokens({ match }) {
  var dispatch = useDispatch();
  var tokenIndex = { start: 0, end: 20 };
  useEffect(() => {
    dispatch(getTokens(tokenIndex.start, tokenIndex.end));
  }, []);

  var tokens = useSelector((state) => state.token.tokens);

  var isFetching = useSelector((state) => state.token.isFetching);

  const tokenItems =
    tokens &&
    tokens.map((token) => (
      <div key={token} className="align-center">
        <Token data={token}></Token>
      </div>
    ));

  return (
    <>
      <Container>
        <br />
        <h3>List of tokens</h3> <br />
        <br />
        <input type="search" placeholder="Enter key to search"/>
        <br/>
        <br/>
        {isFetching && <>Loading...</>}
        {!isFetching && <>{tokenItems}</>}
      </Container>
    </>
  );
}

export default Tokens;
