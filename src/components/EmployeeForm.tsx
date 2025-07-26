
import Fieldset from "./Fieldset";
import type {   EmployeeFormProps } from "../types";

import { useFormSubmit } from "../hooks/useFormSubmit";



const EmployeeForm = ({ initialValues, onSubmit, mode = "create" }: EmployeeFormProps) => {

  const {handleChange, formData, handleSubmit } =  useFormSubmit(initialValues, onSubmit, mode)


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
        className="file-input"
      />
      <button
        type="submit"
        className="btn btn-primary col-span-full w-full sm:w-auto"
      >
        {mode === 'create' ? 'Create' : 'Edit'}
      </button>
    </form>
  );
};

export default EmployeeForm;
