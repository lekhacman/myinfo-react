import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ goToSingPass }) {
  return (
    <main>
      <section className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex align-items-center full-screen-height">
              <div className="hero-content-div">
                <div className="hero-content">
                  <h1>MyInfo Demo Application</h1>
                  <p>
                    This demo is an example of how your application should
                    integrate with MyInfo.
                  </p>
                  <hr />
                  <p>
                    To start the SingPass login and consent process, click on
                    the "Retrieve MyInfo" button below.
                  </p>
                </div>
                <form id="formAuthorise">
                  <a href="/" onClick={goToSingPass} className="btn2">
                    Retrieve MyInfo
                  </a>
                </form>
                <hr />
                <small>
                  Note: refer to the{' '}
                  <a
                    href="https://www.ndi-api.gov.sg/library/trusted-data/myinfo/resources-personas"
                    target="_BLANK"
                    rel="noopener noreferrer"
                  >
                    Personas
                  </a>{' '}
                  on the NDI Developer and Partner Portal for the test accounts
                  to be used.
                </small>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-center full-screen-height mobile-hidden">
              <div className="right-img">
                <div data-depth="0.40" className="layer">
                  <div className="right-img-bg-1" />
                </div>
                <div data-depth="0.30" className="layer">
                  <div className="right-img-bg-2" />
                </div>
                <div data-depth="0.40" className="layer">
                  <img
                    className="right-img-img"
                    src="images/banner-personal.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Home.propTypes = {
  goToSingPass: PropTypes.func,
};
