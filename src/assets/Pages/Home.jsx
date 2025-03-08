import React from 'react'
import Layout from '../../Components/Layout/Layout'
import MainSection from './Sections/MainSection'
import About from './Sections/About'
import HomeServiceSection from './Sections/HomeServiceSection'
import OurServices from './Sections/OurServices'
import ClientSection from './Sections/ClientSection'


const Home = () => {
  return (
    <Layout>

        <MainSection />
        <About/>
        <HomeServiceSection/>
        <OurServices/>
        <ClientSection/>


    </Layout>
  )
}

export default Home