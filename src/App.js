import React from 'react';
import Menu from './components/Menu'
import  dadosIniciais  from  './data/dados_iniciais.json' ;
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function  App ( )  {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle = { InitialData . categories [ 0 ] . videos [ 0 ] . title }
        url = { InitialData . categories [ 0 ] . videos [ 0 ] . url }
        videoDescription = { "What is Front-end? Working in the area, HTML, CSS and JavaScript are part of the routine of developers and developers. But what do they do, anyway? Find out with Vanessa!" }
      />

      <Carousel
        ignoreFirstVideo
        category = { dadosIniciais . categories [ 0 ] }
      />

      <Carousel
        category = { dadosIniciais . categories [ 1 ] }
      />

      <Carousel
        category = { dadosIniciais . categories [ 2 ] }
      />      

      <Carousel
        category = { dadosIniciais . categories [ 3 ] }
      />      

      <Carousel
        category = { dadosIniciais . categories [ 4 ] }
      />      

      <Carousel
        category = { dadosIniciais . categories [ 5 ] }
      />      

      <Footer />
    </div>
  ) ;
}

export  default  App ;