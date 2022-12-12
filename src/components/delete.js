return (
  <section className='banner' id='home'>
    <Container>
      <Row ClassName='align-items-center'>

        <Col xs={12} md={6} xl={7} style={{backgroundColor: 'green'}}>
          <span className='tagline'>Welcome to my Portfolio</span>
          <h1> Hi There!{' '}</h1>  <h1><span className='wave wrap' role='img' aria-labelledby='wave'> 👋🏻 </span></h1>
          <h1>{`I'm Kevin`} </h1> 
          <h1><span className='wrap'> <HomeType/> {text} </span></h1>
          <p>Here are a few technologies I've been working with recently:</p>
        </Col>

        

        <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt='Header Img'/>
        </Col>

      </Row>
    </Container>
  </section>
)
}