import React from "react"; // importaçãod o react
import {Dimensions, Image, StyleSheet, Text, View} from "react-native"; // importação de módulos do react native
import topo from '../../assets/topo.png'; // importação do topo da página
import logo from '../../assets/logo.png'; // importação da logo;
import Texto from '../componentes/Texto'; // importação do componente Texto;

// constante que vai pegar o tamanho da tela;
const width = Dimensions.get('screen').width;

// exportação do componente para ser pego em outra view
export default function Cesta() {
    return (
        <>
            {/* Importando a imagem e já aplicando estilo */}
            <Image source={topo} style={estilos.topo}/>

            {/* Aplicando estilos no título da cesta */}
            <Text style={estilos.titulo}> DETALHES DA CESTA</Text>

            {/*Gerando uma View Principal que vai abrigar todas as  outras Views*/}
            <View style={estilos.cesta}>
                <Text style={estilos.nome}> Cesta de verduras </Text>

                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagemFazenda}/>
                    <Text style={estilos.nomeFazenda}> Fazendo do Alemão </Text>

                </View>

                <Text style={estilos.descricao}> Uma cesta de produtos cuidadosamente selecionados;</Text>
                <Text style={estilos.preco}> R$40,00</Text>
                
               {/* Usando o componente de texto que foi criado */}
                <Texto style={estilos.nome}>Fazendo um teste para ver se funciona mesmo </Texto>


            </View>

            {/* Insendio um textinho só para testar a ideia do fragmento*/}
            <Text> Meus Deus do Ceu</Text>

            {/* Gastei um bom tempo pq no momdelo não tinha parenteses mas aqui não aceita sem*/}
            <Text> Gastei duas horas por conta de um parenteses</Text>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        // Aplicar a proporção oficial da largura * a largura da página
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold",
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular",
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },});
