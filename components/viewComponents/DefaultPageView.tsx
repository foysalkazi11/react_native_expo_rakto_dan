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

 const styles = StyleSheet.create({
     container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',

  },
 
  })



export default DefaultPageView