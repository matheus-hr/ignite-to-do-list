import { View, Image, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles';

type Props = {
    id: number,
    descricao: string,
    concluida: boolean,
    onDelete: (id: number) => void,
    onPressConcluida: (id: number) => void
}

export function Task({ id, descricao, concluida, onDelete, onPressConcluida }: Props){

    return (
        <View style={styles.container}>
            <TouchableOpacity style={concluida ? styles.checkBoxChecked : 
                    styles.checkBox}
                onPress={() => { onPressConcluida(id) }}>
                    <Image source={require('../../../assets/check.png')}
                        blurRadius={concluida ? 0 : 1000}
                    />
            </TouchableOpacity>
            
            <Text style={ concluida ? styles.taskTextconcluida : 
                    styles.taskText
                }>
                {descricao}
            </Text>

            <TouchableOpacity
                onPress={() => {onDelete(id)}}>
                <Image 
                    source={require('../../../assets/trash.png')}
                    style={styles.trashIcon}
                />   
            </TouchableOpacity>       
        </View>
    );
} 