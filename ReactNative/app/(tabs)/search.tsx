import ItemList from '@/components/ItemList';
import { Colors } from '@/constants/Colors';
import useFilteredVehicles from '@/hooks/useFilteredVehicles';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function Search() {
  const { searchQuery, setSearchQuery, filteredVehiculos } = useFilteredVehicles();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por modelo o matrícula..."
        placeholderTextColor={Colors.textSecondary}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView
        contentContainerStyle={styles.listContent}
        scrollEventThrottle={16}
      >
        <View style={styles.gridContainer}>
          {filteredVehiculos.map((item) => (
            <ItemList
              key={item.matricula}
              imagen={item.imagen}
              modelo={item.modelo}
              matricula={item.matricula}
              ano={item.año.toString()}
              motor={item.motor}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    
    backgroundColor: Colors.background,
    flex: 1,
    paddingTop: 10,
  },
  searchInput: {
    backgroundColor: Colors.textPrimary,
    color: Colors.background,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    width: '70%',
    alignSelf: 'center',
    borderRadius: 8,
    fontSize: 16,
  },
  listContent: {
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    columnGap: 16,
    rowGap: 16,
  },
});