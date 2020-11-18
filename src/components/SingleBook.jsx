import React from "react";

import { Card, Button, Col } from "react-bootstrap";

import MyBadge from "./MyBadge";
class SingleBook extends React.Component {
	state = {
		color: this.props.singleBook.price < 10 ? "danger" : "success",
		clicked: false,
		backgroundColor: "white",
	};

	render() {
		return (
			<Col>
				<Card
					onClick={() =>
						this.setState({ clicked: !this.state.clicked })
					}
					style={{
						width: "18rem",
						backgroundColor: this.state.clicked && "green",
					}}>
					<Card.Img variant='top' src={this.props.singleBook.img} />
					<Card.Body>
						<Card.Title>{this.props.singleBook.title}</Card.Title>
						<Card.Text>
							<MyBadge
								color={this.state.color}
								text={this.props.singleBook.price}
							/>
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default SingleBook;
