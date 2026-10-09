import { useState } from "react";

function ApplicationCard(props) {
  const [isEditing, setIsEditing] = useState(false);

  const [company, setCompany] = useState(props.company);
  const [role, setRole] = useState(props.role);
  const [status, setStatus] = useState(props.status);

  function handleSave() {
    props.onUpdate({
      id: props.id,
      company: company,
      role: role,
      status: status
    });

    setIsEditing(false);
  }

  function handleCancel() {
    setCompany(props.company);
    setRole(props.role);
    setStatus(props.status);
    setIsEditing(false);
  }

  return (
    <div className="card border-0 shadow-sm mb-3">
      <div className="card-body">
        {isEditing ? (
          <div>
            <h3 className="h5 fw-bold mb-3">Edit Application</h3>

            <div className="mb-3">
              <label className="form-label">Company</label>
              <input
                className="form-control"
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Job Role</label>
              <input
                className="form-control"
                type="text"
                value={role}
                onChange={(event) => setRole(event.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleSave}
              >
                Save Changes
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div>
              <h3 className="h5 fw-bold mb-1">{props.company}</h3>
              <p className="text-secondary mb-2">{props.role}</p>

              <span
                className={`badge ${
                  props.status === "Offer"
                    ? "text-bg-success"
                    : props.status === "Interview"
                    ? "text-bg-primary"
                    : props.status === "Rejected"
                    ? "text-bg-danger"
                    : "text-bg-secondary"
                }`}
              >
                {props.status}
              </span>
            </div>

            <div className="d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  setCompany(props.company);
                  setRole(props.role);
                  setStatus(props.status);
                  setIsEditing(true);
                }}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => props.onDelete(props.id)}
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ApplicationCard;