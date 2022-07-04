import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Alert
} from "react-native"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const backImage = require("../assets/backImage.png");

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if(email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log("Logado com sucesso!"))
                .catch((err) => Alert.alert("Falha ao tentar logar", err.message));
        }
    };

    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Digite seu E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Digite sua senha"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
                    <Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 10}}>Logar</Text>
                </TouchableOpacity>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Não possui uma conta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={{color: '#FF0000'}}> Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Quer saber mais sobre o Aplicativo?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("About")}>
                        <Text style={{color: '#FF0000'}}> Clique aqui</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: 85
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
    button: {
        backgroundColor: '#B22222',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
});