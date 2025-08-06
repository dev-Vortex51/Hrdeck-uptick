import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useEmployeeContext } from "../context/EmployeeContext";
import { useState } from "react";

export const useLogin = () => {
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

    return {handleChange, handleSubmit, formData}
}