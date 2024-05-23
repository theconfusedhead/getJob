import React, { useState } from "react";
import Wrapper from "../asset/wrappers/RegisterPage";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";
const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: false,
  };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = data;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please provide all the values!");
      return;
    }
    console.log(data);
  };
  const toggleMember = () => {
    setData({ ...data, isMember: !data.isMember });
  };

  return (
    <Wrapper>
      <div>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <Logo />
          {data.isMember ? <h3>Login</h3> : <h3>Register</h3>}

          {!data.isMember && (
            <FormRow
              type={"text"}
              name={"name"}
              handleChange={handleChange}
              labelText={"Name"}
              value={data.name}
            />
          )}
          <FormRow
            type={"email"}
            name={"email"}
            handleChange={handleChange}
            labelText={"Email"}
            value={data.email}
          />
          <FormRow
            type={"password"}
            name={"password"}
            handleChange={handleChange}
            labelText={"Password"}
            value={data.password}
          />
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
          {data.isMember ? <p>Not a member yet</p> : <p>Already a member?</p>}
          <button type="button" onClick={toggleMember}>
            {!data.isMember ? "Login" : "register"}
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
