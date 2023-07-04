import {Image, Stack} from '@chakra-ui/react';
import SectionTitle from "../component/SectionTitle";
import { Card,CardBody, Text, Box } from '@chakra-ui/react';
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Text from "@mui/material/Text";
import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
import { IconButton } from '@chakra-ui/react'
import {RiShareForwardLine} from "react-icons/ri"
const News = () => {
    // const theme = useTheme();
    const data = [{
        img: "https://th.bing.com/th/id/OIP.9lqMPP7b_NHYFJFcbKz7egHaE8?w=283&h=189&c=7&r=0&o=5&pid=1.7",
        description: " Make no bones about it.The female athlete triad can lead to problems with bone health",
        date: "21 December 2016"
    }, {
        img: "https://th.bing.com/th/id/OIP.9lqMPP7b_NHYFJFcbKz7egHaE8?w=283&h=189&c=7&r=0&o=5&pid=1.7",
        description: " Make no bones about it.The female athlete triad can lead to problems with bone health",
        date: "21 December 2016"
    }, {
        img: "https://th.bing.com/th/id/OIP.9lqMPP7b_NHYFJFcbKz7egHaE8?w=283&h=189&c=7&r=0&o=5&pid=1.7",
        description: " Make no bones about it.The female athlete triad can lead to problems with bone health",
        date: "21 December 2016"
    }, {
        img: "https://th.bing.com/th/id/OIP.9lqMPP7b_NHYFJFcbKz7egHaE8?w=283&h=189&c=7&r=0&o=5&pid=1.7",
        description: " Make no bones about it.The female athlete triad can lead to problems with bone health",
        date: "21 December 2016"
    }]
    return (
        <Stack className='news'>
            <div className="container">
            <Stack >
                <SectionTitle title="Latest News from Dr.McCormick's Practice" subTitle="Articles, Educational Patient, News, Blogs" flag='false' />
            </Stack>
            <Stack className="grid_item_two">
                {
                    data.map((ele) => {
                        return (
                            <Card sx={{ display: 'flex' }}>
                                <CardBody
                                   
                                />
                                <Image  
                                    sx={{ width: 151, height: '100%' }}
                                    src = {ele.img}
                                    // image={ele.img}
                                    alt="Live from space album cover"/>
                                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '3px 3px 0px 3px' }}>
                                    <CardBody sx={{ flex: '1 0 auto' }}>
                                        <Text fontSize='sm'  component="div" className="news-dec">
                                            {ele.description}
                                        </Text>
                                    </CardBody>
                                    {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> */}
                                    <Box className='card_share' sx={{ pl: 1, pr: 1 }}>
                                        <Text fontSize='sm' color="text.secondary" component="div" style={{ fontSize: '12px', color: '#626262' }}>
                                            {ele.date}
                                        </Text>
                                        <IconButton >
                                            <RiShareForwardLine className="icon_share" />
                                        </IconButton>
                                    </Box>
                                </Box>

                            </Card>
                        )
                    })
                }

            </Stack>
            </div>
        </Stack>
    )
}


export default News;