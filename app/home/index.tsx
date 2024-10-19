import DefaultImage from '@/components/image/DefaultImage.component';
import DefaultText from '@/components/typography/DefaultText'
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer'
import DefaultPageView from '@/components/viewComponents/DefaultPageView';
import DefaultView from '@/components/viewComponents/DefaultView';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import React from 'react';
import {  StyleSheet } from 'react-native';

const Home = () => {
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
    height: 174,
    zIndex: -1,
    objectFit:"cover",
   resizeMode: 'cover',
   borderBottomLeftRadius:20,
   borderBottomRightRadius:20,
   
   
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
    <DefaultPageContainer image={{source:require('../../assets/bg/bg_2.png'),style:styles.image}}>
         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
            <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    </DefaultPageContainer>

 

    
  )
}

export default Home

//image={{source:require('../../assets/bg/bg_2.png')}}

    // <DefaultPageView saveAreaViewProps={{style:styles.container}} >
    //   <DefaultImage  style={styles.image} source={require('../../assets/bg/bg_2.png')} />
    //   <DefaultView style={styles.infoContainer}>
    //       <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //         <DefaultText type="h1" style={{color:"white", textAlign:"center",}}>Welcome to Brand</DefaultText>
    //   </DefaultView>
    // </DefaultPageView>