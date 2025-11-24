import React from 'react';
import styles from './BussinessCard.module.css';
import logo from '/img/logo.png';

const BusinessCard: React.FC = () => {
  return (
    <div className={styles.bigwrapper}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {/* FRONT */}
          <div className={styles.front}>
            {/* Left — Logo */}
            <div className={styles.frontLeft}>
              <img className={styles.img} src={logo} alt="Tetiana Murashova logo" />
              <h4>
                <span>Front End</span> Developer
              </h4>
              <img src="img/github_qr.png" alt="GitHub QR Code" className={styles.qr} />
            </div>

            {/* Right — Contact Info */}
            <div className={styles.frontRight}>
              {/* Person */}
              <div className={styles.person}>
                <i className="fas fa-user-tie" aria-hidden="true"></i>
                <div>
                  <h4>Tetiana Murashova</h4>
                  <p>Front End Developer</p>
                </div>
              </div>

              {/* Phone */}
              <div className={styles.text}>
                <i className="fas fa-phone" aria-hidden="true"></i>
                <a href="tel:+61490864845">+61&nbsp;490&nbsp;864&nbsp;845</a>
              </div>

              {/* Email */}
              <div className={styles.text}>
                <i className="fas fa-envelope-open" aria-hidden="true"></i>
                <a href="mailto:tetiana.murashova@gmail.com">tetiana.murashova@gmail.com</a>
              </div>

              {/* Location */}
              <div className={styles.text}>
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>Melbourne, Australia</span>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className={styles.back}>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
