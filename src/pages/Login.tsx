import { useState } from "react";
import Fieldset from "../components/Fieldset";
import Swal from "sweetalert2";
import { useEmployeeContext } from "../context/EmployeeContext";
import { useNavigate } from "react-router";

const Login = () => {
  const { setIsAuthenticated } = useEmployeeContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    if (formData.password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Invalid password",
        text: "Password must be at least 6 digits.",
      });
      return;
    }

    setIsAuthenticated(true);
    navigate("/dashboard", { replace: true });

    setFormData({
      email: "",
      password: "",
    });
  }

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
