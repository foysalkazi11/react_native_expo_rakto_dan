import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Href, Link } from 'expo-router'
import DefaultText from '../typography/DefaultText'
import DefaultView from '../viewComponents/DefaultView'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'

type BackNavigationProps = View['props'] & {
  title?: string
  href: Href<string | object>
  rightIcon?: React.ReactNode
}
const BackNavigation = ({ title, href, rightIcon, ...rest }: BackNavigationProps) => {
  const { theme } = useBrandTheme()
  const styles = StyleSheet.create({
    backNavigation: {
      width: '100%',
      marginBottom: 40,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  })
  return (
    <DefaultView {...rest} style={[styles.backNavigation, rest.style]}>
      <Link href={href} asChild>
        <FontAwesome name="angle-left" size={24} color={theme.colors.textOnPrimary} />
      </Link>
      <DefaultText type="h4" style={{ color: theme.colors.textOnPrimary }}>
        {title}
      </DefaultText>

      {rightIcon || <DefaultText type="h4"></DefaultText>}
    </DefaultView>
  )
}

export default BackNavigation

const styles = StyleSheet.create({})
