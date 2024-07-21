import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "~/pages/Home";
import Upload from "./pages/Upload";
import PrivateRoute from "./routes/private";
import isAuthenticated from "./auth/auth";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/api/upload" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <Upload />
          </PrivateRoute>  
          } />
      </Routes>
    </BrowserRouter>
  );
}