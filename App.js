import React, {useState} from 'react';
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading";
import {MealsNavigator} from "./src/navigation/MealsNavigator";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";

const fetchFonts = async () => {
  await Font.loadAsync({
    'JBMed': require('./assets/fonts/JetBrainsMono-Medium.ttf'),
    'JBBold': require('./assets/fonts/JetBrainsMono-Bold.ttf')
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if(!isReady){
    return <AppLoading startAsync={fetchFonts}
                       onFinish={() => setIsReady(true)}
                       onError={e => console.log(e)}/>
  }

  return (
      <Provider store={store}>
        <MealsNavigator />
      </Provider>
  )
}
