import { useNavigate, useParams } from "react-router";
import "../App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import MoviesArray from "./MoviesArray";

function Description() {
    const {id} = useParams();
    const  foundObject = MoviesArray.find((obj) => obj.id == id); 
    const navigate =useNavigate();
    function ClicktoHome() {
        navigate("/")
    }
    return ( 
        <div style={{backgroundColor:"white"}}>
            <h1>{foundObject.name} </h1> <br></br>
            <h>{foundObject.description}</h><br></br> <br></br>
            <iframe width="560" height="315" src={foundObject.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br></br> <br></br>
            <Button variant="success" size="lg" onClick={ClicktoHome}> HOME </Button>
        </div>
     );
}

export default Description;