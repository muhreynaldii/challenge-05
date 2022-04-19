import React from 'react';
import Navigationbar from './../Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';

function Layout() {
  return (
    <>
      <Navigationbar/>
      <div>
          <Outlet/>
      <Footer/>
    </div>
    </>
  );
}

export default Layout;