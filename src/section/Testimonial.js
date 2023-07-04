// import Stack from "@mui/material/Stack";
import {Stack, Card, CardBody, Text,Box,Image} from '@chakra-ui/react'
import SectionTitle from "../component/SectionTitle";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import ViewButton from '../component/ViewButton'
// import Box from '@mui/material/Box';



const Testimonial = () =>{
    let data = [
        {
          video:
            "https://th.bing.com/th/id/OIP.tNEiT66BP9kUzhrFIKPMvQAAAA?w=163&h=185&c=7&r=0&o=5&pid=1.7",
          description:
            "Lizards are a widespread group ",
            name : "Rachel T"
        },
        {
          video:
            "https://th.bing.com/th?q=Dr.+Rachel+Dean&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
          description:
            "Lizards are a widespread group",
            name : "Mark D"
        },
        {
          video:
            "https://th.bing.com/th?q=Dr.+Rachel+Dean&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
          description:
            "Lizards are a widespread group Lizards are a widespread group",
            name : "Kerry K"
        },
      ];
    return(
      
        <Stack style = {{padding : '30px 0px 60px 0px'}} className="testimonial">
          <div className="container">
        <Stack style = {{marginTop : '25px'}}>
        <SectionTitle  title = "TESTIMONIALS" subTitle = "Loresum ips dolot sit confilit doremaens" flag = 'false' />
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
                />
                <CardBody>
                <Text fontSize='sm' color="text.secondary" className = 'testimonials_name'>
                    {ele.name}
                  </Text>
                  <Text fontSize='sm' color="text.secondary" style = {{textAlign : 'center', padding : '0px 12px',fontStyle: 'italic'}}>
                    {ele.description}
                  </Text>
                </CardBody>
              {/* </CardActionArea> */}
            </Card>
          );
        })}
      </Stack>
      <ViewButton text = "View All Stories" flag = 'false' className="button"/>
      </div>
    </Stack>
   
    )
}


export default Testimonial;