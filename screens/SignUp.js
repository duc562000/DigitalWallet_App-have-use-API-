import React,{useState,useEffect,useRef} from "react";
import { View,TextInput, Text,Image,ScrollView,StyleSheet,FlatList,ImageBackground,TouchableOpacity,SafeAreaView,Modal,Animated } from "react-native";
import icons from "../constants/icons"
import {COLORS,SIZES} from "../constants/theme"
import images from "../constants/images"
import { useNavigation } from "@react-navigation/native";


const SignUp = (props) => {
  const [fullName, onChangeFullName] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [phoneNumber, onChangePhoneNumber] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [area, setArea] = useState([])
  const [selectedArea, setSelectedArea] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
      fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then( res => {
        let dataArea = res.map((item) => {
          return {
            name : item.name,
            code : item.alpha2Code,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
          }
        })
        setArea(dataArea)
        if (dataArea.length > 0) {
          let defaultData = dataArea.filter(a => a.code == "VN")

          if (defaultData.length > 0) {
              setSelectedArea(defaultData[0])
          }
      }
      })
  },[])
  const onSelectArea = (value) => {
    setSelectedArea(value)
    setModalVisible(false)
  }
  const navigate = useNavigation()
  return (
    <View style={{flex:1,backgroundColor:COLORS.primary}}>
      <SafeAreaView style={{flex:0.05,backgroundColor:COLORS.primary}}>
        <View style={{
          flexDirection:'row',
          justifyContent:'flex-start',
          alignItems:'center',
          paddingHorizontal:15,
          paddingTop:10,
          }}>
          <TouchableOpacity>
            <Image
            source={icons.back}
            style={{
              width:25,
              height:25,
              tintColor:COLORS.white
            }}
            resizeMode='contain'
            />
          </TouchableOpacity>
          <Text style={styles.txtSignUp}>Sign up</Text>
        </View>
      </SafeAreaView>
      <View style={{flex:0.2,alignItems:'center'}}>
          <Image
            source={images.wallieLogo}
            resizeMode="cover"
            style={{
              width:'70%',
              height:'90%',
              marginTop:20,
            }}
          />
      </View>
      <View style={{
        flex:0.45,
        paddingHorizontal:15,
        paddingVertical:30
        }}>
          <View style={{paddingVertical:15}}>
            <Text style={styles.txtTitleInput}>Full Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeFullName}
              value={fullName}
              placeholder="Enter Full Name"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
          <View style={{paddingVertical:15}}>
            <Text style={styles.txtTitleInput}>Phone Number</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <TouchableOpacity
                onPress={() =>setModalVisible(true)}
                style={[styles.input,{
                  width:120,
                  alignItems:'center',
                  flexDirection:'row',
                  justifyContent:"space-around"
                }]}
              >
                <Image
                  source={icons.down}
                  style={styles.icdown}
                />
                <Image
                  style={styles.iconFlag}
                  source={{uri:selectedArea?.flag}}
                />
                <Text style={styles.areaCode}>{selectedArea?.code} {selectedArea?.callingCode}</Text>
              </TouchableOpacity>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                  <FlatList
                    data={area}
                    showsVerticalScrollIndicator={false}
                    keyExtractor= {item => item.id}
                    renderItem = {({item}) => (
                        <TouchableOpacity 
                        onPress={() => onSelectArea(item)}
                        style={{
                          flexDirection:'row',
                          alignItems:'center',
                          paddingVertical:25,
                          justifyContent:'space-between'
                          }}>
                          <View style={{flexDirection:'row'}}>
                            <Image
                              style={[styles.iconFlag,{marginRight:15}]}
                              source={{uri:item.flag}}
                            />
                            <Text style={styles.code}>{item.name}</Text>
                          </View>
                          <Text style={styles.code}>{item.callingCode}</Text>
                        </TouchableOpacity>
                    )}
                  />
                  </View>
                </View>
              </Modal>
              <TextInput
                style={[styles.input,{width:220}]}
                onChangeText={onChangePhoneNumber}
                value={phoneNumber}
                placeholder="Enter Phone Number"
                placeholderTextColor={COLORS.white}
                selectionColor={COLORS.white}
              />
                </View>
          </View>
          <View style={{paddingVertical:15}}>
            <Text style={styles.txtTitleInput}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              placeholder="Enter Password"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
              secureTextEntry={showPass ? false : true}
            />
            <TouchableOpacity
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                style={styles.icEye}
                source={showPass ? icons.disable_eye : icons.eye}
              />
            </TouchableOpacity>
          </View>
      </View>
      <TouchableOpacity 
        onPress={() => navigate.navigate("Tabs")}
        style={{
          flex:0.09,
          backgroundColor:COLORS.black,
          marginHorizontal:20,
          borderRadius:25,
          alignItems:'center',
          justifyContent:'center'
        }}
      >
          <Text style={styles.txtSignUp}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  txtSignUp:{
    fontSize:22,
    fontWeight:'700',
    paddingLeft:15,
    color:COLORS.white
  },
  input: {
    height: 50,
    borderBottomWidth:1,
    borderBottomColor:COLORS.white,
    fontSize:18,
    color:COLORS.white,
  },
  txtTitleInput:{
    fontSize:17,
    fontWeight:'600',
    color:COLORS.white,
  },
  icEye:{
    width:20,
    height:20,
    tintColor:COLORS.white,
    position:'absolute',
    right:10,
    top:-35,
  },
  icdown:{
    width:12,
    height:12,
    tintColor:COLORS.white,
  },
  iconFlag:{
    width:30,
    height:20,
  },
  areaCode:{
    fontSize:18,
    color:COLORS.white,
  },
  //modal style 
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    paddingHorizontal:20,
    paddingVertical:5,
    backgroundColor: "white",
    borderRadius: 20,
    width:'83%',
    height:"40%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  code:{
    fontSize:16,
    fontWeight:'500',
    color:COLORS.secondary
  }
})

export default SignUp;
