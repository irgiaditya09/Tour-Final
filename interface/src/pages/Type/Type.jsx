import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Type = () => {
    const [data, setData] = useState([])
    const URL = 'http://localhost:3000/api'

    const getTypes = async () => { // manggil API
    try {
        let temp = await axios({
            url: `${URL}/types/`,
            method: "GET",
        })
        console.log(temp.data)
        setData(temp.data)
    } catch (err) {
        alert(err)
    }
  }

  useEffect(() => {
      getTypes()
  }, [])


    return (
        <div className="container">
      <h3 className="text-center mt-2 fw-bold"> Welcome to our Tour Type</h3>
      <div className="row">
        <hr />

        {data.length !== 0 ? (
          data.map((type) => {
            const { id, name, image, rundown } = type;

            return (
              // <div key={id} className="row">
              <div key={id} className="col-4">
                <div className="card mt-2 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <img className="img card-img-top" src={image} alt="imagesDB"/>
                  <p className="mt-2 fs-4 fw-bold text-center">{name}</p>
                  <p className="fs-5">{rundown}</p>
                  <a class="btn btn-success btn-sm fs-4" href="/Tour" role="button">Show Price &rarr;</a>
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
      


export default Type;