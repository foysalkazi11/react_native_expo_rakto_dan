import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DefaultImage, { DefaultImageProps } from '../image/DefaultImage.component'
import DefaultText from '../typography/DefaultText'
import DefaultPageView from './DefaultPageView'
import DefaultView from './DefaultView'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'

type DefaultPageContainerProps = {
    children: React.ReactNode,
     image?:DefaultImageProps,
  
}

const DefaultPageContainer = ({children,image}:DefaultPageContainerProps) => {
    const { theme } = useBrandTheme()

    const styles = StyleSheet.create({
     container: {
      flexGrow: 1,
      display: "flex",
    flexDirection: 'column',
    width: '100%',
    height: '100%',
     position: 'relative',
    backgroundColor:theme.colors.surface,
  },
  image: {
    position: "absolute",
    top: 0,
   width: '100%',
    height: "100%",
    zIndex: -1,
    objectFit:"cover",
   resizeMode: 'cover',
   
  },
  
  infoContainer:{
      flex:1,
    width:"100%",
     height:"100%",
       paddingTop:50,
      // position:"absolute",
      // top:120,
      // zIndex:1,
  },

  })

  return (
    <DefaultPageView saveAreaViewProps={{style:styles.container}} >
      <DefaultImage  style={styles.image} {...image} />
      <DefaultView style={styles.infoContainer}>
        {children}
      </DefaultView>
    </DefaultPageView>
  )
}

export default DefaultPageContainer

const styles = StyleSheet.create({})