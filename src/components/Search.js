import React from 'react' 

const Search = props => <div>
    <div>
        <label>Sort By: </label>
        <select onChange={(e) => props.updateSortBy(e.target.value)}>
            <option value='none'>none</option>
            <option value='name'>name</option>
            <option value='weight'>weight</option>
        </select>
    </div>
    <div>
        <label>Show greased only: </label>
        <input onClick={props.toggleShowGreasedOnly} type='checkBox' />
    </div>
</div>

export default Search