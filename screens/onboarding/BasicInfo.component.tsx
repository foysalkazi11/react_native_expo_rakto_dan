import { View, Text,StyleSheet, ImageBackground,Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import DefaultPageView from '@/components/viewComponents/DefaultPageView'
import DefaultBackgroundImage from '@/components/backgroundImage/DefaultBackgroundImage.component'
import DefaultText from '@/components/typography/DefaultText'
import DefaultImage from '@/components/image/DefaultImage.component'
import DefaultView from '@/components/viewComponents/DefaultView'
import DefaultScrollView from '@/components/viewComponents/DefaultScrollView'
import DefaultSaveAreaView from '@/components/viewComponents/DefaultSaveAreaView'
import Avatar from '@/components/avater/DefaultAvater.component'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import DefaultInput from '@/components/input/DefaultInput.component'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import DefaultButton from '@/components/buttons/DefaultButton'
import PhoneNumberInput from '@/components/input/PhoneNumberInput'
import ControlInputWrapper from '@/components/input/ControlInputWrapper.component'
import { useForm } from 'react-hook-form';

const mobileNumberRegex = /^[0-9]{10}$/

const defaultValues = {
  fullName: '',
  dob: '',
  mobileNumber: '',
  password:"",
  confirmPassword: "",
}

export default function BasicInfo() {
   const { control, handleSubmit, watch, formState: { errors } } = useForm({defaultValues});
  const {theme} = useBrandTheme()
  const [countryCode, setCountryCode] = React.useState<string>("+880"); 
  const password = watch('password');
  const onSubmit = (data:typeof defaultValues) =>{

    console.log(data)
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
  
  }

  })
  return (
    <DefaultSaveAreaView>
       <DefaultView style={styles.container}>
        <Avatar size={120} />
        <DefaultView style={styles.inputContainer}>
          <ControlInputWrapper control={control} name='fullName' rules={{required:"Full name required",}} >
           <DefaultInput placeholder='Full Name' leftIcon={<FontAwesome6 name="user-large" size={20} color={theme.colors.textSecondary}  /> }  />
          </ControlInputWrapper>
         
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
          {/* <DefaultInput  placeholder='Mobile Number' leftIcon={<MaterialCommunityIcons name="phone-in-talk" size={20} color={theme.colors.textSecondary} />}  /> */}
          <DefaultInput  placeholder='Date of Birth'   leftIcon={<FontAwesome6 name="calendar-days" size={20} color={theme.colors.textSecondary} />}  />
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
            <DefaultInput  placeholder='Password'  secureTextEntry={true} leftIcon={<FontAwesome6 name="lock" size={20} color={theme.colors.textSecondary} />}  />
          </ControlInputWrapper>
          <ControlInputWrapper
           control={control} 
          name='confirmPassword' 
          rules={{
          required: 'Please confirm your password',
          validate: (value: string) => value === password || 'Passwords do not match',
        }}
          >
            <DefaultInput  placeholder='Confirm Password'  secureTextEntry={true} leftIcon={<FontAwesome6 name="lock" size={20} color={theme.colors.textSecondary} />}  />
          </ControlInputWrapper>
          <DefaultButton onPress={handleSubmit(onSubmit)} label="Next"  style={styles.button}  />

        </DefaultView>
      </DefaultView>
    </DefaultSaveAreaView>
     
  
  
  )
}