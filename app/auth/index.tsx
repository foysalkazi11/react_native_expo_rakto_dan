import DefaultButton from '@/components/buttons/DefaultButton';
import TextButton from '@/components/buttons/TextButton';
import DefaultImage from '@/components/image/DefaultImage.component';
import ControlInputWrapper from '@/components/input/ControlInputWrapper.component';
import DefaultInput from '@/components/input/DefaultInput.component';
import PhoneNumberInput from '@/components/input/PhoneNumberInput';
import DefaultText from '@/components/typography/DefaultText';
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer';
import DefaultView from '@/components/viewComponents/DefaultView';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import { FontAwesome6 } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

const mobileNumberRegex = /^[0-9]{10}$/

const defaultValues = {
  mobileNumber: '',
  password:"",
}

export default function SignIn() {
  const {theme} = useBrandTheme()
  const { control, handleSubmit, watch,setValue, formState: { errors } } = useForm({defaultValues});
  const [countryCode, setCountryCode] = React.useState<string>("+880"); 

  const onSubmit = (data:typeof defaultValues) =>{
    console.log(data)
    router.push("/home")
    
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
    // gap:15,
    borderRadius:10,
    
  },
  forgetPassword:{
    width: '100%',
    display:"flex",
    alignItems:"flex-end",
    marginTop:10,
  },
    button:{
    marginTop:20,
  
  }
  
});
  return (
    <DefaultPageContainer>
       <DefaultView style={styles.container}>
        <DefaultImage   style={styles.logoImage} source={require('../../assets/images/logo.png')}  />
        <DefaultText type="h4" style={styles.logoTitle}>RaktoDan</DefaultText>
        <DefaultText type="h2" style={styles.welcomeText}>Hello! Welcome back</DefaultText>
      <DefaultText style={styles.welcomeText}>Sign In to your Account</DefaultText>
      <DefaultView style={styles.inputContainer}>
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

          <ControlInputWrapper 
          control={control} 
          name='password' 
          rules={{
          required: 'Password is required',
          minLength: {
            value: 4,
            message: 'Password must be at least 4 characters long',
          },
          
        }}>
            <DefaultInput style={{marginTop:15}}  placeholder='Password'  secureTextEntry={true} leftIcon={<FontAwesome6 name="lock" size={20} color={theme.colors.textSecondary} />}  />
          </ControlInputWrapper>
          <TextButton href={"/auth/forgetPassword"} isLink style={styles.forgetPassword} size='md' label='Forget Password' />

          <DefaultButton onPress={handleSubmit(onSubmit)} label="Sign In"  style={styles.button}  />
      </DefaultView>
     
    </DefaultView>
    </DefaultPageContainer>
   
  );
}

