import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        minWidth: 327,
        minHeight: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#262626',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 8,
        padding: 4,
        marginTop: 8 
    },

    taskText: {
        flex: 2,
        color: '#F2F2F2',
        fontSize: 14
    },

    taskTextconcluida: {
        flex: 2,
        textDecorationLine: "line-through",
        color: '#808080',
        fontSize: 14,
    },

    checkBox: {
        width: 24,
        height: 24,
        marginLeft: 8,
        borderWidth: 2.63,
        borderRadius: 999,
        borderColor: '#4EA8DE',
        margin: 8
    },

    checkBoxChecked: {
        width: 24,
        height: 24,
        marginLeft: 8,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5E60CE',
        color: '#5E60CE',
        padding: 4,
        margin: 8,
    },

    trashIcon: {
        marginRight: 8,
    }

});