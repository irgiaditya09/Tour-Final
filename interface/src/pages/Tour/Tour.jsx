import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Tour = () => {
    const [data, setData] = useState([])
    const URL = 'http://localhost:3000/api'

    const getTours = async () => { // manggil API
    try {
        let temp = await axios({
            url: `${URL}/tours/`,
            method: "GET",
        })
        console.log(temp.data)
        setData(temp.data)
    } catch (err) {
        alert(err)
    }
  }

  useEffect(() => {
      getTours()
  }, [])


    return (
        <div className="container">
      <h3 className="text-center mt-2 fw-bold"> Welcome to our Tours</h3>
      <div className="row">
        <hr />

        {data.length !== 0 ? (
          data.map((tour) => {
            const { id, name, image, price, PlaceId, TypeId } = tour;

            return (
              // <div key={id} className="row">
              <div key={id} className="col-4">
                <div className="card mt-2 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <img className="img card-img-top" src={image} alt="imagesDB"/>
                  <p className="mt-2 fs-4 fw-bold text-center">{name}</p>
                  <p className="fs-5">Rp.{price}</p>
                  <p className="fs-5">Code Place: {PlaceId}</p>
                  <p className="fs-5">Code: {TypeId}</p>
                  <a class="btn btn-success btn-sm fs-4" href="#" role="button">Booking &#128525;</a>
                </div>
              </div>
              // </div>
            );
          })
        ) : (
          // <Loading />
          <h1>cuy</h1>
        )}
      </div>
    </div>
  );
};
      


export default Tour;