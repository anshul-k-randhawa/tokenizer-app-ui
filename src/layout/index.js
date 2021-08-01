import React from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

class Layout extends React.Component {
  render() {
    return (
      <>
        <NavBar></NavBar>

        <main className="main">{this.props.children}</main>

        <Footer></Footer>
      </>
    );
  }
}

export default Layout;
