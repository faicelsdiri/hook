import { Card, CardGroup } from "react-bootstrap";
import ReactStars from "react-stars";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useNavigate } from "react-router";

function MovieCard({
  id,
  image,
  rating,
  name,
  date,
  type,
  seasons,
  description,
  trailer,
}) {
  const navigate =useNavigate();

  function clickcard() {
    navigate(`/description/${id}`);

  }
  
  return (
    <>
      <CardGroup>
        <Card
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginLeft: "20px",
            width: " 350px",
            height: "600px",
            backgroundColor: "GrayText",
          }}
        onClick={clickcard}>
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "350px", height: "200px" }}
          />
          <Card.Body>
            <Card.Title> {name}</Card.Title>
            <Card.Text> {date} </Card.Text>
            <Card.Text> {type} </Card.Text>
            <Card.Text> {seasons} </Card.Text>
            <Card.Text> {description} </Card.Text>
            <Card.Text> {trailer} </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted" >
            <ReactStars count={5} size={24} color2={"#ffd700"} value={rating} edit ={false} style={{textAlign: "center"}}  />
            
          </Card.Footer>
        </Card>
      </CardGroup>
    </>
  );
}

export default MovieCard;
