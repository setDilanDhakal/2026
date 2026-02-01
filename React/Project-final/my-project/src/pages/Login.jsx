function Login() {
  return (
    <>
      <div class="bg-neutral-200 h-screen flex justify-center items-center">
        <div class="bg-white w-xl rounded-xl">
          <div>
            <h2 class="text-center text-4xl py-10">Log in</h2>
          </div>
          <div class="p-5">
            <div class="p-2">
              <label>Email:</label>
              <br />
              <input
                type="email"
                for="email"
                placeholder="Enter Email"
                name="email"
                class="border w-full h-10 border-stone-300 p-3"
              />
            </div>

            <div class="p-2">
              <label>Password</label>
              <br />
              <input
                placeholder="Password"
                type="password"
                for="password"
                name="password"
                class="border w-full h-10 border-stone-300 p-3"
              />
            </div>

            <div class="p-2">
              <input type="checkbox" id="true" />
              <label> Show Password</label>
            </div>

            <div class="p-2">
              <button type="submit" class=" py-4 bg-cyan-600 w-full text-white">
                Sign up
              </button>
            </div>

            <div class="p-2 text-center">
              <p>
                Forget{" "}
                <a href="" class="text-cyan-500">
                  Username?{" "}
                </a>
                <a href="" class="text-cyan-500">
                  Password?
                </a>
              </p>
              <p>
                Don't have an account?{" "}
                <a href="" class="text-cyan-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
