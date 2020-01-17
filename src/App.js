import React from 'react';
import Navbar from './state/State';
import Isi from './props/Prop';
import './App.css';

export default function App() {
  return (
      <div id="wrapper">
        <Navbar/>
        <Isi menu1="TERBARU" menu2="ZALORAL" menu3="PAKAIAN"
             menu4="SEPATU" menu5="TAS" menu6="JAM & AKSESORIS"
             menu7="BAJU MUSLIM" menu8="SPORTS" menu9="BATIK"
             menu10="BEAUTY" menu11="BRANDS" menu12="FLAGSHIP STORES"
             menu13="SALE"

             menu14={require('./images/aa.png')}
             menu15={require('./images/bb.png')}
             menu16={require('./images/aaa.png')}
             menu17={require('./images/bbb.png')}
             menu18={require('./images/cc.png')}

             content1={require('./images/home.gif')}
             content2={require('./images/image22.png')}
             content3={require('./images/logo-1.jpg')}
             content4={require('./images/image.jpg')}

             brands1={require('./images/logo_brand/zalora.jpg')}
             brands2={require('./images/logo_brand/image-1.jpg')}
             brands3={require('./images/logo_brand/cotton.jpg')}
             brands4={require('./images/logo_brand/mango.jpg')}
             brands5={require('./images/logo_brand/keds.jpg')}
             brands6={require('./images/logo_brand/levis.jpg')}
             brands7={require('./images/logo_brand/puma.jpg')}
             brands8={require('./images/logo_brand/adidas.png')}
             brands9={require('./images/logo_brand/casio.jpg')}
             brands10={require('./images/logo_brand/vans.png')}
             brands11={require('./images/logo_brand/river.jpg')}
             brands12={require('./images/logo_brand/image-2.jpg')}
             brands13={require('./images/logo_brand/nike.jpg')}
             brands14={require('./images/logo_brand/kanke.jpg')}

             model1={require('./images/content.jpg')}
             model2={require('./images/content1.jpg')}
             model3={require('./images/content2.jpg')}

             modela=""
             modelb=""
             modelc=""
        />
      </div>
  );
}