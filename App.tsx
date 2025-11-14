import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native';
import ProductCard from './components/ProductCard';
import products from './data';

export default function App() {
  const { width } = useWindowDimensions();
  
  // คำนวณจำนวนคอลัมน์ตามขนาดหน้าจอ
  const getColumns = () => {
    if (width < 380) return 1; // Mobile เล็ก
    if (width < 768) return 2; // Mobile ปกติ
    if (width < 1024) return 3; // Tablet
    return 4; // Desktop
  };
  
  const columns = getColumns();
  const itemWidth = width > 768 ? `${100 / columns - 2}%` : '48%';
  
  return (
    <View className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className={`bg-blue-600 pt-12 pb-6 shadow-lg ${width < 380 ? 'px-3' : 'px-5'}`}>
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center">
            <View className="bg-white rounded-full p-2 mr-3">
              <Text className={width < 380 ? 'text-xl' : 'text-2xl'}>🏪</Text>
            </View>
            <View>
              <Text className={`font-bold text-white ${width < 380 ? 'text-2xl' : 'text-3xl'}`}>
                Khan Store
              </Text>
              <Text className={`text-blue-100 ${width < 380 ? 'text-xs' : 'text-sm'}`}>
                ร้านอุปกรณ์ไอทีครบวงจร
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-white/20 rounded-full p-2">
            <Text className={width < 380 ? 'text-lg' : 'text-xl'}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Promotional Banner */}
      <View className={`bg-gradient-to-r from-orange-400 to-red-500 mt-4 p-4 rounded-2xl shadow-md ${
        width < 768 ? 'mx-4' : 'mx-auto'
      }`} style={{ width: width < 768 ? undefined : Math.min(width - 40, 1200) }}>
        <Text className={`text-white font-bold ${width < 380 ? 'text-base' : 'text-lg'}`}>
          🎉 โปรโมชั่นพิเศษ!
        </Text>
        <Text className={`text-white mt-1 ${width < 380 ? 'text-xs' : 'text-sm'}`}>
          ลดสูงสุด 30% สำหรับสินค้าทุกชิ้น
        </Text>
      </View>

      {/* Categories */}
      <View className={width < 768 ? 'mt-4' : 'mt-6 items-center'}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className={width < 768 ? 'px-4 max-h-20' : 'max-h-20'}
          contentContainerStyle={width >= 768 ? { paddingHorizontal: 20 } : undefined}
        >
          {['ทั้งหมด', 'เมาส์', 'คีย์บอร์ด', 'จอมอนิเตอร์', 'อุปกรณ์เสียง'].map((category, index) => (
            <TouchableOpacity 
              key={index}
              className={`mr-3 rounded-full ${
                width < 380 ? 'px-4 py-2' : 'px-5 py-2.5'
              } ${index === 0 ? 'bg-blue-600' : 'bg-gray-200'}`}
            >
              <Text className={`font-semibold ${
                width < 380 ? 'text-sm' : 'text-base'
              } ${index === 0 ? 'text-white' : 'text-gray-700'}`}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Products Section */}
      <View className={`mt-4 mb-2 ${width < 768 ? 'px-4' : ''}`} style={{
        width: width >= 768 ? Math.min(width - 40, 1200) : undefined,
        alignSelf: width >= 768 ? 'center' : undefined
      }}>
        <Text className={`font-bold text-gray-800 ${width < 380 ? 'text-lg' : 'text-xl'}`}>
          สินค้าแนะนำ
        </Text>
        <Text className={`text-gray-500 ${width < 380 ? 'text-xs' : 'text-sm'}`}>
          มีสินค้า {products.length} รายการ
        </Text>
      </View>

      <ScrollView 
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: width < 768 ? 16 : 0,
          alignItems: width >= 768 ? 'center' : undefined
        }}
      >
        <View 
          className="flex-row flex-wrap pb-6"
          style={{
            width: width >= 768 ? Math.min(width - 40, 1200) : '100%',
            justifyContent: width < 380 ? 'center' : 'space-between'
          }}
        >
          {products.map((p) => (
            <View 
              key={p.id}
              style={{ width: itemWidth }}
              className={width < 380 ? 'mb-4' : ''}
            >
              <ProductCard 
                name={p.name} 
                price={p.price} 
                image={p.image}
                compact={width < 380}
              />
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="bg-white border-t border-gray-200 pb-2 pt-2 px-4">
        <View className="flex-row justify-around items-center">
          <TouchableOpacity className="items-center py-2">
            <Text className="text-2xl mb-1">🏠</Text>
            <Text className="text-blue-600 text-xs font-semibold">หน้าแรก</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center py-2">
            <Text className="text-2xl mb-1">🔍</Text>
            <Text className="text-gray-500 text-xs">ค้นหา</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center py-2">
            <Text className="text-2xl mb-1">❤️</Text>
            <Text className="text-gray-500 text-xs">รายการโปรด</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center py-2">
            <Text className="text-2xl mb-1">👤</Text>
            <Text className="text-gray-500 text-xs">โปรไฟล์</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}