
import DefaultText from '@/components/typography/DefaultText';
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer';
import DefaultView from '@/components/viewComponents/DefaultView';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import React from 'react';
import {  StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';
import OTPVerification from '@/screens/onboarding/OTPVerification.component';


export default function ForgetPasswordOtpVerification() {
  const {theme} = useBrandTheme()
  const router = useRouter()


  const onSubmit = (fullCode:string | undefined) =>{
    console.log(fullCode)
    router.push("/auth/newPassword")
    
  }
  
  const styles = StyleSheet.create({
  container: {
   flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    // paddingHorizontal: 20,
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
     gap:15,
    borderRadius:10,
    
  },
  
    button:{
    marginTop:10,
  
  },
  backNavigation:{
    width:"100%",
    marginBottom:40,
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
      paddingHorizontal: 20,
  }
  
});
  return (
    <DefaultPageContainer>
       <DefaultView style={styles.backNavigation}>
          <Link href={"/auth/forgetPassword"} asChild>
          <FontAwesome name="angle-left" size={24} color={theme.colors.textOnPrimary} />
          </Link>
          <DefaultText type="h4" style={{color:theme.colors.textOnPrimary}}>OTP Verification</DefaultText>
          <DefaultText type="h4"></DefaultText>

        </DefaultView>
       <OTPVerification verifyCode={onSubmit}  />
    </DefaultPageContainer>
   
  );
}

