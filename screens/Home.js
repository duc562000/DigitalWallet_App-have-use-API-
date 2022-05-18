import React,{useState,useEffect,useRef} from "react";
import { View,TextInput, Text,Image,ScrollView,StyleSheet,FlatList,ImageBackground,TouchableOpacity,SafeAreaView,Modal,Animated } from "react-native";
import icons from "../constants/icons"
import {COLORS,SIZES} from "../constants/theme"
import images from "../constants/images"
import { featuresData,specialPromoData } from "../apis/apis";


const Home = (props) => {
  const [features,setFeatures] = useState(featuresData)
  const [specialPromo,setSpecialPromo] = useState(specialPromoData)
  return (
    
        <View style={{flex:1,backgroundColor:COLORS.white}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView style={{flex:0.12,backgroundColor:COLORS.white}}>
                <View style={{
                    flexDirection:'row',
                    justifyContent:"space-between",
                    alignItems:'center',
                    paddingHorizontal:15,
                    paddingTop:10,
                    }}>
                    <View>
                        <Text style={styles.txtHello}>Hello!</Text>
                        <Text style={styles.txtgray}>Ngyun Min Dukc</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.icon}
                            source={icons.bell}
                        />
                        <View
                            style={{
                                width:8,
                                height:8,
                                borderRadius:8,
                                backgroundColor:COLORS.red,
                                position:'absolute',
                                right:-5,
                                top:-8
                            }}
                        />
                    </View>
                </View>
                </SafeAreaView>
                <View style={{flex:0.2,marginHorizontal:15,marginTop:20}}>
                    <Image
                        style={{
                            width:'100%',
                            height:200,
                            borderRadius:25
                        }}
                        source={images.banner}
                    />
                </View>
                <View style={{flex:0.4,paddingHorizontal:15}}>
                    <Text style={styles.txttitle}>Features</Text>
                    <FlatList
                        scrollEnabled={false}
                        data={features}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        numColumns={4}
                        showsVerticalScrollIndicator={false}
                        keyExtractor= {item => item.id}
                        renderItem = {({item}) => (
                            <TouchableOpacity style={{
                                alignItems:'center',
                                width:70,
                                paddingBottom:25,
                                }}>
                                <View
                                    style={{
                                        width:60,
                                        height:60,
                                        backgroundColor:item.backgroundColor,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        marginBottom:10,
                                    }}
                                >
                                    <Image
                                        style={[styles.icon,{tintColor:item.color}]}
                                        source={item.icon}
                                    />
                                    
                                </View>
                                <Text style={styles.txtDesc}>{item.description}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View style={{flex:0.28}}>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        paddingHorizontal:15
                        }}>
                        <Text style={styles.txttitle}>Special Promo</Text>
                        <Text style={[styles.txtgray,{letterSpacing:0}]}>View All</Text>
                    </View>
                    <FlatList
                        scrollEnabled={false}
                        data={specialPromo}
                        // columnWrapperStyle={{ justifyContent: 'space-between' }}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor= {item => item.id}
                        renderItem = {({item}) => (
                            <TouchableOpacity style={{
                                flex:1,
                                paddingBottom:25,
                                marginHorizontal:15,
                                marginVertical:5,
                                borderLeftWidth:1,
                                borderBottomWidth:1,
                                borderRightWidth:1,
                                borderTopLeftRadius:15,
                                borderTopRightRadius:15,
                                borderColor:COLORS.darkgray,
                                alignItems:'center'
                                }}>
                                <Image
                                    style={styles.banner}
                                    source={item.img}
                                />
                                <Text style={[styles.txttitle]}>{item.title}</Text>
                                <Text style={styles.txtgray}>{item.description}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
    icon:{
        width:25,
        height:25,
        tintColor:COLORS.black,
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
    txttitle:{
        fontSize:18,
        fontWeight:'700',
        paddingVertical:20
    },
    txtDesc:{
        fontSize:16,
        color:COLORS.black,
        fontWeight:'500',
        flexWrap:'wrap',
        textAlign:"center"
    },
    banner:{
        width:'100%',
        height:100,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    }
})

export default Home;
