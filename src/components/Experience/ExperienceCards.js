import React from "react";
import Card from "react-bootstrap/Card";


function ExperienceCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Card.Img variant="left" src={props.imgPath} alt="card-img" width={20} height={20} style={{ marginRight: "8px" }} />
                    <span>{props.header}</span>
                </div>
                <span>{props.place}</span>
            </Card.Header>
            <Card.Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span>{props.title}</span>
                </div>
                <span>{props.time}</span>
            </Card.Header>
            <Card.Body>
                <Card.Text style={{ textAlign: "left" }}>
                    {props.description.map((line, index) => (
                        <div key={index} style={{ marginBottom: "8px" }}>{line}</div>
                    ))}
                </Card.Text>
                {"\n"}
                {"\n"}
            </Card.Body>
        </Card>
    );
}
export default ExperienceCards;
