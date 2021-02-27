import React, {useState} from 'react';
import {View, Platform, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import CustomTextInput from '../../atoms/CustomTextInput';
import Button from '../../atoms/Button';

const DateTimePickerModal = ({
  width,
  onChangeDate,
  customTextInputProps,
  placeholder,
  IosConfrimButtonText,
  pickerMode,
  disabled,
}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState(pickerMode);
  const [show, setShow] = useState(false);
  const [displayedDate, setDisplayedDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    onChangeDate(currentDate);
    setDisplayedDate(`${currentDate}`.substring(0, 16));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode(pickerMode ? pickerMode : 'date');
  };

  const dismissModal = () => {
    setDisplayedDate(`${date}`.substring(0, 16));
    onChangeDate(date);
    setShow(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={showDatepicker}
        disabled={disabled ? disabled : false}>
        <View pointerEvents="none">
          <CustomTextInput
            height="7%"
            width={width ? width : '82%'}
            placeholder={placeholder}
            styles={
              customTextInputProps.styles
                ? customTextInputProps.styles
                : styles.Textinput
            }
            placeholderTextColor={'red'}
            props={
              customTextInputProps
                ? {...customTextInputProps}
                : {value: `${displayedDate}`}
            }
          />
        </View>
      </TouchableOpacity>
      {Platform.OS === 'ios' ? (
        <Modal isVisible={show} style={styles.Modal}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={pickerMode}
            is24Hour={true}
            display="default"
            onChange={onChange}
            style={styles.TimePickerIOS}
          />
          <Button
            buttonText={IosConfrimButtonText}
            onPress={dismissModal}
            height={'7%'}
            width={'82.5%'}
            backgroundColor={'red'}
            marginTop={'1%'}
            textFontSize={'1'}
            textColor={'white'}
          />
        </Modal>
      ) : (
        show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={pickerMode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Modal: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    margin: 0,
  },
  TextInputInnerContainer: {
    backgroundColor: 'grey',
    opacity: 0.6,
    fontSize: 16,
  },
  Textinput: {
    backgroundColor: 'grey',
    color: 'black',
    fontSize: 16,
  },
  TimePickerIOS: {
    height: '70%',
  },
});

export default DateTimePickerModal;
