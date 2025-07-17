import { Box } from '@mui/material';
import React from 'react'
import "./CancellationPolicy.scss";
import TermAndPolicy from "../../components/Reusable/TermAndPolicy/TermAndPolicy"
import { cancellationPolicy } from '../../Data';
const CancellationPolicy = () => {
  return (
    <Box>
        <TermAndPolicy arrayName={cancellationPolicy}/>
    </Box>
  )
}

export default CancellationPolicy