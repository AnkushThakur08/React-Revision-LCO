import React from 'react'
import Card from './Card'

const GetInTouch = () => {
  return (
    <>
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
            <Card />

            <Card title="Ankush" cardBody="Hello Guys how are you" cardButton="Click Me"  />

            <Card title="Cricket" cardBody="Let's Play Cricket!!" cardButton='Click Here' />
            
            <Card />

            
        </div>
      </div>
    </section>
    </>
  )
}

export default GetInTouch