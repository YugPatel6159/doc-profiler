// import Button from "@mui/material/Button";
import { Button, Box } from '@chakra-ui/react';
// import Box from '@mui/material/Box';

const ViewButton = ({text,flag}) => {
    return (
        <Box textAlign='center'>
            <Button
                // color="primary"
                size="small"
                // variant="outlined"
                className="view_all"
                style = {flag === 'true' ? {border : '1px solid white',color : 'white'} : {}}
            >{text}</Button>
        </Box>

    )
}

export default ViewButton;