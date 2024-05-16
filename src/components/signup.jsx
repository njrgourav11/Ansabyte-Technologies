import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Section from "./Section";

const SignUp = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="signup"
    >
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
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
          <Button type="submit">Sign Up</Button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </Section>
  );
};

export default SignUp;
