import React, { Component } from "react";

class Search extends Component {
    render(){
        return(
            <div>

                {/* search bar -- what attribute(s) do we want to search?  */}
                {/* <div className="ui large fluid icon input">
                    <input
                        type="text"
                        placeholder={"Search"}
                        onChange={(e) => props.handleSearch(e.target.value)}
                    />
                </div> */}


                {/* drop down categoy menu */}
                {/* <label>
                    <select onChange= {(e) => props.handleFilter(e.target.value)}>
                    <option value="fruit">Fruit</option>
                    <option value="meat">Meat</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="drink">Drink</option>
                    </select>
                </label> */}
            </div>
        )
    }
}

export default Search;