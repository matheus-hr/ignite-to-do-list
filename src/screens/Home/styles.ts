import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    header: {
        height: 173,
        backgroundColor: "#0D0D0D",
        justifyContent: 'center',   //Centralizar Vertical
        alignItems: 'center',       //Centralizar Horizontal 
    },

    main: {
        height: '100%',
        backgroundColor: "#1A1A1A",
        alignItems: 'center',       //Centralizar Horizontal 
    },

    novaTask: {
        width: 327,
        height: 54,
        flexDirection: 'row',
        marginTop: -27
    },

    input: {
        flex: 1,
        height: 54,
        backgroundColor: "#262626",
        color: '#F2F2F2',
        borderColor: '#0D0D0D',
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 18,
        padding: 10
    },

    inputFocus: {
        flex: 1,
        height: 54,
        backgroundColor: "#262626",
        color: '#F2F2F2',
        borderColor: '#5E60CE',
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 18,
        padding: 10
    },
    
    buttonAdd: {
        width: 52,
        backgroundColor: "#1E6F9F",
        borderColor: '#0D0D0D',
        borderWidth: 1,
        borderRadius: 6,
        justifyContent: 'center',   //Centralizar Vertical
        alignItems: 'center',       //Centralizar Horizontal
        marginLeft: 4,
    },

    infoGroup: {
        width: 327,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 12
    },

    criadasGroup: {
        flexDirection: 'row',
    },

    criadas: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        marginRight: 8,
    },

    concluidasGroup: {
        flexDirection: 'row',
    },

    concluidas: {
        color: '#8284FA',
        fontWeight: 'bold',
        marginRight: 8,
    },

    taskCount: {
        minWidth: 25,
        height: 19,
        backgroundColor: '#333333',
        color: '#D9D9D9',
        textAlign: 'center',
        borderRadius: 999,
        paddingLeft: 6,
        paddingRight: 6,
    },

    listaVaziaGroup: {
        minWidth: 327,
        borderTopColor: '#333333',
        alignItems: 'center',
        borderTopWidth: 1,
        paddingTop: 48,
        paddingBottom: 48,
        marginTop: 8,
    },

    listaVaziaTitulo: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        paddingTop: 16,
    },

    ListaVaziaTexto: {
        color: '#808080',
        fontSize: 14,
    },
});