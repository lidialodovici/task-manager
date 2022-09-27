import "./style.css"
interface TaskContainerProps {
  children: JSX.Element | JSX.Element[]
}

const TaskContainer = (props: TaskContainerProps) => {
  return (
    <ul className="task-list">{props.children}</ul>
  )
}


export default TaskContainer