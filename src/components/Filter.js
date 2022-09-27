import React from "react";

function Filter({setIsGreased, setSort}){
    return(
        <div>
            <label>
                Greased Hogs Only <input type='checkbox' onClick={(e) => setIsGreased(e.target.checked)}/>
                {/* Parameter #3 */}
                <select onChange={(e) => setSort(e.target.value)}>
                    <option value="unordered">unordered</option>
                    <option value="weight">weight</option>
                </select>
                
            </label>
            </div>
    )
}

export default Filter;