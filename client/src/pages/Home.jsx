import React, { useRef } from 'react'
import { Header, ShoeList, MidPage } from '../components'

const Home = () => {
  const shoeListRef = useRef(null)

  const scrollToShoeList = () => {
    shoeListRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header onArrowClick={scrollToShoeList} />
      <div ref={shoeListRef}>
        <ShoeList />
      </div>
      <MidPage />
    </>
  )
}

export default Home
