import { NextPage } from 'next'
import { useEffect } from 'react'
import Navbar from '../components/organisms/Navbar'
import MainBanner from '../components/organisms/MainBanner'
import TransactionsStep from '../components/organisms/TransactionsStep'
import FeaturedGame from '../components/organisms/FeaturedGame'
import Reached from '../components/organisms/Reached'
import Story from '../components/organisms/Story'
import Footer from '../components/organisms/Footer'
import AOS from 'aos'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionsStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  )
}

export default Home
