import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import DefaultImage from '@/components/image/DefaultImage.component'
import DefaultView from '@/components/viewComponents/DefaultView'
import DefaultText from '@/components/typography/DefaultText'
import DefaultButton from '@/components/buttons/DefaultButton'
import { useRouter } from 'expo-router'

type PickBloodGroupProps = {
  updateProgressStep?: (activeState: number) => void
}
export default function PickBloodGroup({}: PickBloodGroupProps) {
    const {theme} = useBrandTheme()
    const router = useRouter()

  const onSubmit = (bloodGroup:string) =>{
    console.log(bloodGroup)
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
  inputContainer:{
    marginTop:30,
    paddingHorizontal: 20,
    paddingVertical:20,
    width: '100%',
    backgroundColor:theme.colors.background,
    borderRadius:10,
    
  },

  button:{
    marginTop:10,
  
  },
   addressImage :{
    width:120,
    height:120,
    objectFit:"contain",
    
  },

  })
  return (
    <DefaultView style={styles.container}>
       <DefaultImage   style={styles.addressImage} source={require('../../assets/images/blood_group.png')}  />
        <DefaultView style={styles.inputContainer}>
        <BloodGroup onSubmit={onSubmit} />
         
        </DefaultView>
    </DefaultView>
  )
}
type TBloodGroup = "A" | "B" | "O" | "AB" ;
type TBGExtension = "+" | "-" ;
const bloodGroupArr : TBloodGroup[] = ["A", "B", "O", "AB" ]
const bloodGroupExtensionArr : TBGExtension[] = ["+", "-", ]

type BloodGroupProps = {
  onSubmit: (bloodGroup:string) => void
}

export const BloodGroup = ({onSubmit}:BloodGroupProps) =>{
const [bloodGroup,setBloodGroup] = React.useState<TBloodGroup>("A")
const [bGExtension,setBGExtension] = React.useState<TBGExtension>("+")

 const {theme} = useBrandTheme()

  

    const styles = StyleSheet.create({
     container: {
    display:"flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    flexWrap:"wrap",
   gap:20,
    
  },
  singleContainer:{
  
    width: '46%',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:theme.colors.primaryLight,
    borderRadius:8,
    height:100,
 
     
  },
  singleContainerActive:{
    
    backgroundColor:theme.colors.primary,
    color: theme.colors.textOnPrimary
  },
  bloodGroupText:{
    
     fontSize:30,
     fontFamily:theme.fonts.semiBold,
     color: theme.colors.primary,
  },
  activeBloodGroupText:{
    color: theme.colors.textOnPrimary
  },

  extensionSingleContainer:{
    marginTop:20,
    width:66,
    height:60
  },
   button:{
    marginTop:10,
  
  },
 
  })
return (
    <DefaultView style={styles.container}>
        {bloodGroupArr.map((group) =>(
          <TouchableOpacity onPress={()=> setBloodGroup(group)}  key={group} style={[styles.singleContainer, bloodGroup === group && styles.singleContainerActive]}>
            <Text style={[styles.bloodGroupText, bloodGroup === group && styles.activeBloodGroupText]}>{group}</Text>
          </TouchableOpacity>
        ))}

        {bloodGroupExtensionArr.map((group) =>(
          <TouchableOpacity onPress={()=> setBGExtension(group)}  key={group} style={[styles.singleContainer, styles.extensionSingleContainer, bGExtension === group && styles.singleContainerActive]}>
            <Text style={[styles.bloodGroupText, bGExtension === group && styles.activeBloodGroupText]}>{group}</Text>
          </TouchableOpacity>
        ))}
        {/* <DefaultView style={styles.singleContainer}>
          <Text style={{fontSize: 20}}>{bGExtension}</Text>
        </DefaultView>
        <DefaultView style={styles.singleContainer}>
          <Text style={{fontSize: 20}}>{bGExtension === "+"? "-" : "+" }</Text>
        </DefaultView> */}

          <DefaultButton onPress={()=>onSubmit(bloodGroup+bGExtension)} label="Finish"  style={styles.button}  />

    </DefaultView>
)


}



const styles = StyleSheet.create({})