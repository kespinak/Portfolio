import React from 'react'
import Typewriter from 'typewriter-effect'

const HomeType = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Developer',
          'Software Engineer',
          'MERN Stack Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default HomeType;