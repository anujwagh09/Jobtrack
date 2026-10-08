import { useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import ApplicationForm from "../components/ApplicationForm";

function ApplicationsPage() {

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

  function addApplication(newApplication) {
    setApplications([
      ...applications,
      newApplication
    ]);
  }

  function deleteApplication(id){
    const updatedApplications=()=>applications.filter(application => application.id !== id);

    setApplications(updatedApplications);

  }

  return (
    <div>

      <h1>Applications</h1>

      <ApplicationForm
        onAddApplication={addApplication}
      />

      <p>
        Total Applications: {applications.length}
      </p>

      <div>
        {applications.map((application) => (
          <ApplicationCard
  key={application.id}
  id={application.id}
  company={application.company}
  role={application.role}
  status={application.status}
  onDelete={deleteApplication}
/>
        ))}
      </div>

    </div>
  );
}

export default ApplicationsPage;