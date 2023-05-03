import React from 'react'

const Card = ({title="Demo Title", cardBody="Demo Body", cardButton="Demo Button"}) => {
  return (
    <>
    <div className="col-4 my-5">
    <div className="card" style={{width: "18rem"}}>
              <img
                src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {cardBody}
                </p>
                <a href="/#" className="btn btn-success">{cardButton}</a>
              </div>
            </div>
    </div>
    </>
  )
}

export default Card