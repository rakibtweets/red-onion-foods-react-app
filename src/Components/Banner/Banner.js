import React from 'react';
import './Banner.css';
import bannerImg from '../../bannerbackground.png';

const Banner = () => {
  let style = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: 'center',
    backgroundSize: '110%',
    height: '500px',
  };
  return (
    <div className=" container-fluid">
      {/* <img src={bannerImg} className="img-fluid" alt="" /> */}
      <div
        style={style}
        className="img-fluid d-flex justify-content-center align-items-center"
      >
        <div className=" text-center">
          <h2 className="fw-bold">Best Food You Are Lookoing For</h2>
          <div className="input-group p-3">
            <input
              className="form-control search-field"
              type="text"
              placeholder="Search For Foods"
            />
            <button className="btn btn-danger px-4 search-btn ">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
