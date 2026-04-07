import { Pressable, StyleSheet, Text } from "react-native";

type FABPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface FABProps {
    label: string;
    position?: FABPosition;

    // Methods
    onPress?: () => void;
    onLongPress?: () => void;
}

export default function FAB({ 
    label, 
    position = 'bottom-right', 
    onPress, 
    onLongPress
}: FABProps) {

    return (
        <Pressable
        style={({ pressed }) => [
            styles.floatingButton, 
            styles[position],
            pressed && styles.pressed
        ]}
        onPress={() => onPress?.()}
        onLongPress={() => onLongPress?.()}
        >
            <Text style={{ color: "white", fontSize: 20}} >{label}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    floatingButton: {
    position: 'absolute',
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 20,

    //shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // shadow for Android
    elevation: 4,
  },

  "bottom-right": {
    right: 20,
    bottom: 20,
  },

  "bottom-left": {
    left: 20,
    bottom: 20,
  },

  "top-left": {
    top: 30,
    left: 20,
  },

  "top-right": {
    top: 30,
    right: 20,
  },

  pressed: {
    backgroundColor: "#45356f",
    // opacity: 0.5,
  },
})