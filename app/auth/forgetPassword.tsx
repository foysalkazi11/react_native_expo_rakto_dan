import DefaultButton from '@/components/buttons/DefaultButton';
import DefaultImage from '@/components/image/DefaultImage.component';
import PhoneNumberInput from '@/components/input/PhoneNumberInput';
import DefaultText from '@/components/typography/DefaultText';
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer';
import DefaultView from '@/components/viewComponents/DefaultView';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import React from 'react';
import { useForm } from 'react-hook-form';
import {  StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, useRouter } from 'expo-router';

const mobileNumberRegex = /^[0-9]{10}$/

const defaultValues = {
  mobileNumber: '',
  password:"",
}

export default function ForgetPassword() {
  const {theme} = useBrandTheme()
  const { control, handleSubmit, watch,setValue, formState: { errors } } = useForm({defaultValues});
  const [countryCode, setCountryCode] = React.useState<string>("+880"); 
  const router = useRouter()

  const onSubmit = (data:typeof defaultValues) =>{
    console.log(data)
    router.push("/auth/forgetPasswordOtpVerification")
    
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
    justifyContent:"space-between"
  }
  
});
  return (
    <DefaultPageContainer>
       <DefaultView style={styles.container}>
        <DefaultView style={styles.backNavigation}>
          <Link href={"/auth"} asChild>
          <FontAwesome name="angle-left" size={24} color={theme.colors.textOnPrimary} />
          </Link>
          <DefaultText type="h4" style={{color:theme.colors.textOnPrimary}}>Forget Password</DefaultText>
          <DefaultText type="h4"></DefaultText>

        </DefaultView>
        <DefaultImage   style={styles.logoImage} source={require('../../assets/images/forget_password.png')}  />
        
      <DefaultView style={styles.inputContainer}>

        <DefaultText style={{textAlign:"center"}} >
          Enter the mobile number registed 
          with your account and we’ll send you
          instructions to reset your password
          to regain access to your account
        </DefaultText>
        <PhoneNumberInput countryCode={countryCode} setCountryCode={setCountryCode} phoneNumberProps={{
            placeholder: 'Mobile Number',
            keyboardType: 'phone-pad',
            returnKeyType: 'done',
            name:"mobileNumber",
            control:control,
            rules:{
              required:"Mobile Number required",
              pattern:{
              value: mobileNumberRegex,
              message: 'Please enter a valid mobile number',
            }}
            
          }} />


          <DefaultButton onPress={handleSubmit(onSubmit)} label="Send"  style={styles.button}  />
      </DefaultView>
     
    </DefaultView>
    </DefaultPageContainer>
   
  );
}

