import { 
  StyleSheet,
  Dimensions,
  StatusBar
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eaed',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        maxHeight: Dimensions.get('screen').height - 220
    },
    taskWrapper: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
    items: {
        marginTop: 10
    },
    // Task Writter section
    writeTaksWrapper:{
        backgroundColor: "#e8eaed",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: "row",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        justifyContent: "space-around",
        alignItems: "center"
    },
    input:{
        paddingVertical: 15,
        width: 300,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderColor: "#c0c0c0",
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    addWrapper:{
        width: 60,
        height: 60,
        backgroundColor: "#fff",
        opacity: 0.4,
        borderWidth: 1,
        borderRadius: 60,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center"
  }
})