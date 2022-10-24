import React from 'react';
import {StyleSheet, View} from 'react-native';
import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';

{/* como objeto foi descontruido, agente pode pegar ele diretamente como se fossem props*/}
export default function Cesta({topo, detalhes}) {
  return <>

  {/* Como topo virou um compenente, esotu repetindo o processo, passando o objeto descontruiído */}
    <Topo {...topo} />

    <View style={estilos.cesta}>

      {/* Em detalhes, a mesma coisa, estou passando o objeto descontruído */}
      <Detalhes {...detalhes} />
    </View>
  </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
