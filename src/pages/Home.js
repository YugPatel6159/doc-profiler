import React from 'react'
import Header from '../section/Header'
import Banner from '../section/Banner'
import { Stack } from '@chakra-ui/react'
import Specialties from '../section/Specialties'
import ContactStrips from '../component/ContactStrips'
import DoctorBanner from '../section/DoctorBanner'
import SurgicalVideo from '../section/SurgicalVideo'
import Testimonial from '../section/Testimonial'
import News from '../section/News'
import AppointmentForm from './AppointmentForm'
import Footer from '../section/Footer'

const Home = () => {
  return (
    <>
    <Header />
          <Banner />
          <Stack id="specialities">
            <Specialties />
          </Stack>
          <ContactStrips title="Meet Dr.McCormick Today" down="false" />
          <DoctorBanner />
          <Stack id="surgical">
            <SurgicalVideo />
          </Stack>
          <ContactStrips title="Schedule an Appointment Today" down="false" />
          <Stack id="testimonial">
            <Testimonial />
          </Stack>
          <Stack id="news">
            <News />
          </Stack>
          <Stack id="contact">
            <ContactStrips
              title="For All Appointments and inquiries"
              down="true"
            />
          </Stack>
          <Stack id="appointmentForm">
          </Stack>
          <Footer />
    </>
  )
}

export default Home