import React from "react";

import { Card, Button, Col } from "react-bootstrap";

import MyBadge from "./MyBadge";
class SingleBook extends React.Component {
	state = {
		color: "primary",
		clicked: false,
		backgroundColor: "white",
	};

	render() {
		return (
			<Col className='mb-2 col-6 col-md-4'>
				<Card
					onClick={() =>
						this.setState({ clicked: !this.state.clicked })
					}
					style={{
						width: "18rem",
						objectFit: "cover",
						backgroundColor: this.state.clicked && "green",
					}}>
					<Card.Img variant='top' src={this.props.singleBook.img} />
					<Card.Body>
						<Card.Title>{this.props.singleBook.title}</Card.Title>
						<Card.Text>
							<MyBadge
								color={
									this.props.singleBook.price > 10
										? "danger"
										: "success"
								}
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
