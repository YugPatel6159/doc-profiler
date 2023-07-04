// import Stack from "@mui/material/Stack";
import { Stack } from '@chakra-ui/react'
// import Typography from "@mui/material/Typography";
import { Text } from "@chakra-ui/react";
// import Button from "@mui/material/Button";
import { Button } from "@chakra-ui/react";

const Banner = () => {
  return (
    <Stack className="banner">
      <div className="container">
      <Stack className = 'banner_description'>
        <Text fontSize='4xl' className="banner_title">RECOVER,</Text>
        <Text fontSize='4xl' className="banner_title" 
        // gutterBottom
        >
          HEAL & EXCEL
        </Text>
        <Text fontSize='sm' 
        // gutterBottom
        >
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Text>
        <Button size="small" className="read_btn"  sx={{ marginTop: 2 }} >
          Read More
        </Button>
      </Stack>
      </div>
    </Stack>
  );
};

export default Banner;