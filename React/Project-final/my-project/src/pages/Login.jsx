import {useState} from 'react'
function Login() {
const [showPassword, setShowPassword] = useState(false);
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const handleLogin = ()=>{
  if(!email){
    to
  }
}



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
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                class="border w-full h-10 border-stone-300 p-3"
              />
            </div>

            <div class="p-2">
              <label>Password</label>
              <br />
              <input
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                for="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                class="border w-full h-10 border-stone-300 p-3"
              />
            </div>

            <div class="p-2">
              <input type="checkbox" checked={showPassword} onChange={()=>setShowPassword(!showPassword)} id="true" />
              <label> Show Password</label>
            </div>

            <div class="p-2">
              <button type="submit" class=" py-4 bg-blue-400 hover:bg-blue-700 w-full text-white">
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
                <a href="/register" class="text-cyan-500">
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
