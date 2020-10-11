import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

function SearchResults(props) {
	const bookings = props.results;
	const [changeId, setChangeId] = useState("");

	const rowId = (newID) => {
		setChangeId(newID);
	};

	return (
		<div>
			<table className="table">
				<TableHeader />
				<tbody>
					{bookings.map((data) => (
						<TableRows rowId={rowId} info={data} />
					))}
				</tbody>
			</table>
			<CustomerProfile id={changeId} />
		</div>
	);
}

export default SearchResults;
