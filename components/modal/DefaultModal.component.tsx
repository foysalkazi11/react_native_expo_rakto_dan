import { Modal, Platform, StyleSheet} from 'react-native'
import React from 'react'
import DefaultView from '../viewComponents/DefaultView'
import useBrandTheme from '@/hooks/uitlity/useBrandTheme'
import DefaultText from '../typography/DefaultText'
import IconButton from '../buttons/IconButton'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type DefaultModalProps = Modal["props"] & {
    title?: string
    onClose: () => void;
    children: React.ReactNode
}
export default function DefaultModal({title="",onClose=()=>{}, children, ...restProps}:DefaultModalProps) {
    const {style,...modalProps}  = restProps
    const {theme} = useBrandTheme()

    const styles = StyleSheet.create({
   modalContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    modalHeaderContainer:{
        width:"100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: theme.colors.background,
      paddingTop: Platform.OS === "ios" ? 50 : 20
    }
})


  return (
    <Modal 
    {...modalProps}
    transparent
      animationType="slide"
      style={[style]}
      onRequestClose={()=>onClose()}
    >
        <DefaultView style={[styles.modalHeaderContainer]}>
            <DefaultText type="h4">{title} </DefaultText>
            <IconButton onPress={onClose} variant="gray" size="sm"   icon={<MaterialIcons name="close" size={16}  />} />
        </DefaultView>

        {children}
      
    </Modal>
  )
}

