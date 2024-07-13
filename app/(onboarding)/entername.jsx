import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Redirect, router } from "expo-router";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import AsyncStorage from "@react-native-async-storage/async-storage";




const entername = () => {

  const [form, setform] = useState({
    name: "",
  })

  const setUserName = async (name) => {
    try {
      await AsyncStorage.setItem("userName", name);
    }
    catch (e) {
      console.log(e);
    }
  };

  const handlePress = async () => {
    await setUserName(form.name);
    router.push("/setmonthlybudget");
  };

  return (
    <View className="bg-black h-full">
    {/* <SafeAreaView className="bg-black h-full"> */}
      <StatusBar hidden={true} style="light" />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-between items-center min-h-screen">
          <View className="w-full justify-center items-center">
            <View className="w-full justify-start items-center">
              <Text className="text-white text-3xl mt-32">Enter Your Name</Text>
            </View>
            <View className="w-full justify-start items-center ">
              <FormField
                placeholder="Eg. John Doe"
                title="Name"
                value={form.name}
                handleChangeText={(e) => setform({...form,name:e})}
                otherStyles="mx-7 mt-20"
                keyboardType="default"

              />
            </View>
          </View>
          <View className="w-full justify-end items-center ">
            <CustomButton
              title="Next"
              handlePress={handlePress}
              ContainerStyles="mb-20"
            />
          </View>
          {/* <View className="w-full justify-end items-center ">
            <Text className="text-white">{form.name}</Text>
          </View> */}
        </View>
      </ScrollView>
    {/* </SafeAreaView> */}
    </View>
  );
  
};

export default entername;
