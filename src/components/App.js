import React from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer";
import hogs from "../porkers_data";
import { useState } from "react";
import Filter from './Filter'

function App() {
	const [hogData, setHogData] = useState(hogs)
	const [isGreased, setIsGreased] = useState(false)
	const [sort, setSort] = useState("unordered")

	//Parameter #2
	//reasoning behind naming this is because the HogData will be filtered and the data type is an array.
	const filteredHogDataArray = hogData.filter((hog) => {
		if(isGreased === true) {
			return hog.greased === true;
		} else {
			return hogData;
		}
	})

	//instead of sorting over the hog data, we are going to sort the HogArray, since a new array is already being made.
	//in order to avoid mutating the array directly, which is a big no no, we use the spread operator to make it create a copy
	//instead.
	const sortHogArray = [...filteredHogDataArray].sort((a, b) => {
		if(sort === "unordered") return true;
		else if(sort === "weight") {
			// we are returning it this way becuase we are sorting using numbers.
			return a.weight - b.weight;
		}
	})

	return (
		<div className="App">
			<Nav />
			<Filter setIsGreased={setIsGreased} setSort={setSort}/>
			<HogContainer hogData={sortHogArray}/>
		</div>
	);
}

export default App;
