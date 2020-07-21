import React from 'react';
import * as name from './list';
const Search = props => {
   
 

 
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" value={props.search} onChange={props.onSearch} />
            <p>
                Searching for <strong>{props.search}</strong>.
            </p>
        </div>
    );
  };
  export default Search;

/******************************** */
