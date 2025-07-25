import { useState } from "react";
import Swal from "sweetalert2";
import Fieldset from "./Fieldset";
import { useEmployeeContext } from "../context/EmployeeContext";
import type { ContractType, Employee } from "../types";
import { useNavigate } from "react-router";

type FormData = {
  name: string;
  email: string;
  phone: string;
  emergencyContact: string;
  hireDate: string;
  department: string;
  role: string;
  supervisor: string;
  contractType: ContractType;
  profilePhoto: string | File | null;
};

const EmployeeForm = () => {
  const navigate = useNavigate();
  const { setEmployees } = useEmployeeContext();

  const [formData, setFormData] = useState<FormData>({
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
      status: "active",
    };

    setEmployees((prev) => [...prev, newEmployee]);

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

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      <Fieldset
        label="Full Name"
        type="text"
        placeholder="Enter full name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Fieldset
        label="Email"
        type="email"
        placeholder="Enter email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Fieldset
        label="Phone"
        type="tel"
        placeholder="Enter phone number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Fieldset
        label="Emergency Contact"
        type="tel"
        placeholder="Enter emergency contact"
        name="emergencyContact"
        value={formData.emergencyContact}
        onChange={handleChange}
      />
      <Fieldset
        label="Hire Date"
        type="date"
        placeholder=""
        name="hireDate"
        value={formData.hireDate}
        onChange={handleChange}
      />
      <Fieldset
        label="Department"
        type="text"
        placeholder="Enter department"
        name="department"
        value={formData.department}
        onChange={handleChange}
      />
      <Fieldset
        label="Role"
        type="text"
        placeholder="Enter role"
        name="role"
        value={formData.role}
        onChange={handleChange}
      />
      <Fieldset
        label="Supervisor"
        type="text"
        placeholder="Enter supervisor name"
        name="supervisor"
        value={formData.supervisor}
        onChange={handleChange}
      />
      <Fieldset
        label="Contract Type"
        type="input"
        name="contractType"
        value={formData.contractType}
        onChange={handleChange}
      />
      <Fieldset
        label="Profile Photo"
        type="file"
        name="profilePhoto"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn btn-primary col-span-full w-full sm:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default EmployeeForm;
