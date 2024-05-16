import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Section from "./Section";

const SignIn = () => {
  return (
<Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="login"
    >      <div className="max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-6">Sign In</h1>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <Button type="submit">Sign In</Button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </Section>
  );
};

export default SignIn;
