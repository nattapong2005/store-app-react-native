import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import ProductCard from './components/ProductCard';
import products from './data';

export default function App() {
  
  return (
    // SafeAreaView ช่วยให้เนื้อหาอยู่ภายใต้ขอบเขตที่ปลอดภัย (เช่น notch)
    <SafeAreaView className="flex-1 bg-gradient-to-b from-blue-50 to-white">
      <StatusBar style="dark" />
      
      {/* Header */}
      {/* ใช้ 'sm:' prefix เพื่อเปลี่ยน padding และ text size บนจอที่ใหญ่ขึ้น */}
      <View className="bg-blue-600 pt-12 pb-6 shadow-lg px-4 sm:px-6">
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center">
            <View className="bg-white rounded-full p-2 mr-3">
              <Text className="text-xl sm:text-2xl">🏪</Text>
            </View>
            <View>
              <Text className="font-bold text-white text-2xl sm:text-3xl">
                Khan Store
              </Text>
              <Text className="text-blue-100 text-xs sm:text-sm">
                ร้านอุปกรณ์ไอทีครบวงจร
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-white/20 rounded-full p-2">
            <Text className="text-xl sm:text-2xl">🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ใช้ ScrollView หลักสำหรับเนื้อหาทั้งหมด */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>

        {/* Container สำหรับเนื้อหา (จัดกลางในจอใหญ่) */}
        {/* mx-auto และ max-w-* ใช้สำหรับจัดกลางเนื้อหาในจอ Tablet/Desktop */}
        <View className="md:max-w-4xl lg:max-w-6xl md:mx-auto">
          
          {/* Promotional Banner */}
          <View className="bg-gradient-to-r from-orange-400 to-red-500 mt-4 p-4 rounded-2xl shadow-md mx-4">
            <Text className="text-white font-bold text-base sm:text-lg">
              🎉 โปรโมชั่นพิเศษ!
            </Text>
            <Text className="text-white mt-1 text-xs sm:text-sm">
              ลดสูงสุด 30% สำหรับสินค้าทุกชิ้น
            </Text>
          </View>

          {/* Categories */}
          <View className="mt-4 md:mt-6">
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }} // 16px = px-4
            >
              {['ทั้งหมด', 'เมาส์', 'คีย์บอร์ด', 'จอมอนิเตอร์', 'อุปกรณ์เสียง'].map((category, index) => (
                <TouchableOpacity 
                  key={index}
                  className={`mr-3 rounded-full px-4 py-2 sm:px-5 sm:py-2.5 ${
                    index === 0 ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <Text className={`font-semibold text-sm sm:text-base ${
                    index === 0 ? 'text-white' : 'text-gray-700'
                  }`}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Products Section */}
          <View className="mt-4 mb-2 px-4">
            <Text className="font-bold text-gray-800 text-lg sm:text-xl">
              สินค้าแนะนำ
            </Text>
            <Text className="text-gray-500 text-xs sm:text-sm">
              มีสินค้า {products.length} รายการ
            </Text>
          </View>

          {/* Product Grid */}
          {/* นี่คือหัวใจของ Responsive Grid:
            - flex-row flex-wrap: สร้างแถวและอนุญาตให้ขึ้นบรรทัดใหม่
            - px-2: เพิ่ม padding ด้านข้างเล็กน้อย
          */}
          <View className="flex-row flex-wrap px-2 pb-6">
            {products.map((p) => (
              // 
              // นี่คือคลาสที่ควบคุมคอลัมน์:
              // - w-full: (Mobile-First) 1 คอลัมน์ (กว้าง 100%)
              // - sm:w-1/2: (Small screen) 2 คอลัมน์ (กว้าง 50%)
              // - md:w-1/3: (Medium screen) 3 คอลัมน์ (กว้าง 33.3%)
              // - lg:w-1/4: (Large screen) 4 คอลัมน์ (กว้าง 25%)
              //
              <View key={p.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
                <ProductCard 
                  name={p.name} 
                  price={p.price} 
                  image={p.image}
                  // ไม่จำเป็นต้องใช้ prop 'compact' แล้ว เพราะ ProductCard จะ responsive ด้วยตัวเอง
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      {/* เพิ่ม md:hidden เพื่อซ่อนในจอขนาดกลางขึ้นไป (แท็บเล็ต, เดสก์ท็อป) */}
      <View className="bg-white border-t border-gray-200 pb-2 pt-2 px-4 md:hidden">
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
    </SafeAreaView>
  );
}