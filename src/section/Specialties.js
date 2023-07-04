// import Stack from '@mui/material/Stack';
import { Stack,Card,CardBody,Text,Button, Image } from '@chakra-ui/react';
import * as React from 'react';
// import Card from '@mui/material/Card';
// import {  } from '@chakra-ui/react';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Button from "@mui/material/Button";
import SectionTitle from "../component/SectionTitle"
const Specialties = () => {

  let data = [

    {
      img: "https://th.bing.com/th/id/OIP.ByaWy_M55SxwopliSsOE-gHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
      title: "Shoulder",
      description: "Sometimes, shoulder pain may be due to a problem in another area of the body, such as the neck or lungs. This is called referred pain."

    }, {
      img: "https://th.bing.com/th/id/OIP.ByaWy_M55SxwopliSsOE-gHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
      title: "Shoulder",
      description: "Sometimes, shoulder pain may be due to a problem in another area of the body, such as the neck or lungs. This is called referred pain."

    }, {
      img: "https://th.bing.com/th/id/OIP.ByaWy_M55SxwopliSsOE-gHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
      title: "Shoulder",
      description: "Sometimes, shoulder pain may be due to a problem in another area of the body, such as the neck or lungs. This is called referred pain."

    }, {
      img: "https://th.bing.com/th/id/OIP.ByaWy_M55SxwopliSsOE-gHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
      title: "Shoulder",
      description: "Sometimes, shoulder pain may be due to a problem in another area of the body, such as the neck or lungs. This is called referred pain. "

    }, {
      img: "https://th.bing.com/th/id/OIP.ByaWy_M55SxwopliSsOE-gHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
      title: "Shoulder",
      description: "Sometimes, shoulder pain may be due to a problem in another area of the body, such as the neck or lungs. This is called referred pain."

    }, {
      img: "https://th.bing.com/th/id/OIP.ByaWy_M55SxwopliSsOE-gHaEK?w=324&h=182&c=7&r=0&o=5&pid=1.7",
      title: "Shoulder",
      description: "Sometimes, shoulder pain may be due to a problem in another area of the body, such as the neck or lungs. This is called referred pain."

    }

  ]

  return (
    <Stack className='spcecialties-wrap'>
      <div className='container'>
      <Stack className='spcecialties'>
        <SectionTitle title = "SPECIALTIES" subTitle = "Non-surgical Care, injection Approches, Minimally-invasive Surgical Approches" flag = 'false'/>
      </Stack>
      <Stack className="grid_section" >
        {
          data.map((ele) => {

            return (
              <Card sx={{ maxWidth: 280 }} className = "flex_display">
                {/* <CardActionArea  className = "flex_display"> */}
                  <Image
                    component="img"
                    height="190"
                    src={ele.img}
                    alt="green iguana"
                  />
                  <CardBody  className = "flex_display">
                    <Text fontSize='sm'  className='spcecialties-card-title'>
                      {ele.title}
                    </Text>
                    <Text fontSize='sm' color="text.secondary"  className='spcecialties-card-description' style = {{textAlign : 'center'}}>
                      {ele.description}
                    </Text>
                    <Button size="small"  className="view_btn">
                      View More
                    </Button>
                  </CardBody>
                   
                {/* </CardActionArea> */}
              </Card>

            )
          })
        }
      </Stack>
      </div>
    </Stack>

  )
}

export default Specialties;
