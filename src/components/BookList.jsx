import React from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";

const BookList = (props) => {
	return (
		<Row>
			{props.books.map((book) => (
				<SingleBook clicked={null} key={book.asin} singleBook={book} />
			))}
		</Row>
	);
};

export default BookList;
