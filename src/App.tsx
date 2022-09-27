import TaskContainer from './components/TaskContainer';
import TaskItem from './components/TaskItem';
import '../src/components/styles/global.css';
import {useState, useEffect, FormEvent} from 'react'

//estado e seu manipulador são retornados em forma de array

 //lista de objetos - o que o useState vai retornar para mim - é uma lista assim:
 interface Tarefa{
  titulo: string;
  done: boolean;
 }
function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [tituloTarefa, setTituloTarefa] = useState<string>("")
 
  function adicionarTarefa(event: FormEvent){
    event.preventDefault()
    setTarefas([...tarefas, {
      titulo: tituloTarefa, 
      done: false
    }])
    setTituloTarefa("")
    //infere que é uma array de string. A função que manipula o estado só aceita eu modificar o estado por completo. Temos que criar um novov array - destruturando, mais o que quero adicionar
  }

  function concluirTarefa(posicao: number){
    //criar umanova lista
    const novaLista = [...tarefas];
    novaLista[posicao].done = true

    setTarefas([...novaLista])
  }

  function excluirTarefa(posicao: number){
    //criar umanova lista
    const novaLista = [...tarefas];
    novaLista.splice(posicao, 1)

    setTarefas([...novaLista])
  }

  // useEffetc fica antes do return
  // Dois alertas? - quando tem estrutura de estado - renderizando - pode acabar executando várias vezes
  // Já gera na criaçao do estado
  // Consumir dados em API, carrinhos

  useEffect(() => {
    if(tarefas.length >= 10){
      alert("Iniciando App")
    }
  }, [tarefas])

  return (
    <main className="container">
      <h1>Task Manager</h1>
      <form id="new-task" onSubmit={adicionarTarefa}>
        {/* info dentro é considerado um estado */}
        {/* target - acesso ao valor que esta sendo digitado */}
        <input type="text" value={tituloTarefa} onChange={(event) => setTituloTarefa(event.target.value)}/>
        <button id="btnAdd" className="btn btn-primary" type="submit">add</button>
      </form>
      <TaskContainer>
        {
          tarefas.map((tarefa: Tarefa, posicao: number) => {
            return (
              <TaskItem titulo={tarefa.titulo} done={tarefa.done} concluirTarefa={() => concluirTarefa(posicao)} excluirTarefa={()=> excluirTarefa(posicao)} />
            )
          })
        }
      </TaskContainer>
     
    </main>
  );
}

export default App;

//Quando algo acontecer - faça isso - monitora uma ação;