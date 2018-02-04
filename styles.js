import { StyleSheet } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';


const styles = StyleSheet.create({
  container: {
    padding: width(5)
  },
  wholeForm: {
    marginTop: height(20),
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
  },
  heightMin: {
    minHeight: height(10)
  },
  bottomBorder: {
    borderColor: '#ff5722',
    borderStyle: 'solid',
    borderTopWidth: 0.5,
  },
  activitiesList: {
    marginTop: height(5)
  },
  title1: {
    fontSize: width(6)
  },
  maxProfileHeight: {
    maxHeight: height(40)
  },
  profileDivider: {
    marginBottom: height(2)
  },
  innerCardPadding: {
    padding: width(2)
  }
});

export default styles;
