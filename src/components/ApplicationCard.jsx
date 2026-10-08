function ApplicationCard(props) {

  return (
    <div className="application-card">

      <h3>{props.company}</h3>

      <p>{props.role}</p>

      <span>{props.status}</span>

    <button>Edit</button>
      <button onClick={() => props.onDelete(props.id)}>
        Delete
      </button>

    </div>
  );
}

export default ApplicationCard;