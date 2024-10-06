import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import DefaultView from '@/components/viewComponents/DefaultView'
import DefaultSaveAreaView from '@/components/viewComponents/DefaultSaveAreaView'
import Avatar from '@/components/avater/DefaultAvater.component'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import DefaultInput from '@/components/input/DefaultInput.component'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DefaultButton from '@/components/buttons/DefaultButton'
import PhoneNumberInput from '@/components/input/PhoneNumberInput'
import ControlInputWrapper from '@/components/input/ControlInputWrapper.component'
import { useForm } from 'react-hook-form';
import DateTimePickerModal from '@/components/modal/DateTimePickerModal.component'
import DefaultScrollView from '@/components/viewComponents/DefaultScrollView'
import DefaultPageView from '@/components/viewComponents/DefaultPageView'

const mobileNumberRegex = /^[0-9]{10}$/

const defaultValues = {
  fullName: '',
  dob: "",
  mobileNumber: '',
  password:"",
  confirmPassword: "",
}

type BasicInfoProps = {
  updateProgressStep?: (activeState: number) => void
}

export default function BasicInfo({updateProgressStep=()=>{}}:BasicInfoProps) {
   const { control, handleSubmit, watch,setValue, formState: { errors, } } = useForm({defaultValues});
  const {theme} = useBrandTheme()
  const [countryCode, setCountryCode] = React.useState<string>("+880"); 
  const password = watch('password');
   const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:Date) => {
    //  console.warn("A date has been picked: ", date.toLocaleDateString());
    const sliceDate = date.toLocaleDateString().slice(0,10)
    setValue("dob", sliceDate);
    hideDatePicker();
  };

  const onSubmit = (data:typeof defaultValues) =>{
    console.log(data)
    updateProgressStep(1)
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
          <DateTimePickerModal 
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={new Date()}
          isDarkModeEnabled={true}
          maximumDate={new Date()}
          >
             <Pressable onPress={showDatePicker}>
              <ControlInputWrapper
             control={control} 
              name='dob' 
             >
              <DefaultInput onPress={showDatePicker} editable={false}  placeholder='Date of Birth'   leftIcon={<FontAwesome6 name="calendar-days" size={20} color={theme.colors.textSecondary} />}  />
             </ControlInputWrapper>
             </Pressable>
          </DateTimePickerModal>
         
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
     
  
  
  )
}