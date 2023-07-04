import { LinkBox, Stack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Button } from "@chakra-ui/react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import AppointmentForm from "../component/AppointmentForm";
const Header = () => {
    const navigate = useNavigate();
  let sections = [
    {
      title: "HOME",
      url: "#home",
    },
    {
      title: "THE DOCTOR",
      url: "#surgical",
    },
    {
      title: "SPECIALITIES",
      url: "#specialities",
    },
    {
      title: "PROCEDURES",
      url: "#surgical",
    },
    {
      title: "EDUCATION",
      url: "#",
    },
    {
      title: "PATIENTS STORIES ",
      url: "#testimonial",
    },
    {
      title: "NEWS",
      url: "#news",
    },
    {
      title: "CONTACT",
      url: "#contact",
    },
  ];

  return (
    <Stack>
      <Stack className="header">
        <div className="container">
          <Stack>
            <Text fontSize="4xl" className="section_header">
              Dr.Frank McCormick MD
            </Text>
            <Text fontSize="sm" className="section_body">
              othopedic surgeon
            </Text>
          </Stack>
          <Stack
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Text fontSize="sm" className="operator-available">
                Operater Available
              </Text>
              <Text fontSize="sm" className="available_time">
                Monday to Saturday
              </Text>
              <Text fontSize="sm" className="available_time">
                8 am to 9 pm
              </Text>
            </Stack>

            <Stack>
              <Stack
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Button
                  // variant="text"
                  // startIcon={<CallOutlinedIcon  style = {{color : 'green', fontSize:'29px'}}/>}
                  // color="primary"
                  className="contact_number"
                >
                  844-988-1234
                </Button>
                <Button
                  // variant="contained"
                  // startIcon={<MailOutlineIcon />}
                  className="email-today"
                >
                  EMAIL US TODAY
                </Button>
               
                  <Button
                    // variant="contained"
                    className="email-today"
                    onClick={() => {
                      navigate("/appointment");
                    }}
                  >
                    BOOK APPOINTMENT
                  </Button>
                
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Stack>
      <Stack className="navbar">
        <div className="container">
          <div className="navbar-wrap">
            {sections.map((section) => (
              <Link
                // color="inherit"
                // noWrap
                key={section.title}
                fontSize="sm"
                href={section.url}
                sx={{ p: 1, flexShrink: 0 }}
                className="navbar_item"
              >
                {section.title}
              </Link>
            ))}
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default Header;
