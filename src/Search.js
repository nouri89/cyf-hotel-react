import React, { useState } from "react";
import SearchButton from "./SearchButton";
import AddBookingButton from "./AddBookingButton";
import NewBookings from "./NewBooking";

const Search = ({ currentSearch },{handelClick}) => {
	const [searchInput, setSearchInput] = useState("");
	const [newBookingTrigged, setNewBookingTrigged] = useState(false);

	function handleSearchInput(event) {
		setSearchInput(event.target.value);
		console.log(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		currentSearch(searchInput);
	}
	 function handelClick() {
		 setNewBookingTrigged(true);
		}

	return (
		<div className="search">
			<div className="page-header">
				<h4 className="text-center">Search Bookings</h4>
			</div>
			<div className="row search-wrapper">
				<div className="col">
					<form onSubmit={handleSubmit} className="form-group search-box">
						<label htmlFor="customerName">Customer name</label>
						<div className="search-row">
							<input
								value={searchInput}
								type="text"
								id="customerName"
								className="form-control"
								placeholder="Customer name"
								onChange={handleSearchInput}
							/>

							<SearchButton />
						</div>
					</form>
					<div style={{ marginLeft: "45%" }}>
						<AddBookingButton handelClick={handelClick} />
					</div>
					<div
						className={newBookingTrigged ? "newBookingShown" : "newBookingHidden"}
					>
						<NewBookings />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
