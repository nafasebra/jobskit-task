"use client"

import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function SearchForm() {
  const [search, setSearch] = useState('');

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('Search submitted:', search);
    }
  };

  return (
    <TextField
      variant="outlined"
      size="medium"
      fullWidth
      placeholder="جستجو برای شغل, کلمه کلیدی یا ..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleSearchSubmit}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color={'primary'} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchForm;
