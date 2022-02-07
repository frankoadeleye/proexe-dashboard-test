import React from "react";
import { SearchbarInput } from "./search-bar.styles";

interface sProp {
  keyword?: any;
  setKeyword?: any;
  onFocus?: any;
}

const SearchBar = ({ keyword, setKeyword, onFocus, ...otherProps }: sProp) => {
  return (
    <SearchbarInput
      key="random1"
      value={keyword}
      placeholder={"Search by user name..."}
      onFocus={onFocus}
      onChange={(e) => setKeyword(e.target.value)}
      {...otherProps}
    />
  );
};

export default SearchBar;
