import { StyleSheet, Text,Image } from 'react-native'
import React from 'react'
import BasicInfo from '@/screens/onboarding/BasicInfo.component'
import DefaultImage from '@/components/image/DefaultImage.component'
import DefaultPageView from '@/components/viewComponents/DefaultPageView'
import DefaultView from '@/components/viewComponents/DefaultView'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import { Stack, useNavigation } from 'expo-router'
import OTPVerification from '@/screens/onboarding/OTPVerification.component'
import Address from '@/screens/onboarding/Address.component'
import PickBloodGroup from '@/screens/onboarding/PickBloodGroup.component'
import DefaultText from '@/components/typography/DefaultText'
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer'

function LogoTitle() {
  return (
    <Image style={{width:50,height:50}} source={require('../../assets/images/address.png')} />
  );
}

export type TSpep = {
   step: number;
  complete: boolean;
}
export default function OnBoardingIndexPage(props:any) {

  const navigation = useNavigation()
  const {theme} = useBrandTheme()
  const [progressState,setProgressState] = React.useState({
    steps :[
    {
   step:0,
   complete:true,
   pageName:"Create Your Account"
  },
    {
   step:1,
   complete:false,
   pageName:"OTP Verification"
  },
    {
   step:2,
   complete:false,
   pageName:"Your Address"
  },
    {
   step:3,
   complete:false,
   pageName:"Pick Blood Group"
  },
  ],
  activeStep:0,
  })

  const updateProgressStep = React.useCallback((activeState:number) => {
    setProgressState(progress => ({...progress,activeStep:activeState, steps:progress.steps.map(step => step.step === activeState ? {...step,complete:true} : step)}))
  },[])

  // React.useLayoutEffect(()  =>{
  //   navigation.setOptions({})
  // },[])

  const styles = StyleSheet.create({
  pageTitle:{
    color:theme.colors.textOnPrimary,
    fontFamily:theme.fonts.medium,
    textAlign: 'center',
  }
  })
  
  const renderPage = React.useMemo( () =>{
    switch (progressState.activeStep) {
      case 0:
        return <BasicInfo updateProgressStep={updateProgressStep}  />
      case 1:
        return <OTPVerification verifyCode={()=>updateProgressStep(2)} />
      case 2:
        return <Address updateProgressStep={updateProgressStep} />
      case 3:
        return <PickBloodGroup updateProgressStep={updateProgressStep} />
      default:
        return <BasicInfo updateProgressStep={updateProgressStep} />
    }
  }, [progressState.activeStep])

  // React.useEffect(() => {
  //   navigation.setOptions({  title: 'My home',
  //         headerStyle: { backgroundColor: '#f4511e' },
  //         headerTintColor: '#fff',
  //         headerTitleStyle: {
  //           fontWeight: 'bold',
  //         }, });
  // }, [navigation]);

  return (
      <DefaultPageContainer >
        
        <DefaultText type="subHeading1" style={styles.pageTitle} >{progressState.steps[progressState.activeStep]?.pageName}</DefaultText>
        <ProgressBar progressState={progressState.steps}  />
       {renderPage}
   
    </DefaultPageContainer>
  )
}


type ProgressBarProps = {
  progressState: TSpep[];
  
}
const ProgressBar = ({progressState}:ProgressBarProps) =>{
  const {theme} = useBrandTheme()

 const styles = StyleSheet.create({
     container: {
    // flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:"center",
    width: '100%',
    paddingHorizontal:40,
    paddingVertical:20,
    gap: 10,
    // position:"absolute",
    // top:60,
    // zIndex:1

  },

  progressIndicator: {
    width: '20%',
    height: 4,
    borderRadius:2,
    backgroundColor: theme.colors.textOnPrimary,
    opacity:.3

  },
  progressComplete: {
    opacity:1,
  
  }
  })

  return (
    <DefaultView style={styles.container}>
      {progressState.map((item, index) => (
      <Text key={item.step} style={[styles.progressIndicator, item.complete && styles.progressComplete]} /> 
          
      ))}
    </DefaultView>
  )

}


   {/* <Stack.Screen
        options={{
          headerShown: false,
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

           headerTitle: props => <LogoTitle />,
        }}
      /> */}