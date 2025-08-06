import { Home, Users } from "lucide-react";

export const fields = [
  {
    label: "name",
    type: "text",
    placeholder: "Enter employee name",
    name: "name",
  },
  {
    label: "email",
    type: "email",
    placeholder: "Enter employee email",
    name: "email",
  },
  {
    label: "phone",
    type: "tel",
    placeholder: "Enter employee phone number",
    name: "phone",
  },
  {
    label: "emergency Contact",
    type: "tel",
    placeholder: "Enter emergency contact number",
    name: "emergencyContact",
  },
  {
    label: "hire Date",
    type: "date",
    name: "hireDate",
  },
  {
    label: "department",
    type: "text",
    placeholder: "Enter department name",
    name: "department",
  },
  {
    label: "role",
    type: "text",
    placeholder: "Enter employee role",
    name: "role",
  },
  {
    label: "supervisor",
    type: "text",
    placeholder: "Enter supervisor name",
    name: "supervisor",
  },
  {
    label: "contract Type",
    type: "text",
    placeholder: "Enter contract type (permanent, contract, intern)",
    name: "contractType",
  },

  {
    label: "profile Photo",
    type: "file",
    placeholder: "Upload profile photo",
    className: "file-input",
    name: "profilePhoto",
  },
];

export const departments = [
  "Engineering",
  "HR",
  "Marketing",
  "Sales",
  "Finance",
  "All",
];

export const navLinks = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "Employees", icon: Users, to: "/employees" },
];

export const ITEMS_PER_PAGE = 5;