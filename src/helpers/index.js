import { collatedTasks } from '../constants'

export const collatedTasksExits = selectedProject =>
  collatedTasks.find(task => task.key === selectedProject)
