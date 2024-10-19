import DefaultButton from '@/components/buttons/DefaultButton';

import DefaultImage from '@/components/image/DefaultImage.component';
import DefaultText from '@/components/typography/DefaultText';
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer';
import DefaultView from '@/components/viewComponents/DefaultView';
import { useUser } from '@/contexts/AuthProvider';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import { router } from 'expo-router';
import React from 'react';
import {  StyleSheet } from 'react-native';

export default function HowItWork() {
  const {theme} = useBrandTheme()
  const {userStatus} = useUser()
 

  const onSubmit = () =>{
    router.push("/onboarding")
  }
  
  const styles = StyleSheet.create({
  container: {
   flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    paddingHorizontal: 20,
  },

   logoImage :{
    width:120,
    height:120,
    objectFit:"contain",
    
  },
   logoTitle :{
    color:theme.colors.textOnPrimary,
    paddingVertical:10,
    textAlign: "center",
    
  },
   welcomeText :{
    color:theme.colors.textOnPrimary,
    textAlign: "center",
   
    
  },
    inputContainer:{
    marginTop:30,
    paddingHorizontal: 20,
    paddingVertical:20,
    width: '100%',
    backgroundColor:theme.colors.background,
    // gap:15,
    borderRadius:10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    
  },
  forgetPassword:{
    width: '100%',
    display:"flex",
    alignItems:"flex-end",
    marginTop:10,
  },
    button:{
    marginTop:20,
  
  },
  repeatImage :{
    width:120,
    height:120,
    objectFit:"contain",
    textAlign:"center"
    
  },
  circleContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    gap:35,
    marginTop:-40,
    
  },
  circle:{
    width:116,
    height:116,
    borderRadius:60,
    backgroundColor:theme.colors.primaryLight,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    borderWidth:1,
    borderColor:theme.colors.primary,
    borderStyle:"dashed",
    textAlign:"center"
  },
 
  
});

if(userStatus === "authenticated") return router.push("/home")
 if(userStatus === "not_authenticated") return router.push("/auth")
  return (
    <DefaultPageContainer>
       <DefaultView style={styles.container}>
        <DefaultImage   style={styles.logoImage} source={require('../assets/images/logo.png')}  />
        <DefaultText type="h4" style={styles.logoTitle}>RaktoDan</DefaultText>
        <DefaultText type="h2" style={styles.welcomeText}>How it Work!</DefaultText>
      <DefaultText style={styles.welcomeText}>You Give and You Take</DefaultText>
      <DefaultView style={styles.inputContainer}>
         <DefaultImage   style={styles.repeatImage} source={require('../assets/images/repet.png')}  />
         <DefaultView style={styles.circleContainer}>
          <DefaultView style={styles.circle}>
            <DefaultText type="h3" style={{color:theme.colors.primary}}>Give Blood</DefaultText>
          </DefaultView>
          <DefaultView style={styles.circle}>
            <DefaultText type="h3" style={{color:theme.colors.primary}}>Take Blood</DefaultText>
          </DefaultView>
          </DefaultView>
      
          <DefaultButton onPress={()=> router.push("/onboarding")} label="Next"  style={styles.button}  />
      </DefaultView>
     
    </DefaultView>
    </DefaultPageContainer>
   
  );
}




