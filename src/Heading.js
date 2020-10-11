import React from "react";

function Heading() {
	return (
		<header className="App-header" style={{ flex: "flex" }}>
			<h3 style={{ color: "white", marginLeft: "38%" }}>
				Code Your Future Hotel
			</h3>
			<img
				src="https://image.flaticon.com/icons/svg/139/139899.svg"
				id="logo"
				className="App-logo"
				alt="hotel logo"
			/>
		</header>
	);
}

export default Heading;
