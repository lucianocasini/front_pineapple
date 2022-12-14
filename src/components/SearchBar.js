import React, { useState } from "react";
import { useNavigate } from "react-router";

import { Box, styled, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = styled(Box)({
  display: "flex",
  width: "100%",
});

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchedValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`search/products?str=${searchedValue}`);
    setSearchedValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "30%" }}>
        <SearchBox>
          <TextField
            id="full-width-text-field"
            value={searchedValue}
            onChange={handleSearch}
            placeholder="Buscá tu próximo celular..."
            size="small"
            variant="outlined"
            autoComplete="off"
            sx={{
              backgroundColor: "white",
              borderRadius: "16px",
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <IconButton sx={{ color: "#ed7203" }} type="submit">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          ></TextField>
        </SearchBox>
      </form>
    </>
  );
};

export default SearchBar;
