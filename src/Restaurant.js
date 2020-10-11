import React from "react";
import Order from "./Order";

const Restaurant = () => {
	return (
		<div>
			<h3 style={{ textAlign: "center" }}>Restaurant Orders</h3>
			<ul
				style={{
					listStyleType: "none",
					display: "flex",
					justifyContent: "space-around",
				}}
			>
				<Order orderType={"Pizza"} />
				<Order orderType={"Salads"} />
				<Order orderType={"Chocolate cake"} />
			</ul>
		</div>
	);
};

export default Restaurant;
