// import Stack from "@mui/material/Stack";
import { Stack, Text, Link, Button } from "@chakra-ui/react";

// import Text from "@mui/material/Text";
// import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
// import Button from "@mui/material/Button";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
const ContactStrips = ({ title, down }) => {
  return (
    <Stack
      className={down === "false" ? "contact_comp" : "contact_comp_border"}
    >
      <Text
        fontSize='sm'
        style={
          down === "false"
            ? { fontSize: "20px" }
            : { fontSize: "29px", marginBottom: "25px" }
        }
      >
        {title}
      </Text>
      <Stack
        style={{ display: "flex", flexDirection: "row" }}
        className="comp-button"
      >
        <Button
          // variant="text"
          // startIcon={<CallOutlinedIcon />}
          color="primary"
          className={
            down === "false" ? "contact_number" : "contact_number_border"
          }
          style={{ color: "white", fontWeight: "700 !important" }}
        >
          844-988-1234
        </Button>
        <Button
          // variant="contained"
          // startIcon={<MailOutlineIcon />}
          className={
            down === "false" ? "contact_email" : "contact_email_border"
          }
          style={{ boxShadow: "initial" }}
        >
          EMAIL US TODAY
        </Button>
      </Stack>
    </Stack>
  );
};

export default ContactStrips;
