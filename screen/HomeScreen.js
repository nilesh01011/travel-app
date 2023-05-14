import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-white relative">
            {/* first sections */}
            <View className="flex-row px-6 mt-8 items-center space-x-2">
                <View className="w-16 h-16 border-l-4 border-b-2 border-t-2 border-[#00BCC9] rounded-full items-center justify-center">
                    <Text className="text-[#00BCC9] text-3xl font-semibold w-full text-center">Go</Text>
                </View>

                <Text className="text-[#E99265] text-3xl font-semibold w-full">Traveler.</Text>
            </View>
            {/* second sections */}
            <View className="px-6 mt-8 space-y-3">
                <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
                <Text className="text-[#00BCC9] text-[38px] font-bold">Good Moments</Text>

                <Text className="text-[#3C6072] text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</Text>
            </View>
            {/* third sections */}
            <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-40"></View>
            <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>
            {/* Image Container */}
            <View className="flex-1 relative items-center justify-center pt-5">
                <Animatable.Image animation='fadeIn' easing='ease-in-out' source={HeroImage} className="w-[90%] mx-auto h-[500px] object-contain" />
                {/* Go text centers */}
                <TouchableOpacity onPress={() => navigation.navigate('Discover')} className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full flex items-center justify-center">
                    <Animatable.View animation='pulse' easing='ease-in-out' iterationCount='infinite' className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                        <Text className="text-gray-50 text-[36px] font-semibold w-full text-center">Go</Text>
                    </Animatable.View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen