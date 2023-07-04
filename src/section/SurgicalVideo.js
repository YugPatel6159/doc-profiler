// import Stack from "@mui/material/Stack";
import { Stack, Card, CardBody, Text, Button, Image } from "@chakra-ui/react";
import SectionTitle from "../component/SectionTitle";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import ViewButton from '../component/ViewButton'
// import Box from '@mui/material/Box';
let data = [
  {
    video:
      "https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg",
    description:
      "Lizards are a widespread group ",
  },
  {
    video:
      "https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg",
    description:
      "Lizards are a widespread group",
  },
  {
    video:
      "https://cdn.britannica.com/76/82676-050-E95B5C00/nurses-patients-care-procedures.jpg",
    description:
      "Lizards are a widespread ",
  },
];

const SurgicalVideo = () => {
  return (
    <Stack className="surgical_video">
      <div className="container">
        <Stack style = {{color : 'white'}}>
        <SectionTitle  title = "  SURGICAL VIDEO" subTitle = "Loresum ips dolot sit confilit doremaens" flag = 'true' />
        </Stack>
      <Stack className="grid_section">
        {data.map((ele) => {
          return (
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: "0px" }}>
              {/* <CardActionArea> */}
                <Image
                  component="img"
                  height="200"
                  src={ele.video}
                  alt="green iguana"
                 style = {{position : 'relative'}}
                />
                <CardBody>
                  <Text fontSize='sm' color="text.secondary" style = {{textAlign : 'center', padding : '0px 12px'}}>
                    {ele.description}
                  </Text>
                </CardBody>
              {/* </CardActionArea> */}
            </Card>
          );
        })}
      </Stack>
      <ViewButton  text = " View All Video " flag = 'true' className="button"/>
      </div>
    </Stack>
  );
};

export default SurgicalVideo;
