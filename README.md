# Hrdeck Uptick

Hrdeck Uptick is a modern HR management application designed to streamline talent acquisition, onboarding, and employee management. Built with React, TypeScript, and Vite, it provides a fast and efficient user experience for HR teams.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Authentication**: Secure login and protected routes for authorized access.
- **Dashboard Overview**: Visual stats, department and status charts for quick insights.
- **Employee Management**:
  - List, filter, sort, and paginate employees
  - Add new employees with validation
  - Edit and delete employee records
- **Department & Status Analytics**: Interactive charts for department distribution and employee status (active, probation, recent).
- **Responsive UI**: Modern, mobile-friendly design using Tailwind CSS and DaisyUI.
- **Dark/Light Mode**: Toggle between light and dark themes.
- **Mock Data**: Demo-ready with generated employee data for testing and development.
- **404 Page**: Custom not-found page for invalid routes.

---

## Tech Stack

- **Frontend**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API
- **Utilities**: [SweetAlert2](https://sweetalert2.github.io/) for alerts, [@faker-js/faker](https://fakerjs.dev/) for mock data

---

## Live Deployment

Check out the live site here: [https://markethink-uptick.netlify.app](https://hrdeck-uptick.netlify.app)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd hrdeck
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173)

4. **Build for production**
   ```bash
   npm run build
   ```
5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Usage

- **Login**: Use any email and a password (min 6 chars) to log in (mock authentication).
- **Dashboard**: View employee stats, department and status charts.
- **Employees**: List, filter by department, sort by name or hire date, add, edit, or delete employees.
- **Dark/Light Mode**: Use the toggle in the header to switch themes.

---

## Folder Structure

```
hrdeck/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable UI components
│   ├── constants/         # Static data and field definitions
│   ├── context/           # React Context for state management
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout components (Dashboard, etc.)
│   ├── pages/             # Page components (Dashboard, Employees, Login, etc.)
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions and mock data
│   ├── index.css          # Global styles (Tailwind, DaisyUI)
│   └── main.tsx           # App entry point
├── package.json           # Project metadata and scripts
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is licensed under the MIT License.
