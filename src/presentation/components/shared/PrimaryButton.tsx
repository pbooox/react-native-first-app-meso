import { Pressable, Text, Platform, StyleSheet } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: ()=> void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }:Props) => {
  return (
    
    <Pressable
        style={ ({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ] }
        // si viene el onPress en los props entonces que lo ejecute
        onPress={ () => onPress && onPress() }
        // si viene el onLongPress en los props entonces que lo ejecute
        onLongPress={ () => onLongPress && onLongPress() }
      >
        
        <Text style={{ color: Platform.OS === 'android' ? 'white' : '#4746AB' }}>
            { label }
        </Text>
      </Pressable>
      
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: Platform.OS === 'android'? '#5856D6': 'white',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    buttonPressed: {
      backgroundColor: Platform.OS === 'android'? '#4746AB': 'white'
    }
  })