import { faker } from "@faker-js/faker";
import {
  type Employee,
  type EmployeeStatus,
  type ContractType,
} from "../types";

const departments = ["Engineering", "HR", "Marketing", "Sales", "Finance"];
const statuses: EmployeeStatus[] = ["active", "probation", "terminated"];
const contractTypes: ContractType[] = ["permanent", "contract", "intern"];
const roles = [
  "Software Engineer",
  "Product Manager",
  "HR Manager",
  "Sales Rep",
];

const generateNigerianPhoneNumber = () => {
  return (
    "+234 " + faker.number.int({ min: 7000000000, max: 9099999999 }).toString()
  );
};

export function generateMockEmployee(): Employee {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: generateNigerianPhoneNumber(),
    emergencyContact: generateNigerianPhoneNumber(),
    hireDate: faker.date.past({ years: 3 }).toISOString(),
    department: faker.helpers.arrayElement(departments),
    role: faker.helpers.arrayElement(roles),
    supervisor: faker.person.fullName(),
    status: faker.helpers.arrayElement(statuses),
    contractType: faker.helpers.arrayElement(contractTypes),
    profilePhoto: faker.image.avatar(),
  };
}

export function generateMockEmployees(count = 50): Employee[] {
  return Array.from({ length: count }, () => generateMockEmployee());
}
