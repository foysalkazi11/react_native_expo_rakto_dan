import DefaultButton from '@/components/buttons/DefaultButton';
import DefaultImage from '@/components/image/DefaultImage.component';
import ControlInputWrapper from '@/components/input/ControlInputWrapper.component';
import DefaultInput from '@/components/input/DefaultInput.component';
import DefaultText from '@/components/typography/DefaultText';
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer';
import DefaultView from '@/components/viewComponents/DefaultView';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import {  StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link,useRouter } from 'expo-router';

const mobileNumberRegex = /^[0-9]{10}$/

const defaultValues = {
  password:"",
  confirmPassword: "",
}

export default function NewPassword() {
  const {theme} = useBrandTheme()
  const { control, handleSubmit, watch,setValue, formState: { errors } } = useForm({defaultValues});
    const password = watch('password');
    const router = useRouter()
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
          <DefaultText type="h4" style={{color:theme.colors.textOnPrimary}}>New Password</DefaultText>
          <DefaultText type="h4"></DefaultText>

        </DefaultView>
        <DefaultImage   style={styles.logoImage} source={require('../../assets/images/forget_password.png')}  />
        
      <DefaultView style={styles.inputContainer}>

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
            <DefaultInput  placeholder='New Password'  secureTextEntry={true} leftIcon={<FontAwesome6 name="lock" size={20} color={theme.colors.textSecondary} />}  />
          </ControlInputWrapper>
          <ControlInputWrapper
           control={control} 
          name='confirmPassword' 
          rules={{
          required: 'Please confirm your password',
          validate: (value: string) => value === password || 'Passwords do not match',
        }}
          >
            <DefaultInput  placeholder='Confirm New Password'  secureTextEntry={true} leftIcon={<FontAwesome6 name="lock" size={20} color={theme.colors.textSecondary} />}  />
          </ControlInputWrapper>


          <DefaultButton onPress={handleSubmit(onSubmit)} label="Submit"  style={styles.button}  />
      </DefaultView>
     
    </DefaultView>
    </DefaultPageContainer>
   
  );
}

