import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BasicInfo from '@/screens/onboarding/BasicInfo.component'
import DefaultImage from '@/components/image/DefaultImage.component'
import DefaultText from '@/components/typography/DefaultText'
import DefaultPageView from '@/components/viewComponents/DefaultPageView'
import DefaultView from '@/components/viewComponents/DefaultView'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import { useNavigation } from 'expo-router'

type TSpep = {
   step: number;
  complete: boolean;
}
export default function OnBoardingIndexPage() {
  const navigation = useNavigation()
  const {theme} = useBrandTheme()
  const [progressState,setProgressState] = React.useState([
    {
   step:0,
   complete:true,
  },
    {
   step:1,
   complete:false,
  },
    {
   step:2,
   complete:false,
  },
    {
   step:3,
   complete:false,
  },
  ])

  React.useLayoutEffect(()  =>{
    navigation.setOptions({})
  },[])

  const styles = StyleSheet.create({
     container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
     position: 'relative',
    backgroundColor:theme.colors.surface,
      // paddingBottom:100
    
  },
  image: {
   width: '100%',
  

  },

  infoContainer:{
    width:"100%",
    //  position:"absolute",
    //  top:120,
    //  zIndex:1,
     marginTop:-480,
    
    flex:1,
    alignContent: 'center',
    justifyContent: 'center',
  }
  })

  return (
      <DefaultPageView saveAreaViewProps={{style:styles.container}} >
        <ProgressBar progressState={progressState} setProgressState={setProgressState} />
      <DefaultImage  style={styles.image} />
      <DefaultView style={styles.infoContainer}>
      <BasicInfo />
      </DefaultView>
      
    </DefaultPageView>
  )
}


 




type ProgressBarProps = {
  progressState: TSpep[];
  setProgressState: React.Dispatch<React.SetStateAction<TSpep[]>>
}
const ProgressBar = ({progressState}:ProgressBarProps) =>{
  const {theme} = useBrandTheme()

 const styles = StyleSheet.create({
     container: {
    flex: 1,
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:"center",
    width: '100%',
    paddingHorizontal:40,
    gap: 10,
    position:"absolute",
    top:50,
    zIndex:1

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


