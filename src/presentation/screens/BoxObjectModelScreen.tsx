import { StyleSheet, Text, View } from "react-native"
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors"

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        {/* <Text style={ styles.title }>BoxObjectscreen</Text> */}

        <View style={styles.purpleBox}>
          <Text style={{ color: 'white' }}>Hola mundo</Text>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 4,
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 30,
    // margin: 20,
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5
  }
})