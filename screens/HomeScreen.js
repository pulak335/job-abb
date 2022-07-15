import { useNavigation } from '@react-navigation/core';
import React,{useState,useRef} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, Button, ScrollView, DatePickerIOS, Alert } from 'react-native'
import { auth } from '../firebase';
import {Picker} from '@react-native-picker/picker';

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  const [isSelected, setSelection] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Select');
  const [toggle, setToggle] = useState(false);


  const [chosenDate, setChosenDate] = useState(new Date());
  // const [start, setOpen] = useState(false)



  const from = useRef(null);

  const pickerRef = useRef('java');

  function open() {
  pickerRef.current.focus();
  }

  function close() {
  pickerRef.current.blur();
  }


  const ButtonAlert = () =>
  Alert.alert(
    "Your request submited !",
    "We response you with in 30 mins",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );
  return (
    <View style={styles.container}>
      
      <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Request an ambulance</Text>

      
      <View>
        <Text style={styles.label}>From</Text>
        <TextInput style={styles.input}
        ref={from}
        value={from}
        placeholder=""
        />
      </View>


      <View>
        <Text style={styles.label}>Destination</Text>
        <TextInput style={styles.input}
        ref={from}
        value={from}
        placeholder=""
        />
      </View>

      <View>
        <Text style={styles.label}>Ambulance Type</Text>
        <View style={styles.btn}>

        <Button title={`${selectedLanguage}`} onPress={()=>setToggle(!toggle)}/>

{
   toggle &&  <Picker
   ref={pickerRef}
   selectedValue={selectedLanguage}
   onValueChange={(itemValue, itemIndex) =>
       setSelectedLanguage(itemValue)
   }>
   <Picker.Item label="AC" value="AC" />
   <Picker.Item label="Non-AC" value="Non-AC" />
   <Picker.Item label="Frezzer" value="Frezzer" />
   <Picker.Item label="ICU" value="ICU" />
   </Picker>
}
        </View>
      </View>




      <View style={styles.date}>
        <Text style={styles.label}>Date</Text>
        <DatePickerIOS
        date={chosenDate}
        onDateChange={setChosenDate}
      />
      </View>



      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input}
        ref={from}
        value={from}
        placeholder=""
        />
      </View>


      <View>
        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input}
        ref={from}
        value={from}
        placeholder=""
        keyboardType='numeric'
        />
      </View>


    <TouchableOpacity style={styles.submitBtn} onPress={ButtonAlert}>
        <Text style={{textAlign:'center'}}>Send Ambulance Request</Text>
    </TouchableOpacity>
      

    </View>
    </ScrollView>

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:Dimensions.get('screen').width-30
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width:width
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:width-30,
    borderRadius:5
  },
  btn:{
    borderWidth:1,
    width:width-30,
    borderRadius:5
  },
  date:{
    width:width,
  },
  submitBtn:{
    width:width-30,
    textAlign:'center',
    backgroundColor:'#ebc934',
    padding:20,
    borderRadius:10
  },
  title:{
    color:'#ebc934',
    fontSize:22,
    fontWeight:'bold',
    marginVertical:20
  },
  label:{
    fontSize:18,
    textAlign:'center',
    marginVertical:10
  }
})
