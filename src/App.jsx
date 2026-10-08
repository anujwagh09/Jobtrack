import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import InterviewsPage from "./pages/InterviewsPage";
import OffersPage from "./pages/OffersPage";
import SettingsPage from "./pages/SettingsPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="app-layout">
        <Sidebar />

        <main className="dashboard">
          <Routes>
            <Route path="/" element={<DashboardPage />} />

            <Route
              path="/applications"
              element={<ApplicationsPage />}
            />

            <Route
              path="/interviews"
              element={<InterviewsPage />}
            />

            <Route
              path="/offers"
              element={<OffersPage />}
            />

            <Route
              path="/settings"
              element={<SettingsPage />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;