import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

const Estilos = {
    principal: {
        flex: 1,
        backgroundColor: 'cornflowerblue'
    },
    topo: {
        flex: 1,
        backgroundColor: 'brown'
    },
    conteudo: {
        flex: 8,
        backgroundColor: 'yellowgreen'
    },
    rodape: {
        flex: 1,
        backgroundColor: 'orangered'
    }
};

const App = () => {

    const { principal, topo, conteudo, rodape } = Estilos;

    return (
        <View style={ principal }>
            <Text style={ topo }>Topo</Text>
            <Text style={ conteudo }>Conteudo</Text>
            <Text style={ rodape }>Rodape</Text>
        </View>
    );
};

AppRegistry.registerComponent('frasesDoDia', () => App);

