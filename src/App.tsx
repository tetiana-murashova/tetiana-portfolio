// App.tsx
import React from 'react';
import styles from './App.module.css';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Feedback from './components/Feedback/Feedback';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import logo from '/img/logo.png';

const Navbar: React.FC = () => (
  <nav className={styles.navbarWrapper}>
    <div className={styles.navbar}>
      <a href="#home" className={styles.brand}>
        <img src={logo} alt="Tetiana Murashova Logo" className={styles.logo} />
        <h5 className={styles.brandText}>Tetiana Murashova</h5>
      </a>
      <div className={styles.menu}>
        <a href="#about" className={styles.menuLink}>
          About
        </a>

        <a href="#portfolio" className={styles.menuLink}>
          Portfolio
        </a>
        <a href="#contacts" className={styles.menuLink}>
          Contact
        </a>
      </div>
    </div>
  </nav>
);

const App: React.FC = () => (
  <>
    <Navbar />
    <main className={styles.main}>
      <Banner />
      <About />
      <Portfolio />
      <Feedback />
      <Contacts />
      <Footer />
    </main>
  </>
);

export default App;
