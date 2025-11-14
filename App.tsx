import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import products from './data'
import ProductCard from './components/ProductCard'

const App = () => {
    return (
        <>
            <View className="flex-1 bg-white">
                <View className="w-full bg-violet-600 p-5 gap-5 flex-row justify-center items-center">
                    <TouchableOpacity>
                        <Text className="text-white font-semibold">หน้าแรก</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className="text-white font-semibold">สินค้าทั้งหมด</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className="text-white font-semibold">ตะกร้า</Text>
                    </TouchableOpacity>
                </View>
                <View className="bg-gradient-to-r from-violet-500 to-purple-700 p-5 h-52 items-center justify-center">
                    <Text className="text-2xl text-white font-bold text-center mb-1">
                        Welcome to Khan Store Kak Kak
                    </Text>
                    <Text className="text-lg text-white text-center">
                        ร้านขายอุปกรณ์ไอที "กาก กาก"
                    </Text>
                </View>
                <Text className='text-2xl font-bold mt-2 mb-2 ml-2'>รายการสินค้าทั้งหมด {products.length} รายการ</Text>
                <hr />
                <ScrollView className="px-4 mt-5">
                    <View className="flex-row flex-wrap justify-between">
                        {products.map((p) => (
                            <View key={p.id} className="w-[48%] mb-4">
                                <ProductCard
                                    name={p.name}
                                    price={p.price}
                                    image={p.image}
                                />
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
export default App
