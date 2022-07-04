import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
    SafeAreaView
} from 'react-native'
import React from 'react'
import colors from '../colors';

const backImage = require("../assets/backImage.png");

export default function About( { navigation }) {
  return (
    <View style={styles.container}>
        <Image source={backImage} style={styles.backImage} />
        <View style={styles.whiteSheet} />
        <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Sobre o App</Text>
        <Text style={styles.about}>Aplicativo desenvolvido para a disciplina Tópicos em Desenvolvimento para Dispositívos Móveis</Text>
            <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Para voltar a tela de login</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{color: '#FF0000'}}> clique aqui</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.copyrightText}>Copyright © 2022 by Eduardo Maia. All rights reserved.</Text>
        </SafeAreaView>
        <StatusBar barStyle={"light-content"} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#DC143C',
        alignSelf: 'center',
        paddingBottom: 24,
        marginTop: 40
    },
    input: {
        backgroundColor: '#c2c2c2',
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12
    },
    backImage: {
        width: '100%',
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover'
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30
    },
    copyrightText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'gray',
        alignSelf: 'center',
        paddingBottom: 24,
        marginTop: 40
    },
    about: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black',
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 24,
        marginTop: 40
    }
})