import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

constContainer=styled.ul

  padding0;
  margin0;
  slick-prev,
  slick-next 
    z-index50;
    top0;
    bottom0;
    marginauto;
    width30px;
    height30px;
    transforminitial;
    before
      font-size30px;
    
  
  
  slick-prev 
    left0;
  
  slick-next 
    right16px;
  
export const SliderItem=styled.Iread;
  margin-right16px;
  img 

    margin16px
    width298px;
    height197px;
    object-fitcover;
  
 
const Slider=({ children })=>(
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: false,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    } }
    >
      {children}
    </SlickSlider>
  </Container>
) ;

export default Slider;