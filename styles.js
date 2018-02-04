import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';


const styles = StyleSheet.create({
  container: {
    padding: width(5)
  },
  wholeForm: {
    marginTop: height(25),
    marginBottom: height(5)
  },
  mangoOrange: {
    backgroundColor: '#ff5722'
  },
  mangoGrey: {
    backgroundColor: '#e0e0e0'
  },
  blackText: {
    color: '#000'
  },
  spaceAround: {
    margin: width(5)
  },
  iconSpace: {
    marginRight: width(2)
  }
});

export default styles;
