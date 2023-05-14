import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MenuContainer = ({ title, imageSrc, type, setType }) => {

    const handlePress = () => {
        setType(title.toLowerCase());
    }

    return (
        <TouchableOpacity onPress={handlePress} className="items-center justify-center space-y-2">
            <View className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center border-[1px] ${type === title.toLowerCase() ? 'bg-gray-200 border-[#00BCC9]' : 'border-gray-300'}`}>
                <Image source={imageSrc} className="h-full w-full object-contain" />
            </View>
            <Text className={`${type === title.toLowerCase() ? 'text-[#00BCC9]' : 'text-gray-400'} text-xl font-semibold`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MenuContainer