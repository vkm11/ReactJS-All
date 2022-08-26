function Student(props){
    console.log(props.name)
    return(
        <div style={{backgroundColor: "skyblue", margin: 10, color: "pink"}}>
            <h1>Name: {props.name}</h1>
            {/* <h3>Email: {props.email}</h3>
            <h4>Address: {props.others.address}</h4>
            <h4>Contact: {props.others.mobile}</h4> */}
        </div>
    )
}
export default Student
