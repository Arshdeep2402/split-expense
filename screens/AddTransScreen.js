import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'
import Loading from '../components/loading'
import Snackbar from 'react-native-snackbar'
import { addDoc } from 'firebase/firestore'
import { tripsRef } from '../config/firebase'
import { useSelector } from 'react-redux'

export default function AddTransScreen() {
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {user} = useSelector(state=> state.user)

  const handleTransaction = async () => {
    if(place && country){
      // navigation.navigate('Home');
      setLoading(true);
      let doc = await addDoc(tripsRef, {
        place,
        country,
        userId: user.uid,
      });
      setLoading(false);
      if(doc && doc.id){
        navigation.goBack();
      }
    } else{
      Snackbar.show({
        text: 'Place and Country are required!',
        backgroundColor: 'red',
      });
    }
  }

  return (
    <ScreenWrapper>
      <View className="flex justify-between h-full mx-4">
        <View>
          <View className=" mt-5">
            <View className="top-0 left-0"> 
              <BackButton />
            </View>
              <Text className={`${colors.heading} text-xl font-bold text-center`}>Add Transaction</Text>
          </View>

            <View className="flex-row justify-center my-3 mt-5">
              <Image className="h-72 w-72" source={require('../assets/images/4.png')} />
            </View>
            <View className="space-y-2 mx-2">
              <Text className={`${colors.heading} text-lg font-bold`}> Where on Earth?</Text>
              <TextInput value={place} onChangeText={value=> setPlace(value)} className="p-4 bg-white rounded-full mb-3" />
              <Text className={`${colors.heading} text-lg font-bold`}> Which Country?</Text>
              <TextInput value={country} onChangeText={value=> setCountry(value)} className="p-4 bg-white rounded-full mb-3" />
            </View>
        </View>
       
        <View>
          {
            loading? (
              <Loading />
            ): (
                <TouchableOpacity onPress={handleTransaction} style={{backgroundColor: colors.button}} className="my-6 rounded-full p-3 shadow-sm mx-2">
                   <Text className="text-center text-white text-lg font-bold">Add Transaction</Text>
                </TouchableOpacity>
            )
          }
          
        </View>
      </View>
    </ScreenWrapper>
  )
}