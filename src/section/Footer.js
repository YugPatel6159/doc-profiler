// import Stack from "@mui/material/Stack";
import { Stack, Text,Link } from "@chakra-ui/react";
// import Text from "@mui/material/Text";
// import Link from '@mui/material/Link';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faLinkedin,
    faGoogle
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    let sections1 = [
        {
            title: "The doctor",
            url: "#"
        },
        {
            title: "Specialities",
            url: "#"
        },
        {
            title: "Procedures",
            url: "#"
        },
        {
            title: "Patients Stories",
            url: "#"
        },
        {
            title: "News",
            url: "#"
        },
        {
            title: "Contact us",
            url: "#"
        }
    ]



    let sections2 = [
        {
            title: "Shoulder",
            url: "#"
        },
        {
            title: "Hip",
            url: "#"
        },
        {
            title: "Knee",
            url: "#"
        },
        {
            title: "Cartilage",
            url: "#"
        },
        {
            title: "Novel Procedure",
            url: "#"
        },
        {
            title: "In office Treatments",
            url: "#"
        }
    ]


    return (
        <Stack className='footer'>
            <div className="container">
            <Stack>
                <Stack>
                    <Text fontSize='3xl' className='footer_item_doctor'>
                        Dr.Frank <br />  McCormick MD
                    </Text>

                </Stack>
                <Text fontSize='sm' className='footer_item_list_description'>
                    Dr.Frank McCormick MD is an orthopedic surgeon who Specializes in outpatent sports <br />
                    medicine.cartilage/meniscal/stem cell transplantation. joint preservation and  <br /> orthopedic
                    treatment of shoulder,hip and knee.
                </Text>

                <Stack className = 'social-media'>
                    <button
                        className="social-icon facebook">
                        <FontAwesomeIcon icon={faFacebookF}  />
                    </button>
                    <button className="social-icon twitter">
                        <FontAwesomeIcon icon={faTwitter}  />
                    </button>
                    <button className="social-icon google">
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    <button className="social-icon linkedin">
                        <FontAwesomeIcon icon={faLinkedin}  />
                    </button>
                   <Text className = 'copy_right'>© 2016 All Rights Reserved</Text>
                </Stack>
            </Stack>
            <Stack className='flex_list'>
                <Text fontSize='sm' className='footer_item_list_title'>
                    SITEMAP
                </Text>
                <Stack className='flex_list'>
                    {
                        sections1.map((section) => (

                            <Link
                                color="inherit"
                                // noWrap
                                key={section.title}
                                // variant="body2"
                                fontSize='sm'
                                href={section.url}
                                sx={{ flexShrink: 0 }}
                                className='footer_item_list'
                            >
                                {section.title}
                            </Link>

                        ))
                    }
                </Stack>
            </Stack>
            <Stack className='flex_list'>
                <Text fontSize='sm' className='footer_item_list_title'>
                    HIGHTLIGHTS
                </Text>
                <Stack className='flex_list'>
                    {
                        sections2.map((section) => (

                            <Link
                                // color="inherit"
                                // noWrap
                                key={section.title}
                                variant="body2"
                                href={section.url}
                                sx={{ flexShrink: 0 }}
                                className='footer_item_list'
                            >
                                {section.title}
                            </Link>

                        ))
                    }
                </Stack>
            </Stack>
            </div>
        </Stack>
    )
}


export default Footer;