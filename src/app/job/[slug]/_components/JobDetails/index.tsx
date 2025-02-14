import { Card, Typography } from '@mui/material'
import React from 'react'

function JobDetails() {
  return (
    <>
      <Card sx={{padding: "1rem"}}>
        <Typography textAlign={"center"}>درباره شغل</Typography>
      </Card>
      <Card sx={{padding: "1rem"}}>
        <Typography textAlign={"center"}>درباره شرکت</Typography>
      </Card>
    </>
  )
}

export default JobDetails