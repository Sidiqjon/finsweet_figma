import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Pricing from "./pricing/Pricing";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import Layout from "./layout/Layout";
import NotFound from "./not-found/NotFound";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
};

export default MainRouters;

