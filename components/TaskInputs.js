import React from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native"

export const WriteTaskComponent = ({ handleAddTask, setTask, task }) => {
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaksWrapper}
        >
          <TextInput 
            style={styles.input} 
            placeholder="Write your task for today" 
            value={task}
            onChangeText={task => setTask(task)}
          />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
  writeTaksWrapper:{
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: "row",
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
    borderRadius: 10
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    opacity: 0.4,
    borderWidth: 1,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center"
  }
});
