import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
	const [profile, setProfile] = useState(false);

	useEffect(() => {
		fetch(`https://cyf-react.glitch.me/customers/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProfile(data);
			});
	}, [id]);

	return (
		id && (
			<div style={{ backgroundColor: "blue", display: "flex" }}>
				<div style={{ margin: "0 20px", color: "white" }}>
					Customer {id} Profile: {profile.email}
				</div>
				<div style={{ margin: "0 20px", color: "white" }}>
					{profile.vip ? " VIP" : ""}
				</div>
				<div />
				<div style={{ margin: "0 20px", color: "white" }}>
					{profile.phoneNumber}
				</div>
			</div>
		)
	);
};

export default CustomerProfile;
