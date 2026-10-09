function DashboardPage({ applications }) {
  const totalApplications = applications.length;

  const totalInterviews = applications.filter(
    (application) => application.status === "Interview"
  ).length;

  const totalOffers = applications.filter(
    (application) => application.status === "Offer"
  ).length;

  const totalRejected = applications.filter(
    (application) => application.status === "Rejected"
  ).length;

  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h1 className="fw-bold">Dashboard</h1>
        <p className="text-secondary">
          Track your job search progress in one place.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-secondary mb-2">
                Total Applications
              </p>
              <h2 className="fw-bold mb-0">
                {totalApplications}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-secondary mb-2">
                Interviews
              </p>
              <h2 className="fw-bold mb-0">
                {totalInterviews}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-secondary mb-2">
                Offers
              </p>
              <h2 className="fw-bold mb-0">
                {totalOffers}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-xl-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-secondary mb-2">
                Rejected
              </p>
              <h2 className="fw-bold mb-0">
                {totalRejected}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;