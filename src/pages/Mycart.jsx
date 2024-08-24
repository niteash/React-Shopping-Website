import React from 'react'
import { Container } from '../components/Container'
import BreadCrumb from '../components/BreadCrumb'
import CartSection from '../components/CartSection'

const Mycart = () => {
  return (
   <Container className="flex-grow px-5">
    <BreadCrumb currentPageTitle="My cart"/>
    <CartSection />
   </Container>
  )
}

export default Mycart