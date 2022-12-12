import React from 'react'
import Typewriter from 'typewriter-effect'

const HomeType = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'React Developer',
          'Full Stack Developer',
          'MERN Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default HomeType;