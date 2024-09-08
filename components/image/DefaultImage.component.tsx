import { Image, } from 'react-native'
import React from 'react'

type DefaultImageProps = Image["props"]

const DefaultImage = (props:DefaultImageProps) => {
    const { source, ...rest } = props
  return (
    <Image source={source || require('../../assets/bg/bg_default_small.png')} {...rest} />
  )
}

export default DefaultImage
