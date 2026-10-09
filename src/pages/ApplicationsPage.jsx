import { useState } from "react";
import ApplicationCard from "../components/ApplicationCard";
import ApplicationForm from "../components/ApplicationForm";

function ApplicationsPage({ applications, setApplications }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  function addApplication(newApplication) {
    setApplications((previousApplications) => [
      ...previousApplications,
      newApplication
    ]);
  }

  function deleteApplication(id) {
    setApplications((previousApplications) =>
      previousApplications.filter(
        (application) => application.id !== id
      )
    );
  }

  function updateApplication(updatedApplication) {
    setApplications((previousApplications) =>
      previousApplications.map((application) =>
        application.id === updatedApplication.id
          ? updatedApplication
          : application
      )
    );
  }

  const filteredApplications = applications.filter((application) => {
    const matchesSearch =
      application.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" ||
      application.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="container-fluid py-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold mb-1">Applications</h1>
          <p className="text-secondary mb-0">
            Manage and track your job applications.
          </p>
        </div>

        <span className="badge text-bg-primary fs-6">
          {applications.length} Total
        </span>
      </div>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 mb-3">
            <div className="col-12 col-md-8">
              <label className="form-label">
                Search applications
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Search by company or role..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
              />
            </div>

            <div className="col-12 col-md-4">
              <label className="form-label">
                Filter by status
              </label>

              <select
                className="form-select"
                value={selectedStatus}
                onChange={(event) =>
                  setSelectedStatus(event.target.value)
                }
              >
                <option value="All">All Statuses</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <ApplicationForm onAddApplication={addApplication} />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 fw-bold mb-0">Your Applications</h2>

        <span className="text-secondary small">
          Showing {filteredApplications.length} of {applications.length}
        </span>
      </div>

      {filteredApplications.length === 0 ? (
        <div className="alert alert-light border text-center py-4">
          No applications found. Try changing your search or filters.
        </div>
      ) : (
        filteredApplications.map((application) => (
          <ApplicationCard
            key={application.id}
            id={application.id}
            company={application.company}
            role={application.role}
            status={application.status}
            onDelete={deleteApplication}
            onUpdate={updateApplication}
          />
        ))
      )}
    </div>
  );
}

export default ApplicationsPage;