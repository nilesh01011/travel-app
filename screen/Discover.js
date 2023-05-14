import { View, Text, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import { ScrollView } from 'react-native';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlaceData } from '../api';

const Discover = () => {
    const navigation = useNavigation();

    const [type, setType] = useState('restaurants');
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        setIsLoading(true);

        getPlaceData().then(data => {
            setMainData(data);
            setInterval(() => {
                setIsLoading(false);
            }, 1000)
        })
    }, [])

    return (
        <SafeAreaView className="flex-1 bg-white relative pt-8">
            <View className='border-b-[1px] border-gray-200/50 px-4'>
                <View className="flex-row items-center justify-between">
                    <View>
                        <Text className='text-[40px] text-[#0B646B] font-bold'>Discover</Text>
                        <Text className='text-[#527873] text-[36px]'>the beauty in today</Text>
                    </View>

                    <View className="w-12 h-12 bg-gray-400 items-center justify-center rounded-md shadow-lg">
                        <ImageBackground source={Avatar} imageStyle={{ borderRadius: 5 }} resizeMode="contain" className="w-full h-full object-contain rounded-md shadow-lg"></ImageBackground>
                    </View>
                </View>

                <View className="flex-row items-center bg-white rounded-md px-4 shadow-lg my-4 border-[1px] border-gray-300">
                    <GooglePlacesAutocomplete
                        GooglePlacesDetailsQuery={{ fields: 'geometry' }}
                        placeholder='Search'
                        fetchDetails={true}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(details?.geometry?.viewport);
                        }}
                        query={{
                            key: 'AIzaSyDvBFa8TgqJC39J3kMsWXQgJG_1vZSzFyM',
                            language: 'en',
                        }}
                    />
                </View>
            </View>
            {/* menu containers */}
            {
                isLoading === true ?
                    <View className='flex-1 items-center justify-center'>
                        <ActivityIndicator size="large" color="#0B646B" />
                    </View>
                    :
                    <ScrollView className='px-4'>
                        <View className="flex-row items-center justify-between mt-4 mb-8">
                            <MenuContainer key={"hotel"} title="Hotels" imageSrc={Hotels} type={type} setType={setType} />
                            <MenuContainer key={"attractions"} title="Attractions" imageSrc={Attractions} type={type} setType={setType} />
                            <MenuContainer key={"restaurants"} title="Restaurants" imageSrc={Restaurants} type={type} setType={setType} />
                        </View>

                        {/* top tips */}
                        <View className='mb-4'>
                            <View className='flex-row items-center justify-between'>
                                <Text className='text-[#2C7379] text-[28px] font-bold w-[100px]'>Top Tips</Text>
                                <TouchableOpacity className='flex-row items-center justify-center space-x-2'>
                                    <Text className='text-[#A0C4C7] text-[20px] font-bold w-[65px]'>Explore</Text>
                                    <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
                                </TouchableOpacity>
                            </View>

                            {/* cards list */}
                            <View className='flex-row mt-8 items-center justify-between flex-wrap'>
                                {
                                    mainData?.length > 0 ?
                                        <>
                                            {
                                                mainData?.map((data, i) => {
                                                    return (
                                                        <ItemCardContainer key={i} data={data} imageSrc={data?.image ? data?.image : ''} title={data?.name} location={data?.location} />
                                                    )
                                                })
                                            }
                                        </>
                                        :
                                        <>
                                            <View className='w-full h-[300px] items-center justify-center space-y-8'>
                                                <Image source={NotFound} className='w-32 h-32 object-cover' />
                                                <Text className='text-2xl text-[#428288] font-semibold w-full text-center'>!Opps... No Data Found</Text>
                                            </View>
                                        </>
                                }
                            </View>
                        </View>
                    </ScrollView>
            }
        </SafeAreaView>
    )
}

export default Discover