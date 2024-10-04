import { StyleSheet, View } from "react-native"

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={styles.greenBox}/>
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox}/>
        {/* <View style={styles.greenBox}/> */}
    </View>
  )
}

// absolute

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 150,
        // width: 300,
        backgroundColor: '#28c4d9',
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856d6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#f0a23b',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    }
    // greenBox: {
    //     // width: 100,
    //     // height: 100,
    //     backgroundColor: 'green',
    //     borderWidth: 10,
    //     borderColor: 'white',
    //     // top: 0,
    //     // bottom:0,
    //     // right: 0,
    //     // left:0,
    //     ...StyleSheet.absoluteFillObject
    // }
})

// relative

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         // height: 150,
//         // width: 300,
//         backgroundColor: '#28c4d9',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     purpleBox: {
//         width: 100,
//         height: 100,
//         backgroundColor: '#5856d6',
//         borderWidth: 10,
//         borderColor: 'white',
//         position: 'relative',
//         top: 0
//     },
//     orangeBox: {
//         width: 100,
//         height: 100,
//         backgroundColor: '#f0a23b',
//         borderWidth: 10,
//         borderColor: 'white',
//         position: 'relative',
//         top: 0,
//         left: 0
//     }
// })


