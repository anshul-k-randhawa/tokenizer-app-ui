import React from "react";
import {useSelector} from "react-redux"
import { logoutUser } from "../services/utilities";
import { useHistory, Link } from "react-router-dom";

function NavBar() {
  
  let history = useHistory()
  let isAuthenticated = useSelector(state => state.authentication.isAuthenticated)

  return (
    <div>
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <ul class="nav navbar-nav">
            <li class="active">
              <Link to="/home">Logo</Link>
            </li>
            {isAuthenticated &&
              <>
              <li>
              <Link to="/home">Tokens</Link>
              </li>
              <li>
              <Link to="/generateToken">Generate Token</Link>
              </li>
              <li>
              <Link to="/validateToken">Validate Token</Link>
              </li>
              <li className="pull-right">
                <a
                  onClick={() => {
                    logoutUser();
                  }}
                >
                  Logout
                </a>
              </li>
              </>
            }
            
          </ul>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
}

export default NavBar;
