import Stack from "@mui/material/Stack";
// import Text from "@mui/material/Typography";
import { Text } from "@chakra-ui/react";

const SectionTitle = ({title,subTitle,flag}) => {
  return (
    <Stack className="section_title">
      <Text fontSize='sm' className="section_header">
       {title}
      </Text>
      <Text fontSize='sm' className= "section_body" style = {flag === 'true' ? {color : 'white'} : {}}>
      
        {subTitle}
      </Text>
      <hr />
    </Stack>
  );
};

export default SectionTitle;
