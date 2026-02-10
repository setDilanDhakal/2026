import { useState } from "react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="bg-neutral-200 h-screen flex justify-center items-center">
      <div className="bg-white w-sm  rounded-xl">
        <div>
          <h2 className="text-center text-4xl py-5">Register</h2>
        </div>

        <form className="p-3" >
          <div className="p-1">
            <label htmlFor="username">UserName:</label>
            <br />
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              name="username"
              

              className="border w-full h-10 border-stone-300 p-3"
            />
          </div>

          <div className="p-2">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              name="email"
             

              className="border w-full h-10 border-stone-300 p-3"
            />
          </div>

          <div className="p-2">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              
              
              className="border w-full h-10 border-stone-300 p-3"
            />
          </div>

          <div className="p-2 flex items-center gap-2">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>

          <div className="p-2">
            <button
              type="submit"
              className="py-4 bg-blue-400 hover:bg-blue-700 w-full text-white"
            >
              Sign up
            </button>
          </div>

          <div className="p-2 text-center">
            <p>
              Forget{" "}
              <a href="#" className="text-black font-bold">
                Username?{" "}
              </a>
              <a href="#" className="text-black font-bold">
                Password?
              </a>
            </p>
            <p>
              Don't have an account?{" "}
              <a href="login" className="text-black font-bold">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
