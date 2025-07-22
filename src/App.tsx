import { generateMockEmployees } from "./utils/mockdata";

const App = () => {
  const demo = generateMockEmployees();
  console.log(demo);
  return <div>App</div>;
};

export default App;
