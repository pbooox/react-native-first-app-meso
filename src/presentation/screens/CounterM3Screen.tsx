import { useState } from "react"
import { View, Text } from "react-native"
import { FAB } from "react-native-paper"
import { globalStyle } from "../theme/global.sytles"

import Icon from "react-native-vector-icons/Ionicons"


export const CounterM3Screen = () => {
  const [count, setCount] = useState(10)
  return (
    <View style={globalStyle.centerContainer}>
      <Text style={globalStyle.title}>{count}</Text>
    
      <Icon name="accessibility-outline" size={35}/>

      <FAB
        style={ globalStyle.fab }
        // label="+1"
        onPress={ () => { setCount(count + 1) } }
        onLongPress={ () => { setCount(0) } }
        icon="add"
      />

    </View>
  )
}


