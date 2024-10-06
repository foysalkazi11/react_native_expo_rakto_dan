import useBrandTheme from "@/hooks/uitlity/useBrandTheme";

import React, { useMemo, useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
} from "react-native";
import DefaultInput from "../input/DefaultInput.component";
import DefaultText from "../typography/DefaultText";
import DefaultModal from "./DefaultModal.component";

export type TAddressPickerData = {
    label:string;
    value: string;
    searchBy:string;
     [key:string]:any;
}
// const countryCodeData: {
//   countries: Country[];
// } = require("../../constants/countryCode.json");

const AddressPickerModal: React.FC<{
  data:TAddressPickerData[]
  onSelect: (value: TAddressPickerData) => void;
  visible: boolean;
  onClose?: () => void;
  onRequestClose?: () => void;
  searchInputPlaceholder?:string
}> = ({ data=[],onSelect, visible, onRequestClose = () => {},onClose = () => {},searchInputPlaceholder= "Search" }) => {
  const { theme } = useBrandTheme();
  const [searchInput, setSearchInput] = useState("");
    const inputRef = React.useRef<TextInput>(null)
  const handleCountrySelection = (value: TAddressPickerData) => {
    onSelect(value);
    setSearchInput("");
  };

  const filteredCountryCodeData = useMemo(() => {
    if(!searchInput) return data; 
    return data.filter((item) => {
        const searchBy = item.searchBy
      const itemSearchBy = item[searchBy].toLowerCase();

      const itemSearchByValue = item.value.toLowerCase();

      const textData = searchInput.toLowerCase();

      if (itemSearchBy.indexOf(textData) > -1 || itemSearchByValue.indexOf(textData) > -1)
        return true;
    });
  }, [searchInput,data]);

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      // paddingVertical: 40,
    },
    countryListContainer: {
      width: "100%",
      paddingTop: 10,
      paddingRight: 5,
    },
    closeButton: {
      position: "absolute",
      top: 10,
      right: 10,
      padding: 10,
      backgroundColor: theme.colors.gray,
      borderRadius: 5,
    },
    closeText: {
      fontSize: 16,
    },
    countryItem: {
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.primaryLight,
      marginVertical: 5,
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      // backgroundColor:theme.colors.primaryLight
    },
    countryText: {
      fontSize: 16,
    },
  });

  React.useEffect(()=>{
    if (inputRef.current) {
      inputRef.current?.focus() // Focus the input field when the modal is opened
    }
    
  },[])

  return (
    <DefaultModal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}
      onClose={onClose}
      
    >
      <View style={styles.modalContainer}>
        <DefaultInput
          value={searchInput}
          onChangeText={setSearchInput}
          placeholder={searchInputPlaceholder}
          ref={inputRef}
          // variant="contain"
          // style={{ height: 38, paddingHorizontal: 10 }}
        />
        <FlatList
          style={[styles.countryListContainer]}
          data={filteredCountryCodeData}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.label}
              onPress={() => handleCountrySelection(item)}
              style={styles.countryItem}
            >
              {/* <DefaultText type="paragraph">{item.emoji}</DefaultText>
              <DefaultText
                type="paragraph"
                style={{ color: theme.colors.textSecondary }}
              >
                {item.phone}
              </DefaultText> */}
              <DefaultText
                type="paragraph"
                style={{ color: theme.colors.textSecondary }}
              >
                {item.label}
              </DefaultText>
            </TouchableOpacity>
          )}
        />
      </View>
    </DefaultModal>
  );
};

export default AddressPickerModal;
