import React , { useState }  from "react";
import { 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar
} from 'react-native';

// components
import { Task, WriteTaskComponent } from '../components';

export const TaskScreen = () => {
    const [task, setTask] = useState(null);
    const [taskList, setTaskItems] = useState([]);
    /**
     * This will add all tasks available
     */
    const handleAddTask = () => {
        if(task !== null) {
        setTaskItems([...taskList, task])
        setTask(null);
        }
    }
    /**
     * This will remove the task from the array of tasks
     * @param {*} index // position of the current task in the array
     */
    const handleCompleteTask = (index) => {
        let itemsCopy = [...taskList];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <>
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
            <WriteTaskComponent 
                handleAddTask={handleAddTask}
                setTask={setTask}
                task={task}
            />     
        </>
    )
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
