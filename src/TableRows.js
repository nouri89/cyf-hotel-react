import React, { useState } from "react";


function TableRows({ info, rowId }) {
	const [rowClicked, SetRowClicked] = useState(false);

	function handleClick() {
		rowId(info.id);
	}

	function handelClickEvent(event) {
		if (event.target.innerText !== "Show Profile") {
			SetRowClicked(!rowClicked);
		}
	}

	return (
		<tr
			style={{ textAlign: "center" }}
			className={rowClicked ? "isSelected" : ""}
			onClick={handelClickEvent}
		>
			<td key={info.id}>{info.id}</td>
			<td>{info.title} </td>
			<td>{info.firstName}</td>
			<td>{info.surname}</td>
			<td>{info.email}</td>
			<td>{info.roomId}</td>
			<td>{info.checkInDate}</td>
			<td>{info.checkOutDate}</td>
			<td>
				{(new Date(info.checkOutDate).valueOf() -
					new Date(info.checkInDate).valueOf()) /
					86400000}
			</td>
			<td>
				<button className="btn btn-primary" onClick={handleClick}>
					Show Profile
				</button>
			</td>
		</tr>
	);
}

export default TableRows;
