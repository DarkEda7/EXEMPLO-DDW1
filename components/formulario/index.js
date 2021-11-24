import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native';

export default function Formulario () {
    const [cep, onChangeCep] = useState('')
    const [Cidade, onCangeCidade] = useState('')
    const handleConsultar =() => {
        const url = "https://viacep.com.br/ws/" + cep + "/json/"
        fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 'Content-Type': 'application/json'
        }
    }).then(function(response) {
            response.json().then(function(data){
                onChangeCidade(data['localidade'])
            })
        })
    }
    
    return(
        <View>
            <Text>Digite um CEP (Somente números):</Text>
            <TextInput />
            <Button title="Consulta" />
            <Text></Text>
        </View>
    )
    }