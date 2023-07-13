import React, { useEffect, useState, useCallback } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import axios from 'axios';
import Button from "@mui/material/Button";
import { Stack } from '@mui/material';
import Asynchronous from './AutoComplete';

const SearchGlobal = ({ sx, setApiResponse }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [newsText, setNewsText] = useState(null);

    const fetchData = useCallback(() => {
        if (selectedOption) {
            let formData = new FormData();
            formData.append('entityName', selectedOption.name);

            axios({
                method: 'get',
                url: 'https://649a9b61bf7c145d02391c63.mockapi.io/search',
                // data: formData,
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
            })
                .then((response) => {
                    console.log("🚀 ~ file: SearchGlobal.js:25 ~ .then ~ response:", response.data[0].PERSONAL_DETAILS.FULL_NAME)
                    const filteredArray = response.data.filter(obj => obj.PERSONAL_DETAILS.FULL_NAME === selectedOption.name);
                    console.log("🚀 ~ file: SearchGlobal.js:29 ~ .then ~ filteredArray:", filteredArray)
                    console.log("🚀 ~ file: SearchGlobal.js:17 ~ fetchData ~ selectedOption.name:", selectedOption.name)


                    // let formData1 = new FormData();
                    // formData1.append('entityName', response.data.PERSONAL_DETAILS.FULL_NAME);
                    setApiResponse(filteredArray[0]);  // Store the response
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                });
        } else {
            console.log("No option selected");
        }
    }, [selectedOption, setApiResponse]);  // entityData is now a dependency


    return (
        <>
            <Stack direction="row" spacing={2}>
                <Asynchronous
                    onOptionSelect={setSelectedOption}
                />
                <Button style={{ backgroundColor: '#db0011' }} onClick={fetchData}>Search</Button>
            </Stack >
        </>
    );
};

export default SearchGlobal;
