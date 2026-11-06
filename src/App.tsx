import { BrowserRouter } from "react-router-dom";
import AppRouter from "@/app/AppRouter";

const App = () => (
  <BrowserRouter basename="/portfolio26">
    <AppRouter />
  </BrowserRouter>
);

export default App;