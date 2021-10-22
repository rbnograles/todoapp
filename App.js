import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView,
  StatusBar, 
  Dimensions
} from 'react-native';

// components
import { Task } from './components/Task';

export default function App() {

  const [task, setTask] = useState(null);
  const [taskList, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if(task !== null) {
      setTaskItems([...taskList, task])
      setTask(null);
    }
  }

  const handleCompleteTask = (index) => {
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  return (
    <SafeAreaView style={styles.container}>
        {/* todays task */}
        <View style={styles.taskWrapper}>
          <Text style={styles.sectionTitle}>Today's Task</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.items}>
              {
                taskList.map((task, i) => {
                  return <TouchableOpacity key={i} onPress={() => handleCompleteTask(i)}>
                    <Task  taskName={task} />
                  </TouchableOpacity>
                })
              }
            </View>
          </ScrollView>
        </View>
        {/* write section */}
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
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 20
  },
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
  },
  addText:{},
});
