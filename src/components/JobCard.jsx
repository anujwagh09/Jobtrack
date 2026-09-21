function JobCard(props){
    return (
        <div>   
            <h3>{props.company}</h3>
            <p>{props.position}</p>
        </div>
    )
}

export default JobCard;