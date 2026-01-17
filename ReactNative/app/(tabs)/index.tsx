import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.textPrimary }}>Tab [Home|Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
