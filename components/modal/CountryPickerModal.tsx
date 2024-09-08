import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import { Country } from "@/types/country";
import React, { useMemo, useState } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import DefaultInput from "../input/DefaultInput.component";
import DefaultText from "../typography/DefaultText";
import DefaultModal from "./DefaultModal.component";


const countryCodeData: {
  countries: Country[];
} = require("../../constants/countryCode.json");

const CountryPickerModal: React.FC<{
  onSelectCountry: (country: Country) => void;
  visible: boolean;
  onClose?: () => void;
  onRequestClose?: () => void;
}> = ({ onSelectCountry, visible, onRequestClose = () => {},onClose = () => {} }) => {
  const { theme } = useBrandTheme();
  const [searchInput, setSearchInput] = useState("");
  const handleCountrySelection = (country: Country) => {
    onSelectCountry(country);
    setSearchInput("");
  };

  const filteredCountryCodeData = useMemo(() => {
    return countryCodeData.countries.filter((item) => {
      const itemName = item.name.toLowerCase();

      const itemCode = item.phone.toLowerCase();

      const textData = searchInput.toLowerCase();

      if (itemName.indexOf(textData) > -1 || itemCode.indexOf(textData) > -1)
        return true;
    });
  }, [searchInput]);

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
      backgroundColor: theme.colors.textSecondary,
      borderRadius: 5,
    },
    closeText: {
      fontSize: 16,
    },
    countryItem: {
      padding: 10,
      borderWidth: 1,
      borderColor: theme.colors.surface,
      marginVertical: 5,
      borderRadius: 10,
      display: "flex",
      flexDirection: "row",
      gap: 10,
    },
    countryText: {
      fontSize: 16,
    },
  });

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
          placeholder="Search by counter or code"
          // variant="contain"
          // style={{ height: 38, paddingHorizontal: 10 }}
        />
        <FlatList
          style={[styles.countryListContainer]}
          data={filteredCountryCodeData}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.phone}
              onPress={() => handleCountrySelection(item)}
              style={styles.countryItem}
            >
              <DefaultText type="paragraph">{item.emoji}</DefaultText>
              <DefaultText
                type="paragraph"
                style={{ color: theme.colors.textSecondary }}
              >
                {item.phone}
              </DefaultText>
              <DefaultText
                type="paragraph"
                style={{ color: theme.colors.textSecondary }}
              >
                {item.name}
              </DefaultText>
            </TouchableOpacity>
          )}
        />
      </View>
    </DefaultModal>
  );
};

export default CountryPickerModal;
