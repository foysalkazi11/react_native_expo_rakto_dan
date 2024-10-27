import React from 'react'
import DefaultSaveAreaView, { DefaultSaveAreaViewProps } from './DefaultSaveAreaView'
import DefaultScrollView, { DefaultScrollViewProps } from './DefaultScrollView'
import DefaultView, { DefaultViewProps } from './DefaultView'
import { StyleSheet } from 'react-native';
import useBrandTheme from '@/hooks/uitlity/useBrandTheme';

type DefaultPageViewProps = {
    children: React.ReactNode;
  saveAreaViewProps?: DefaultSaveAreaViewProps
  scrollViewProps?: DefaultScrollViewProps
  viewProps?: DefaultViewProps;
}

const DefaultPageView = ({children,saveAreaViewProps={},scrollViewProps={},viewProps={}}:DefaultPageViewProps) => {
const {theme} = useBrandTheme()

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
 
  })
    
  return (
    <DefaultSaveAreaView {...saveAreaViewProps}>
        <DefaultScrollView {...scrollViewProps}>
            <DefaultView {...viewProps} >
                {children}
            </DefaultView>
        </DefaultScrollView>
    </DefaultSaveAreaView>
  )
}





export default DefaultPageView