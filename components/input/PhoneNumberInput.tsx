import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import CountryPickerModal from "../modal/CountryPickerModal";
import { Country } from "@/types/country";
import DefaultInput from "./DefaultInput.component";
import useBrandTheme from "@/hooks/uitlity/useBrandTheme";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Control, RegisterOptions } from "react-hook-form";
import ControlInputWrapper from "./ControlInputWrapper.component";
const countryCodeData: {
  countries: Country[];
} = require("../../constants/countryCode.json");

const findCountryCode = (code:string) =>{
  return countryCodeData.countries.find((country) => country.phone === code);
}

const defaultCountryCode : Country =  {
      "emoji": "\ud83c\udde7\ud83c\udde9",
      "name": "Bangladesh",
      "phone": "+880"
    };

interface PhoneNumberInputProps {
  phoneNumberProps?: TextInput["props"] & { 
    control?: Control<any> | undefined // Optional control prop from react-hook-form
  name?: string; // Optional field name (required if using react-hook-form)
  rules?:  RegisterOptions<any, string>; // Validation rules (optional)
  }
  errorMessageStyle?: object; // Optional style for error messages}
  countryCode?: string
  setCountryCode?: React.Dispatch<React.SetStateAction<string>>

}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  countryCode="",
  setCountryCode = () => {},
  phoneNumberProps = {},
}: PhoneNumberInputProps) => {
  const [defaultSelectedCode, setDefaultSelectedCode] = useState<Country>  (defaultCountryCode)
  // const [countryCode, setCountryCode] = useState<string>("+880"); // Default to US
  // const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const {theme} = useBrandTheme()

  useEffect(() => {
    if (countryCode) {
      //const parts = initialValue.split(" "); // Handle possible formatting
      // const countryCode = parts[0]
      // setCountryCode(parts[0]);
      // setPhoneNumber(parts[1]);
      if (countryCode !== defaultSelectedCode.phone) {
        const value = findCountryCode(countryCode);
        if (value) {
          setDefaultSelectedCode(value)
        }
        
      }
      
    }
  }, [countryCode]);

  const handleCountryCodeChange = (country: Country) => {
    setCountryCode(country.phone);
     setDefaultSelectedCode(country);
    setIsModalVisible(false);
   
  };

  // const handlePhoneNumberChange = (text: string) => {
  //   setPhoneNumber(text);
  //   setValidationError(null); // Clear error on input change
  // };

  const handleOpenCountryPicker = () => {
    setIsModalVisible(true);
  };
  const handleCloseCountryPicker = () => {
    setIsModalVisible(false);
  };

  const handleBlur = () => {
    const fullNumber = `<span class="math-inline">\{countryCode\}\-</span>{phoneNumber}`;
    // You can add phone number validation logic here if needed
    // Replace any validation library with your own logic
    //  if (!isValidPhoneNumber(fullNumber)) {
    //    setValidationError('Invalid phone number');
    //  } else {
    // }

    // onValueChange(`${countryCode}${phoneNumber}`); // Pass formatted value to parent
  };

  const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  countryCodeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap:2,
    color:theme.colors.textSecondary
    // paddingHorizontal: 10,
    // marginRight: 5,
  },
  countryCodeText: {
    fontSize: 16,
    color:theme.colors.textSecondary
  },
  dropDownArrow: {
    fontSize: 12,
    marginLeft: 5,
    color:theme.colors.textSecondary
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});

  return (
    <View 
    // style={styles.container}
    >
      <ControlInputWrapper control={phoneNumberProps?.control} rules={phoneNumberProps?.rules} name={phoneNumberProps?.name} >
        <DefaultInput
      leftIcon={   
      <TouchableOpacity
        style={styles.countryCodeButton}
        onPress={handleOpenCountryPicker}
      >
        <Text style={styles.countryCodeText}>{defaultSelectedCode.emoji}</Text>
        <Text style={styles.countryCodeText}>{countryCode}</Text>
        <FontAwesome5 name="caret-down" style={styles.dropDownArrow} />
        
      </TouchableOpacity>
      }
        // style={styles.phoneNumberInput}
        // value={phoneNumber}
        // onChangeText={handlePhoneNumberChange}
        // onBlur={handleBlur}
        {...phoneNumberProps}
        keyboardType="phone-pad"
      />
        
      </ControlInputWrapper>
     
      

      {validationError && (
        <Text style={styles.errorText}>{validationError}</Text>
      )}
      <CountryPickerModal
        visible={isModalVisible}
        onSelectCountry={handleCountryCodeChange}
        onClose={handleCloseCountryPicker}
      />
      {/* Use CountryPickerModal instead of CountryPicker */}
    </View>
  );
};

export default PhoneNumberInput;


