import React from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View, Text } from "react-native"
import { styles } from "../styles/styles-tasks";

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
