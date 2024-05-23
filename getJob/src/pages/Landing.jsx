import React from "react";
import Wrapper from "../asset/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="center">
        <section>
          <p>Get Job Application. Click below to register.</p>
          <Link to={"/register"}>Register/Sign in</Link>
        </section>
      </div>
    </Wrapper>
  );
};

export default Landing;
