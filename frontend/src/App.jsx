import { BrowserRouter } from "react-router";
import AppRoutes from "./routers/Routes.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
