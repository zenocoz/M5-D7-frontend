import React from "react";
import SingleBook from "./SingleBook";
import { Row } from "react-bootstrap";
import { useState } from "react";

const BookList = (props) => {
	// const { books } = props.books;

	const [selected, setSelected] = useState(false);

	return (
		// {console}
		<Row>
			{props.books.map((book) => (
				<SingleBook
					onClicked={() => setSelected(true)}
					clicked={selected}
					key={book.asin}
					singleBook={book}
				/>
			))}
		</Row>
	);
};

export default BookList;
