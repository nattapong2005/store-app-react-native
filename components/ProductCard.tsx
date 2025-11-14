import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProductCard = (props: any) => {
  return (
    <TouchableOpacity className='bg-white rounded-xl p-4 mb-4 shadow-lg'>
        <View className='flex-row'>
            <Image className="w-20 h-20 rounded-lg" source={{uri: props.image}}/>
            <View className='flex-1 ml-4'>
                <Text className='text-lg font-bold text-gray-800'>
                    {props.name}
                </Text>
                <Text className='text-xl font-bold text-blue-600 mt-2'>
                    {props.price}
                </Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCard