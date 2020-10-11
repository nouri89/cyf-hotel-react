import React from "react"
const TableHeader =()=>{
    return (
			<thead className="thead-dark" style={{textAlign:"center"}}>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Title</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Email</th>
					<th scope="col">Room ID</th>
					<th scope="col">Check in </th>
					<th scope="col">Check out date</th>
				<th scope="col">Number of Nights</th>
				<th scope="col">Porfile</th>
				</tr>
			</thead>
		);
}

export default TableHeader