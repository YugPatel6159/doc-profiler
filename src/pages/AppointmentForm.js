import React from "react";
import {
  Grid,
  GridItem,
  Card,
  CardBody,
  Text,
  Flex,
  Divider,
  Heading,
  Stack,
  Input,
  Select,
  Textarea,
  Button,
  Image,
} from "@chakra-ui/react";
import { formik, useFormik } from "formik";
import * as Yup from "yup";

const AppointmentForm = () => {
  const departments = [
    "Cardiology",
    "Dermatology",
    "Gastroenterology",
    "Neurology",
    "Orthopedics",
  ];

  const formik = useFormik({
    initialValues: {
      department: "",
      patientName: "",
      email: "",
      phone: "",
      message: "",
      date: "",
    },
    validationSchema: Yup.object({
      department: Yup.string().required("Required"),
      patientName: Yup.string().required("Required"),
      email: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
      date: Yup.string().required("Required"),
    }),
    onSubmit: (values,action) => {
      action.resetForm();
      console.log(values);
    },
  });
  const { values, handleChange, handleSubmit } = formik;
  return (
    <>
      <Image src="/appointment1.jpg" width={"100%"} height={"400px"} />
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        style={{
          position: "absolute",
          top: "70px",
        }}
      >
        <Card
          direction={{ base: "column", sm: "row" }}
          width={"70%"}
          overflow="hidden"
          boxShadow={"lg"}
        >
          <CardBody w={{ base: "100%", sm: "50%" }}>
            <Grid templateColumns="4fr 1fr 8fr" gap={4}>
              <GridItem>
                <Stack direction={"column"}>
                  <Heading fontSize="lg">EMERGENCY CASES</Heading>
                  <Heading fontSize="l" mt={5}>
                    Call Now:
                  </Heading>
                  <Text fontSize="4xl" color={"blue.500"} mt={2}>
                    +91 9876543210
                  </Text>
                </Stack>
                <Stack mt={4}>
                  <Text mt={2}>
                    <b>Address 1:</b> 6110 Athens Place Washington, DC
                    20521-7100
                  </Text>
                  <Text mt={2}>
                    <b>Address 2:</b> 6110 Athens Place Washington, DC
                    20521-7100
                  </Text>
                  <Text mt={2}>
                    <b>Working Time:</b>Mon-Sat / 9:00 AM - 5:00 PM, Sunday /
                    08:00 AM - 12:00 PM
                  </Text>
                  <Text mt={2}>
                    <b>Mail:</b> esupport@medical.com
                  </Text>
                </Stack>
              </GridItem>
              <GridItem justifyContent={"center"} display={"flex"}>
                <Divider orientation="vertical" borderColor="gray.200" />
              </GridItem>
              <GridItem pe={5}>
                <Stack>
                  <Heading fontSize="lg">REQUEST APPOINTMENT</Heading>
                </Stack>
                <form onSubmit={handleSubmit}>
                  <Grid templateColumns={"4fr 4fr"} gap={4} mt={5}>
                    <GridItem>
                      <Input
                        size={"lg"}
                        placeholder="Name*"
                        id="patientName"
                        name="patientName"
                        type="text"
                        onChange={handleChange}
                        value={values.patientName}
                      />
                      {formik.touched.patientName &&
                        formik.errors.patientName && (
                          <Text color="red">{formik.errors.patientName}</Text>
                        )}
                    </GridItem>
                    <GridItem>
                      <Input
                        size={"lg"}
                        placeholder="Phone*"
                        id="phone"
                        name="phone"
                        type="number"
                        onChange={handleChange}
                        value={values.phone}
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <Text color="red">{formik.errors.phone}</Text>
                      )}
                    </GridItem>
                    <GridItem>
                      <Input
                        size={"lg"}
                        placeholder="Email*"
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        value={values.email}
                      />

                      {formik.touched.email && formik.errors.email && (
                        <Text color="red">{formik.errors.email}</Text>
                      )}
                    </GridItem>
                    <GridItem>
                      <Input
                        placeholder="Date*"
                        size="lg"
                        type="date"
                        id="date"
                        name="date"
                        onChange={handleChange}
                        value={values.date}
                      />
                      {formik.touched.date && formik.errors.date && (
                        <Text color="red">{formik.errors.date}</Text>
                      )}
                    </GridItem>
                    <GridItem>
                      <Stack alignItems="center">
                        <Select
                          placeholder="Departments"
                          size={"lg"}
                          id="department"
                          name="department"
                          onChange={handleChange}
                          value={values.department}
                        >
                          {departments.map((department) => (
                            <option key={department} value={department}>
                              {department}
                            </option>
                          ))}
                        </Select>
                      </Stack>
                        {formik.touched.department &&
                          formik.errors.department && (
                            <Text color="red">{formik.errors.department}</Text>
                          )}
                    </GridItem>
                  </Grid>
                  <Textarea
                    mt={4}
                    size={"lg"}
                    placeholder="Message*"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <Text color="red">{formik.errors.message}</Text>
                  )}
                  <Button
                    colorScheme="green"
                    mt={4}
                    size={"lg"}
                    variant="solid"
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </GridItem>
            </Grid>
          </CardBody>
        </Card>
      </Flex>
    </>
  );
};

export default AppointmentForm;
