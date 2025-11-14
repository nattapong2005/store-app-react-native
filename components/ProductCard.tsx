import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ProductCard = (props: any) => {
    return (
        <View className="bg-white h-full rounded-xl overflow-hidden shadow-lg">
            <Image
                source={{ uri: props.image }}
                className="w-full h-40"
                resizeMode="cover"
            />
            <View className="p-3 flex-1">
                <Text className="text-sm font-bold text-gray-800">
                    {props.name}
                </Text>
                <Text className="text-sm font-bold text-violet-600 mt-1">
                    ฿{props.price} 
                </Text>
                <TouchableOpacity onPress={() => alert("สินค้าหมดไปซื้อร้านอื่นเถอะครับ")} className="bg-violet-500 mt-auto px-3 py-2 rounded-lg items-center hover:bg-violet-600">
                    <Text className="text-white font-bold">ซื้อเลย</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ProductCard
