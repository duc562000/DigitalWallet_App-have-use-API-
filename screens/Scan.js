import React,{useState,useEffect,useRef} from "react";
import { View,TextInput, Text,StatusBar,Image,ScrollView,StyleSheet,FlatList,ImageBackground,TouchableOpacity,SafeAreaView,Modal,Animated } from "react-native";
import icons from "../constants/icons"
import {COLORS,SIZES} from "../constants/theme"
import images from "../constants/images"
import { RNCamera } from 'react-native-camera'
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const Scan = (props) => {
  const navigate = useNavigation()
  
  return (
    
        <View style={{flex:1,backgroundColor:COLORS.transparent}}>
            <StatusBar barStyle="light-content"/>
            
            <RNCamera
                ref={ref => {
                    this.camera = ref
                }}
                style={{ flex: 1,alignItems:'center',justifyContent:'center'}}
                captureAudio={false}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title: "Permission to use camera",
                    message: "Camera is required for barcode scanning",
                    buttonPositive: "OK",
                    buttonNegative: "Cancel"
                }}
            >
                <TouchableOpacity 
                onPress={() => navigate.navigate('More')}
                style={{
                    paddingHorizontal:15,
                    position:'absolute',
                    left:10,
                    
                    top:80
                    }}>
                    
                        <Image
                            style={styles.icon}
                            source={icons.close}
                        />
                </TouchableOpacity>
                <Animatable.View
                    style={styles.scannerView}
                    animation={"pulse"}
                    iterationCount={"infinite"}
                >
                    <View style={styles.borderTopLeft} />
                    <View style={styles.borderTopRight} />
                    <View style={styles.borderBottomLeft} />
                    <View style={styles.borderBottomRight} />
                </Animatable.View>
            </RNCamera>
        </View>
  );
};

const BORDER = {
    position: "absolute",
    borderColor: COLORS.primary,
    width: 55,
    height: 55,
  };
  const BORDER_WIDTH = 10;
  const BORDER_RADIUS = 35;

const styles = StyleSheet.create({
    icon:{
        width:20,
        height:20,
        tintColor:COLORS.white,
    },
    txtHello:{
        fontSize:23,
        fontWeight:'600',
        color:COLORS.black
    },
    txtgray:{
        fontSize:16,
        letterSpacing:1,
        color:COLORS.darkgray,
        fontWeight:'500'
    },
    scannerView: {
        width: 220,
        height: 220,
      },
      borderTopLeft: {
        ...BORDER,
        top: 0,
        left: 0,
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
      },
      borderTopRight: {
        ...BORDER,
        top: 0,
        right: 0,
        borderTopRightRadius: BORDER_RADIUS,
        borderTopWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
      },
      borderBottomLeft: {
        ...BORDER,
        bottom: 0,
        left: 0,
        borderBottomLeftRadius: BORDER_RADIUS,
        borderBottomWidth: BORDER_WIDTH,
        borderLeftWidth: BORDER_WIDTH,
      },
      borderBottomRight: {
        ...BORDER,
        bottom: 0,
        right: 0,
        borderBottomRightRadius: BORDER_RADIUS,
        borderBottomWidth: BORDER_WIDTH,
        borderRightWidth: BORDER_WIDTH,
      },
})

export default Scan;
