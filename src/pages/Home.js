import React, { useEffect, useState } from 'react';
import BigCarousel from '../components/BigCarousel';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Home() {
  const [categories, setCategories] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchJewelry();
    fetchMen();
    fetchWomen();
    fetchElectronics();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories',
      );
      const data = await response.json();

      await setCategories(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchJewelry = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/jewelery`,
      );
      const data = await response.json();

      await setJewelery(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMen = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/men's clothing`,
      );
      const data = await response.json();
      await setMen(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWomen = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/women's clothing`,
      );
      const data = await response.json();

      await setWomen(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchElectronics = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/electronics`,
      );
      const data = await response.json();

      await setElectronics(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <BigCarousel />
        <div>
          <div className="flex flex-wrap lg:flex-row flex-col gap-y-10 mx-auto">
            <Card
              category={categories[0]}
              electronics={electronics}
            />
            <Card
              category={categories[1]}
              jewelery={jewelery}
            />
            <Card
              category={categories[2]}
              men={men}
            />
            <Card
              category={categories[3]}
              women={women}
            />
          </div>
        </div>
        <Footer />
      </div>
      <Sidebar />
    </>
  );
}

export default Home;
