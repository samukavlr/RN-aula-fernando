import {Text, View, TextInput, TouchableOpacity, Alert, FlatList} from 'react-native'
import {styles} from './style'
import {Participant} from '../Components/Participantes'
import { useState } from 'react'


export function Home(){

    // const participants = ['EU']

    const [participants, setParticipants]= useState<string[]>([])
    const [participantName,setParticipantName]= useState('')
    function handleParticipantAdd(){
        console.log('voce Clicou no botao "+"')   
        if(participants.includes(participantName)){
            return Alert.alert('Participante existe ',' Já existe um participante na lista com esse nome ' )
        }
        // participants.push( 'Ana' )
        // setParticipants(['Ana'])
        // console.log(participants)

        // preveState=conteúdo atal do estado
        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }
    function handleParticipantRemove(name:string){
        console.log(`Você Removeu o participante ${name}`)   
        Alert.alert('Remover',`Remover o participante ${name}?`,[
            {
                text:'sim',
                onPress:() => setParticipants(prevstate => prevstate.filter(participant => participant!== name))
            },
            {
                text:'Não',
                style:'cancel'
            },       
        ])
    }

    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento 
            </Text>
            <Text style={styles.eventDate}>
                Sexta,4 de nvembro de 2022
            </Text>
            <View style={styles.box}>
                <TextInput 
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={"#6B6B6B"}
                    onChangeText={setParticipantName}
                    value={participantName}
                    // keyboardType='numeric'
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                    +
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.participantsTitle}>
                Participantes
            </Text>
            <FlatList
                 data={participants}
                 keyExtractor={(item)=> item}
                 renderItem={({item}) =>(
                    <Participant
                    key= {item} 
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)}
                    />
                 )}
                 showsVerticalScrollIndicator={false}
                 
                 ListEmptyComponent={ () =>(
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda?
                        adicione participantes na sua lista
                    </Text>
                 )}

                />

            {/* dentro das chaves estamso escrevendo JSX */}
                {/* {
                participants.map(participant => (
                    
                    <Participant
                    key= {participant} 
                    name={participant} 
                    onRemove={()=>handleParticipantRemove(participant)} />
                    ))
                    
                }
                */}
            

        </View>

    );
}


