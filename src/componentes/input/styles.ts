import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
    width: '100%'
   },
   group: {
      height: 56,
      width: '100%',
      backgroundColor: '#1111',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      overflow: 'hidden',
      gap:4
   },
   control: {
      flex:1,
      fontSize: 16
   }
});