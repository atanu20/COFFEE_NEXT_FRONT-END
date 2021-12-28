import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import NavBar from '../components/NavBar';
import Homee from '../components/Home';
import About from '../components/About';
import Menu from '../components/Menu';
import Products from '../components/Products';
import Review from '../components/Review';
import Contact from '../components/Contact';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

export default function Home() {
  const [SEARCH, setSEARCH] = useState(false);

  return (
    <>
      <NavBar />
      <Homee />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />

      <Blogs />

      <Footer />
    </>
  );
}
