
import { View, Text, Image } from 'react-native'
import React from 'react'
import { Images } from '../../../../assets/Images/Images'
import { ImageSlider } from "react-native-image-slider-banner";


const ImageSliderComponent = () => {
  return (
    <ImageSlider 
    data={[
        {img: 'https://quotefancy.com/media/wallpaper/3840x2160/1141836-Donnie-Yen-Quote-Better-to-be-called-something-positive-and.jpg'},
        {img: 'https://cdn.powerofpositivity.com/wp-content/uploads/2019/09/33-Positivity-Quotes-About-Being-Happy-When-Youre-Not.jpg'},
        {img: 'https://quotelar.com/wp-content/uploads/2023/12/kobmel.com-2.jpg'},
    ]}
    autoPlay={true}
    timer={3000}
    closeIconColor="#fff"
    />
  )
}

export default ImageSliderComponent