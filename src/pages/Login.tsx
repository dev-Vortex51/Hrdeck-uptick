
import Fieldset from "../components/Fieldset";

import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const {handleSubmit, handleChange, formData} = useLogin()

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 max-w-xl shadow-sm w-full">
        <form className="card-body" onSubmit={handleSubmit}>
          <h2 className="card-title text-2xl">Login</h2>
          <Fieldset
            label="Email"
            type="email"
            placeholder="joe@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Fieldset
            label="Password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
