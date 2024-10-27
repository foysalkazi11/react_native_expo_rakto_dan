import DefaultImage from '@/components/image/DefaultImage.component';
import DefaultText from '@/components/typography/DefaultText'
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer'
import DefaultPageView from '@/components/viewComponents/DefaultPageView';
import DefaultView from '@/components/viewComponents/DefaultView';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';
import React from 'react';
import {  FlatList, Image, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Avatar from '@/components/avater/DefaultAvater.component';
import DefaultInput from '@/components/input/DefaultInput.component';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { fakeUsers } from '@/constants/fakeUser';
import DefaultSaveAreaView from '@/components/viewComponents/DefaultSaveAreaView';

const bloodGroupsArr = ["All",'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const Home = () => {
      const { theme } = useBrandTheme()
      const [selectedBloodGroup, setSelectedBloodGroup] = React.useState<typeof bloodGroupsArr[number]>("All")
    const styles = StyleSheet.create({
     container: {
      flexGrow: 1,
      display: "flex",
    flexDirection: 'column',
    width: '100%',
    height: '100%',
     position: 'relative',
    backgroundColor:theme.colors.surface,
  },
  image: {
    position: "absolute",
    top: 0,
   width: '100%',
    height: 164,
    zIndex: -1,
    objectFit:"cover",
   resizeMode: 'cover',
   borderBottomLeftRadius:20,
   borderBottomRightRadius:20,
   
  },
  
  infoContainer:{
      flex:1,
    width:"100%",
     height:"100%",
       paddingTop:50,
       paddingHorizontal:20,
      // position:"absolute",
      // top:120,
      // zIndex:1,
  },
    navigation:{
    width:"100%",
    marginBottom:20,
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
     //paddingHorizontal:20
  },
  bloodGroupContainer:{
   marginVertical:30,
  }

  })

  return (
  <DefaultView style={styles.container}>
      <DefaultImage style={styles.image} source={require('../../assets/bg/bg_2.png')} />
      <DefaultView style={styles.infoContainer}>
        <DefaultView style={styles.navigation}>
          <MaterialIcons name="menu" size={24} color={theme.colors.textOnPrimary} />
          <DefaultText type="h4" style={{color:theme.colors.textOnPrimary}}>Home</DefaultText>
          <Avatar size={32} isUpload={false} />
        </DefaultView>

        <DefaultInput variant="disable" leftIcon={<Ionicons name="search-outline" size={20} color={theme.colors.textSecondary} />} placeholder='Search by location' />
        <DefaultView style={styles.bloodGroupContainer}>
           <BloodGroup selectedBloodGroup={selectedBloodGroup} setSelectedBloodGroup={setSelectedBloodGroup} />
        </DefaultView>
        <UserCardContainer />

      </DefaultView>
       
            
   
  </DefaultView>
    
  )
}

export default Home


const UserCardContainer = () =>{
  
  const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:"auto",
      padding:10,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap:10,
    },
  })

  return (
    <DefaultSaveAreaView >
      <FlatList
       showsVerticalScrollIndicator={false}
        data={fakeUsers}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({item}) => <UserCard user={item} />}
        // style={styles.container}
      />
    </DefaultSaveAreaView>
  )
}



const UserCard = ({user}:{user:typeof fakeUsers[number]}) => {
  const {id,image,address,bloodGroup,mobileNumber,name} = user
  const {theme} = useBrandTheme()
  const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:"auto",
      borderRadius:10,
      padding:10,
      backgroundColor:theme.colors.primaryLight,
      display: "flex",
      flexDirection: "row",
      gap:10,
      marginBottom:10,
    },
    userImage:{
      width:80,
      height:80,
      borderRadius:10,
      overflow:"hidden",
      resizeMode:"cover",
      objectFit:"cover"
    },
    contentContainer:{
      flex:1,
      // display:"flex",
      // flexDirection: "column",
      // justifyContent: "center",
    },
    nameBox:{
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap:5
    }
  })
  return (
    <DefaultView style={styles.container}>
      <DefaultImage   style={styles.userImage} source={{uri:image} || require('../../assets/images/user_placeholder.png')} />
      <DefaultView style={styles.contentContainer}>
        <DefaultView style={styles.nameBox}>
          <DefaultText type="h4" style={{color:theme.colors.textPrimary}}>{name}</DefaultText>
          <DefaultText type="h3" style={{color:theme.colors.primary}}>{bloodGroup}</DefaultText>
        </DefaultView>
        <DefaultText type="paragraph" style={{color:theme.colors.textSecondary}}>{address}</DefaultText>

      </DefaultView>

    </DefaultView>
  )
}


type BasicInfoProps={
  selectedBloodGroup: string
  setSelectedBloodGroup: (value: typeof bloodGroupsArr[number]) => void
}
const BloodGroup = ({selectedBloodGroup,setSelectedBloodGroup}:BasicInfoProps) => {
  const {theme} = useBrandTheme()

  const styles = StyleSheet.create({
    container:{
      width:40,
      height:40,
      borderRadius:10,
      backgroundColor:theme.colors.primary,
      justifyContent:"center",
      alignItems:"center",
      marginRight:10,
    }
  })
  return (
    <DefaultView>
      <FlatList
       data={bloodGroupsArr}
       horizontal={true}
       showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
       renderItem={({item,index}) => (
        <Pressable onPress={() =>setSelectedBloodGroup(item)}  style={[styles.container,{backgroundColor: selectedBloodGroup === item ? theme.colors.primary : theme.colors.secondary}]} >
         <DefaultText type="paragraph" style={{color: theme.colors.textOnPrimary }}>{item}</DefaultText>
        </Pressable>
       )}
       />
    </DefaultView>
  )
}



