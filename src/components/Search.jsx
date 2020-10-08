import React from 'react';

import SVGIcon from './SVGIcon';

function Search() {
  const handleSubmit = e => e.preventDefault();

  return (
    <form onSubmit={handleSubmit} className='search'>
      <input
        type='text'
        className='search__input'
        placeholder='Search hotels'
      />
      <button className='search__button'>
        <SVGIcon cName="search__icon" iconName="icon-magnifying-glass" />
      </button>
    </form>
  );
}

export default Search;
