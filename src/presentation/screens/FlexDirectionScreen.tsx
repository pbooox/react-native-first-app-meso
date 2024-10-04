import { StyleSheet, View } from "react-native"

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>

        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>

        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>

        <View style={[styles.box, styles.box1]}/>
        <View style={[styles.box, styles.box2]}/>
        <View style={[styles.box, styles.box3]}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gray'
        // probar todas las posibles posiciones
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 10
    },
    box: {
        width: 100,
        height: 100
    },
    box1: {
        backgroundColor: '#5856d6',
    },
    box2: {
        backgroundColor: '#39378a',
    },
    box3: {
        backgroundColor: '#19193d',
    }
})
