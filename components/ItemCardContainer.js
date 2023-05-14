import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ItemCardContainer = ({ imageSrc, title, location, data }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ItemScreen', { param: data })} className='rounded-md border border-gray-300 space-y-2 px-3 py-3 shadow-md bg-white w-[182px] my-2'>
            <Image source={imageSrc} className="h-40 w-full rounded-md object-cover" />
            <Text className='w-full text-[18px] font-bold text-[#428288]'>{title?.length > 18 ? `${title.slice(0, 18)}..` : title}</Text>
            <View className='flex-row items-center space-x-1'>
                <FontAwesome name="map-marker" size={18} color="#8597A2" />
                <Text className='w-full text-[14px] text-gray-400 font-bold'>{location?.length > 24 ? `${location.slice(0, 24)}..` : location}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCardContainer