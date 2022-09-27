import './style.css'
interface TaskItemProps {
  titulo: string;
  done?: boolean;
  concluirTarefa: () => void;
  excluirTarefa: () => void;
}

const TaskItem = (props: TaskItemProps) => {
  return (
    <li className={`task-item ${props.done ? "done" : ""}`}>
      <span onClick={props.excluirTarefa}>&#10006;</span>
      <p>{props.titulo}</p>
      <span onClick={props.concluirTarefa}>&#10003;</span>
    </li>
  )
}

export default TaskItem;
