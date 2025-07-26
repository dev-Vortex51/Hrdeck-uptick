import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import type { Employee, FormData } from "../types";



export const useFormSubmit = (value : Employee | undefined , handler : (data: Employee) => void  , mode : "create" | "edit") => {
    const navigate = useNavigate();


    const [formData, setFormData] = useState<FormData>( value ||  {
      name: "",
      email: "",
      phone: "",
      emergencyContact: "",
      hireDate: "",
      department: "",
      role: "",
      supervisor: "",
      contractType: "",
      profilePhoto: "",
    });
  
  
  
    useEffect(() => {
      if (value) setFormData(value);
    }, [value]);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value, type, files } = e.target;
  
      setFormData((prev) => ({
        ...prev,
        [name]:
          type === "file" ? (files && files[0] ? files[0].name : null) : value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const hasEmptyField = Object.entries(formData).some(([key, value]) => {
        if (key === "profilePhoto") return false;
        return value === "";
      });
  
      if (hasEmptyField) {
        Swal.fire({
          icon: "warning",
          title: "Missing Field",
          text: "All fields are required!",
        });
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: "Please enter a valid email address.",
        });
        return;
      }
  
      if (formData.phone.length < 10) {
        Swal.fire({
          icon: "error",
          title: "Invalid Phone Number",
          text: "Phone number must be at least 10 digits.",
        });
        return;
      }
  
      if (!formData.profilePhoto) {
        Swal.fire({
          icon: "warning",
          title: "Missing Profile Photo",
          text: "Please upload a profile photo.",
        });
        return;
      }
  
      const newEmployee: Employee = {
        id: Date.now().toString(),
        ...formData,
        status: "recent",
      };
  
      if(mode === 'create'){
        handler(newEmployee)
      }else{
        handler({
          ...formData,
          id: value?.id || '',
          status: value?.status || 'active',
        })
      }
      
  
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Employee record submitted successfully!",
      });
  
      setFormData({
        name: "",
        email: "",
        phone: "",
        emergencyContact: "",
        hireDate: "",
        department: "",
        role: "",
        supervisor: "",
        contractType: "",
        profilePhoto: "",
      });
  
      navigate("/employees");
    };


    return {handleChange, formData, handleSubmit}
}