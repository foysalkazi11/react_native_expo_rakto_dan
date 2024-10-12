import { useRef, useState } from "react";
import type { RefObject } from "react";
import type { TextInput, } from "react-native";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { OTPInput } from "@/components/input/OTPInput.component";
import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import DefaultView from "@/components/viewComponents/DefaultView";
import DefaultText from "@/components/typography/DefaultText";
import { OtpInput } from "react-native-otp-entry";
import DefaultPageView from "@/components/viewComponents/DefaultPageView";
import DefaultSaveAreaView from "@/components/viewComponents/DefaultSaveAreaView";
import DefaultScrollView from "@/components/viewComponents/DefaultScrollView";
import Avatar from "@/components/avater/DefaultAvater.component";
import DefaultImage from "@/components/image/DefaultImage.component";
import TextButton from "@/components/buttons/TextButton";
import DefaultButton from "@/components/buttons/DefaultButton";
// import { useSignUp } from "@clerk/clerk-expo";
// import { FontAwesome5 } from "@expo/vector-icons";

// import { OTPInput } from "~/components/OTPInput";
// import { isClerkError } from "~/utils/isClerkError";

// https://github.com/anday013/react-native-otp-entry?tab=readme-ov-file#readme

type OTPVerificationProps = {
  // updateProgressStep?: (activeState: number) => void
  codes?: string[] | undefined
  setCodes?:React.Dispatch<React.SetStateAction<string[] | undefined>>
  verifyCode?: (value: string | undefined) => void
}
export default function OTPVerification({verifyCode=()=>{},codes=Array(4).fill(""),setCodes=()=>{}}: OTPVerificationProps) {
    const {theme} = useBrandTheme()
//   const { isLoaded, signUp } = useSignUp();
  // const [codes, setCodes] = useState<string[] | undefined>(Array(4).fill(""));
  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    // useRef<TextInput>(null),
    // useRef<TextInput>(null),
  ];

  const [errorMessages, setErrorMessages] = useState<string[]>();
  const router = useRouter();

//   if (!isLoaded) {
//     return <Text>Loading...</Text>;
//   }

  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      setErrorMessages(undefined);
      const newCodes = text.split("");
      setCodes(newCodes);
      refs[5]!.current?.focus();
      return;
    }
    setErrorMessages(undefined);
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes);
    if (text !== "" && index < 5) {
      refs[index + 1]!.current?.focus();
    }
  };

  async function verifyPhoneNumberAndProgress() {
    const fullCode = codes!.join("");
    try {
      verifyCode(fullCode)
    //   await signUp?.attemptPhoneNumberVerification({ code: fullCode });
    } catch (err: unknown) {
      // handle the error 
    }
    // updateProgressStep?.(2);

    // router.replace("/profile/sign-up/phone-verified");
  }

   const styles = StyleSheet.create({
     container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
     paddingHorizontal: 20,
    //  marginTop:50,
   
    
  },
  OTPVerificationImage :{
    width:120,
    height:120,
    objectFit:"contain",
    
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
  pinCodeContainer:{
    width:60,
    height:60,
    borderRadius:8,
    backgroundColor:theme.colors.textOnPrimary,
    justifyContent: "center",
    alignItems: "center",
    borderColor:theme.colors.gray,
    borderWidth:1,
    
  },
  focusStick:{
     color:theme.colors.primary,
      borderColor:theme.colors.primary,
      borderWidth:1,
  },
  filledPinCodeContainerStyle:{
    backgroundColor:theme.colors.primaryLight
  },
  pinCodeText:{
    color: theme.colors.primary,
  },
  activePinCodeContainer:{
    backgroundColor: theme.colors.primaryLight,
    borderColor:theme.colors.gray,
    
  },
  resendCodeContainer:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    gap:10,
    // paddingHorizontal:10,
    // paddingVertical:10
    paddingTop:10,
  },
  codeTimer:{
    width:"100%",
    textAlign: "center",
    gap:10,
    paddingBottom:20,
    fontFamily:theme.fonts.semiBold
  }

  // button:{
  //   marginTop:10,
  
  // }

  })
  

  return (
    <DefaultView style={styles.container}>
       <DefaultImage   style={styles.OTPVerificationImage} source={require('../../assets/images/OTP_verification.png')}  />
       <DefaultView style={styles.inputContainer}>
      <OtpInput
          numberOfDigits={4}
          // focusColor="green"
          focusStickBlinkingDuration={500}
          onTextChange={(text) => console.log(text)}
          onFilled={(text) => console.log(`OTP is ${text}`)}
          textInputProps={{
            accessibilityLabel: "One-Time Password",
          }}
          theme={{
            // containerStyle: styles.inputContainer,
            pinCodeContainerStyle: styles.pinCodeContainer,
            pinCodeTextStyle: styles.pinCodeText,
            focusStickStyle: styles.focusStick,
            focusedPinCodeContainerStyle: styles.activePinCodeContainer,
            filledPinCodeContainerStyle: styles.filledPinCodeContainerStyle
          }}
          />

          <DefaultView style={styles.resendCodeContainer}>
            <DefaultText type="paragraph">
            I didn't receive code ? 
          </DefaultText>
            <TextButton  label="Resend Code" />
          </DefaultView>
          <DefaultText type="paragraph" style={styles.codeTimer}>
            1:23 sec left
          </DefaultText>
          <DefaultButton onPress={verifyPhoneNumberAndProgress} label="Verify" />
       </DefaultView>
    
    </DefaultView>
       
    // <SafeAreaView >
    //   <KeyboardAvoidingView>
    //     <TouchableWithoutFeedback>
    //          <OTPInput
    //           codes={codes!}
    //           errorMessages={errorMessages}
    //           onChangeCode={onChangeCode}
    //           refs={refs}
    //           config={{
    //             "backgroundColor":theme.colors.surface,
    //             "borderColor":theme.colors.gray,
    //             "errorColor":theme.colors.error,
    //             "focusColor":theme.colors.gray,
    //             "textColor":theme.colors.textSecondary,
    //           }}
    //         />
    //    </TouchableWithoutFeedback>
       
    //  </KeyboardAvoidingView>
    // </SafeAreaView>
  );}
