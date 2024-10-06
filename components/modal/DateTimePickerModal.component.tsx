import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePicker, { ReactNativeModalDateTimePickerProps } from "react-native-modal-datetime-picker";

type DateTimePickerModalProps = ReactNativeModalDateTimePickerProps & {
     children?: React.ReactNode; // The input field passed as children
}
const DateTimePickerModal = ({children="",...rest}:DateTimePickerModalProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:any) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    
     <View>
        <DateTimePicker
        {...rest}
      />
      {children}
     </View>
      
   
  );
};

export default DateTimePickerModal;