import { useState } from "react";

function ApplicationForm({ onAddApplication }) {

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  function handleSubmit(event) {
    event.preventDefault();

    const newApplication = {
      id: Date.now(),
      company: company,
      role: role,
      status: status
    };

    onAddApplication(newApplication);

    setCompany("");
    setRole("");
    setStatus("Applied");
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Company name"
        value={company}
        onChange={(event) => setCompany(event.target.value)}
      />

      <input
        type="text"
        placeholder="Job role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />

      <select
        value={status}
        onChange={(event) => setStatus(event.target.value)}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button type="submit">
        Add Application
      </button>

    </form>
  );
}

export default ApplicationForm;