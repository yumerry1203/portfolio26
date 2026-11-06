import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import ResumePage from "@/pages/Resume/ResumePage";
import CareerPage from "@/pages/Career/CareerPage";
import NotFoundPage from "@/pages/NotFoundPage";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/resume" element={<ResumePage />} />
    <Route path="/career" element={<CareerPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRouter;
