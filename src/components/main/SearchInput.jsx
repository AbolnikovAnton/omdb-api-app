import React from 'react';
import {TextField} from "@mui/material";

const SearchInput = () => {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Enter movie title"
                variant="outlined"
                size='small'
                sx={{
                    width: 700,
                    maxWidth: '100%',
                }}/>
        </div>
    );
};

export default SearchInput;