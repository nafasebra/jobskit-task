"use client"

import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function SearchForm() {
  const [search, setSearch] = useState('');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter()

  const handleSearchSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (search) {
        params.set("title", search.toString());
      } else {
        params.delete("title");
      }
    
      const newUrl = `${pathname}?${params.toString()}`;
      replace(newUrl)
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
