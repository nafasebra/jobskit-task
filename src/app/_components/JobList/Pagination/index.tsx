'use client'

import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function PaginationJobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter()
  
  const onChangePagination = (_, value: number) => {
    setCurrentPage(value)
    if (value) {
      params.set("page", value.toString());
    } else {
      params.delete("page");
    }
  
    const newUrl = `${pathname}?${params.toString()}`;
    replace(newUrl)
  }


  return (
    <Pagination
      count={6}
      page={currentPage}
      onChange={onChangePagination}
      color="primary"
      sx={{
        '& .MuiPaginationItem-root': {
          color: 'white',
          '&.Mui-selected': {
            color: 'black',
          },
        },
      }}
    />
  );
}

export default PaginationJobs;
