import ItemList from '@/components/ItemList';
import { Colors } from '@/constants/Colors';
import useFilteredVehicles from '@/hooks/useFilteredVehicles';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';

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
      <FlatList
        contentContainerStyle={styles.listContent}
        data={filteredVehiculos}
        keyExtractor={(item) => item.matricula}
        renderItem={({ item }) => (
          <ItemList
            imagen={item.imagen}
            modelo={item.modelo}
            matricula={item.matricula}
            ano={item.año.toString()}
            motor={item.motor}
          />
        )}
        numColumns={4}
        columnWrapperStyle={styles.row}
        
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    alignItems: 'center',
    flex: 1,
  },
  searchInput: {
    backgroundColor: Colors.textPrimary,
    color: Colors.background,
    paddingHorizontal: 15,
    paddingVertical: 12,
    margin: 10,
    width: '70%',
    alignContent: 'center',
    borderRadius: 8,
    fontSize: 16,
  },
  row: {
    justifyContent: 'center'
  },
  listContent: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    paddingBottom: 20,
  },
});