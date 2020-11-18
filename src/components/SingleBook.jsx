import React from "react";

import { Card, Button, Col } from "react-bootstrap";

import MyBadge from "./MyBadge";
const SingleBook = (props) => {
	const color = props.singleBook.price < 10 ? "danger" : "success";

	const isClicked = props.clicked;

	let clickedColor = isClicked ? "green" : "white";
	return (
		<Col>
			<Card
				onClick={() => props.onClicked}
				style={{ width: "18rem", backgroundColor: { clickedColor } }}>
				<Card.Img variant='top' src={props.singleBook.img} />
				<Card.Body>
					<Card.Title>{props.singleBook.title}</Card.Title>
					<Card.Text>
						<MyBadge color={color} text={props.singleBook.price} />
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default SingleBook;
