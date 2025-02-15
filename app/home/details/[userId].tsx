import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DefaultText from '@/components/typography/DefaultText'
import DefaultView from '@/components/viewComponents/DefaultView'
import BackNavigation from '@/components/navigation/BackNavigation.component'
import { useLocalSearchParams } from 'expo-router'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import DefaultPageContainer from '@/components/viewComponents/DefaultPageContainer'
import Avatar from '@/components/avater/DefaultAvater.component'


const Details = () => {
  const { theme } = useBrandTheme()
  const { userId } = useLocalSearchParams()
  console.log(userId)
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',

      // paddingHorizontal: 20,
    },
    inputContainer: {
      marginTop: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
      width: '100%',
      backgroundColor: theme.colors.background,
      gap: 15,
      borderRadius: 10,
    },
  })
  return (
    <DefaultPageContainer>
      <DefaultView style={styles.container}>
        {/* <BackNavigation title="Details" href="/home" /> */}
        <Avatar size={120} isUpload={false} />

        <DefaultView style={styles.inputContainer}>
          <DefaultText type="label">
            name : <DefaultText type="paragraph">Foysal Kazi</DefaultText>{' '}
          </DefaultText>
          <DefaultText type="label">
            Blood Group :{' '}
            <DefaultText
              style={{ color: theme.colors.primary, fontFamily: theme.fonts.bold }}
              type="h4"
            >
              B+
            </DefaultText>{' '}
          </DefaultText>
          <DefaultText type="label">
            Adress :{' '}
            <DefaultText type="paragraph">
              Nandan Patti, Torki Bandar, Grournadi, Barishal
            </DefaultText>{' '}
          </DefaultText>
          <DefaultText type="label">
            Mobile Number : <DefaultText type="paragraph">+8801845630043</DefaultText>{' '}
          </DefaultText>
          <DefaultText type="label">
            Current Status : <DefaultText type="paragraph">Ready To Donate</DefaultText>{' '}
          </DefaultText>
          <DefaultText type="label">
            Age : <DefaultText type="paragraph">34</DefaultText>{' '}
          </DefaultText>
          {/* <DefaultText type="label">
            <ActionBtnContainer mobileNumber="" userId={0} />
          </DefaultText> */}
        </DefaultView>

        {/* <DefaultText type="h1">Details</DefaultText> */}
      </DefaultView>
    </DefaultPageContainer>
  )
}

export default Details

const styles = StyleSheet.create({})
