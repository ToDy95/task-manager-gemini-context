import React, { useContext } from 'react';
import { globalContext } from "../context/Context";
const Search = () => {
  const { searchInput } = useContext(globalContext)
  const [inputValue, setInputValue] = searchInput

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '20px 40px',
      }}>
      <input
        type="search"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        style={{ width: 400, height: 50, borderRadius: 8 }}
        placeholder="Search something..."
      />
    </div>
  );
};

export default Search;
