import { useState } from "react";
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
  const [applications, setApplications] = useState([
  {
    id: 1,
    company: "Amazon",
    role: "Software Development Engineer",
    status: "Applied"
  },
  {
    id: 2,
    company: "Google",
    role: "Frontend Developer",
    status: "Interview"
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Java Developer",
    status: "Offer"
  }
]);
  return (
    <BrowserRouter>
      <Navbar />

      <div className="app-layout">
        <Sidebar />

        <main className="dashboard">
          <Routes>
           <Route
  path="/"
  element={<DashboardPage applications={applications} />}
/>

           <Route
  path="/applications"
  element={
    <ApplicationsPage
      applications={applications}
      setApplications={setApplications}
    />
  }
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