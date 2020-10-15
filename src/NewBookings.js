import React from "react";

function NewBookings() {
	return (
		<div style={{border:"1px solid blue",borderRadius:"5px"}}>
			<form>
				
				
				<label>Title:</label>
				<input type="text" id="lname" />
			
				<label>First name:</label>
				<input type="text" />
				
				<label>Last name:</label>
				<input type="text" />
			    <br/>   
				<label>Email:</label>
				<input type="email" />
		
				<label>Room Id:</label>
				<input type="text" />
				<br />
				<label>Checking In:</label>
				<input type="date" />
				<label>Checking Out:</label>
				<input type="date" />
        
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default NewBookings;
