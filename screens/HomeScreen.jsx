import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/emptyList'
import { useNavigation } from '@react-navigation/native'

var items = [
    {
        id: 1,
        place: 'test1',
        country: 'test1',
    },
    {
        id: 2,
        place: 'test2',
        country: 'test2',
    },
    {
        id: 3,
        place: 'test3',
        country: 'test3',
    },
    {
        id: 4,
        place: 'test4',
        country: 'test4',
    },
]

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
   <ScreenWrapper className="flex-1">
    <View className="flex-row justify-between items-center p-4">
       <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>ExpSplitz</Text>
       <TouchableOpacity className="p-2 px-3 bg-white border border-gray-200 rounded-full">
        <Text className={colors.heading}>Logut</Text>
       </TouchableOpacity>
    </View>
    <View className="flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4">
        <Image source={require('../assets/images/banner.png')} className="w-60 h-60"/>
    </View>
    <View className="px-4 space-y-3">
        <View className="flex-row justify-between items-center">
            <Text className={`${colors.heading} font-bold text-xl`}>Recent Transactions</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('AddTrans')} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                <Text className={colors.heading}>Add</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: 430}}>
            <FlatList 
                data={items}
                numColumns={2}
                ListEmptyComponent={<EmptyList message={"You haven't recorded any transactions yet!"}/>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{
                    justifyContent: 'space-between'
                }}
                className="mx-1"
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity className="bg-whit p-3 rounded-2xl mb-3 shadow-sm">
                            <View>
                                <Image source={randomImage()} className="w-36 h-36 mb-2" />
                                <Text className={`${colors.heading} font-bold`}>{item.place}</Text>
                                <Text className={`${colors.heading} text-xs`}>{item.country}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    </View>
   </ScreenWrapper>
 
  )
}