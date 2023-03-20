import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="myBG">
            <div className="text-logo text-center">
                <h3 className="mt-5 fs-1 fw-bold">Jika perut kosong harus makan <br/>
                    maka jiwa yang kosong harus liburan</h3>
                <h2 className="fs-3">Muda Berkelana, Tua Bercerita</h2>
                <p className="fs-2">Liburan Jadi Asik Bersama <strong>TOURIN</strong></p>
                <a class="btn btn-success btn-lg" href="/Place" role="button">Explore</a>
            </div>
        </div>
    )
}


export default Home