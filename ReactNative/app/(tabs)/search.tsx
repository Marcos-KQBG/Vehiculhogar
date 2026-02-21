import ItemList from '@/components/ItemList';
import useFilteredVehicles from '@/hooks/useFilteredVehicles';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useTheme } from '../ThemeContext';

export default function Search() {
  const { searchQuery, setSearchQuery, filteredVehiculos } = useFilteredVehicles();
  const { colors } = useTheme();
  const styles = React.useMemo(() => makeStyles(colors), [colors]);

  console.log("Hora ANTES de renderizar:", new Date().toISOString());
  console.time("Tiempo de renderización");

  useEffect(() => {
    console.timeEnd("Tiempo de renderización");
    console.log("Hora DESPUÉS de renderizar:", new Date().toISOString());
  });

  return (
    <View style={styles.container} >
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por modelo o matrícula..."
        placeholderTextColor={colors.textSecondary}
        value={searchQuery}
        onChangeText={setSearchQuery}
        
      />
      <ScrollView
        contentContainerStyle={styles.listContent}
        scrollEventThrottle={16}
      >
        <View style={styles.gridContainer} >
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


const makeStyles = (colors: any) => StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: 10,
  },
  searchInput: {
    backgroundColor: colors.textPrimary,
    color: colors.background,
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
    margin: 8,
    gap: 16,
    columnGap: 16,
    rowGap: 16,
  },
});