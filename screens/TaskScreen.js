import React , { useState }  from "react";
import { 
  View, 
  TouchableOpacity, 
  ScrollView
} from 'react-native';

// components
import { styles } from "../styles/styles-tasks";
import { Task, WriteTaskComponent } from '../components';

export const TaskScreen = () => {
  // behaviors
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
        <View style={styles.taskWrapper}>
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
