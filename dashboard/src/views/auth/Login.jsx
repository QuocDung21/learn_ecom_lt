import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineGooglePlus,
} from "react-icons/ai";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome to e-commerce</h2>
          <p className="text-sm mb-3">
            Please signin to your account and start your bussiness
          </p>
          <form action="">
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="email"
                id="email"
                autoComplete="off"
                onChange={inputHandle}
                value={state.email}
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                placeholder="password"
                id="password"
                autoComplete="off"
                onChange={inputHandle}
                value={state.password}
                required
              />
            </div>
            <div className="flex items-center w-full gap-3 mb-5 ">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & tearms
              </label>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              Login
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account ?{" "}
                <Link to={"/register"}>Signup here</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span>Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="flex w-[35px] h-[35px] rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className="flex w-[35px] h-[35px] rounded-md bg-[#1877f2] shadow-lg hover:shadow-indigo-700/50 justify-center items-center cursor-pointer overflow-hidden">
                <span>
                  <AiFillFacebook />
                </span>
              </div>
              <div className="flex w-[35px] h-[35px] rounded-md bg-[#1da1f2] shadow-lg hover:shadow-cyan-700/50 justify-center items-center cursor-pointer overflow-hidden">
                <span>
                  <AiFillTwitterCircle />
                </span>
              </div>
              <div className="flex w-[35px] h-[35px] rounded-md bg-purple-700 shadow-lg hover:shadow-purple-700/50 justify-center items-center cursor-pointer overflow-hidden">
                <span>
                  <AiFillGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
