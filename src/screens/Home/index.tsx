import { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/task';

type Task = {
    id: number,
    descricao: string,
    concluida: boolean
}

export function Home() {
    
    const[tasks, setTasks] = useState<Task[]>([]);
    const[tasksFiltrado, setTasksFiltrado] = useState<Task[]>([]);
    const[taskId, setTaskId] = useState<number>(1);
    const[task, setTask] = useState<string>('');
    const[inputFocus, setInputFocus] = useState<boolean>(false);

    function addTask(){
        if(!task)
        {
            return Alert.alert("Descrição Vazia", "Informe a descrição da tarefa antes de adiciona-lá a lista")
        }
        else if(tasks.filter(item => item.descricao === task).length > 0)
        {
            return Alert.alert("Tarefa já incluída", "Essa tarefa já foi incluída na lista")
        }

        let newTask: Task = {
            id: taskId,
            descricao: task,
            concluida: false
        }

        setTasks(prevState => [ ...prevState, newTask ]);  
        setTasksFiltrado(prevState => [ ...prevState, newTask ]);  
        setTaskId(taskId + 1);    
        setTask('');
    }
    
    function removeTask(id: number){
        Alert.alert("Remover", "Deseja remover a tarefa da lista?", [
            {
                text: "Sim",
                onPress: () => {
                    setTasks(prevState => [ ...prevState.filter(item => item.id != id) ]);

                    setTasksFiltrado(prevState => [ ...prevState.filter(item => item.id != id) ]);
                }
            },
            {
                text: "Não",
            }
        ])
    }

    function setConcluida(id: number){
        const newTasks = tasks.map((task) => {
            if(task.id == id) {
              return {
                  ...task, concluida: !task.concluida
              }
            }

            return task;
          });

          const newTasksFiltrado = tasksFiltrado.map((task) => {
            if(task.id == id) {
              return {
                  ...task, concluida: !task.concluida
              }
            }

            return task;
          });

          setTasks(newTasks);
          setTasksFiltrado(newTasksFiltrado);
    }

    function getCriadas()
    {
        setTasksFiltrado(tasks)
    }

    function getConcluidos()
    {
        setTasksFiltrado(prevState => [ ...prevState.filter(task => task.concluida) ])
    }

    return(
        <View>
            <View style={styles.header}>
                <Image 
                    source={require('../../../assets/logo.png')}
                />            
            </View>

            <View style={styles.main}>
                <View style={styles.novaTask}>
                    <TextInput 
                        style={inputFocus ? styles.inputFocus : styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        onChangeText={text => setTask(text)}
                        value={task}
                        onFocus={() => { setInputFocus(true) }}
                        onBlur={() => { setInputFocus(false)  }}
                    ></TextInput>
                    <TouchableOpacity style= {styles.buttonAdd}
                        onPress={() => addTask()}
                    >
                        <Image 
                            source={require('../../../assets/plus.png')}
                        />            
                    </TouchableOpacity>
                </View>

                <View style={styles.infoGroup}>
                    <TouchableOpacity style={styles.criadasGroup}
                    onPress={getCriadas}>
                        <Text style={styles.criadas}>Criadas</Text>
                        <Text style={styles.taskCount}>{
                            tasks.length
                        }</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.concluidasGroup}
                    onPress={getConcluidos}>
                        <Text style={styles.concluidas}>Concluidas</Text>
                        <Text style={styles.taskCount}>{
                            tasks.filter(item => item.concluida).length
                        }
                        </Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={tasksFiltrado}
                    ListEmptyComponent = {() => (
                        <View style={styles.listaVaziaGroup}>
                            <Image
                                source={require('../../../assets/clipboard.png')}
                            />    
                            <Text style={styles.listaVaziaTitulo}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.ListaVaziaTexto}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>    
                    )}
                    renderItem ={({item}) => (
                        <Task
                            id={item.id} 
                            descricao={item.descricao}
                            concluida={item.concluida}
                            onDelete={() => {removeTask(item.id)}}
                            onPressConcluida={() => {setConcluida(item.id)}}
                        />
                    )}
                />
            </View>
        </View>
    );
}

