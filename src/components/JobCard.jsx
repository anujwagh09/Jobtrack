function JobCard(props){
    return (
        <div>   
            <h3>{props.company}</h3>
            <p>{props.role}</p>
        </div>
    )
}

export default JobCard;