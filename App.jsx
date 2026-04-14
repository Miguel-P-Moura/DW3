import { useState, useEffect } from "react";
import calendario from "./assets/calendario.jpg";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  useEffect(() => {
    console.log("App iniciado 🚀");
  }, []);

  function adicionarTarefa() {
    if (novaTarefa === "") return;

    const tarefa = {
      descricao: novaTarefa,
      concluida: false,
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa("");
  }

  function concluirTarefa(index) {
    const listaAtualizada = [...tarefas];
    listaAtualizada[index].concluida = true;
    setTarefas(listaAtualizada);
  }

  return (
    <div style={{ textAlign: "center" }}>
      
      {/* StatusBar */}
      <h1>Gerenciador de Tarefas</h1>

      {/* Imagem */}
      <img src={calendario} alt="Calendário 2026" width="300" />

      {/* Input */}
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      {/* Lista */}
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa.descricao} -{" "}
            {tarefa.concluida ? "✅ Concluída" : "⏳ Pendente"}

            <button onClick={() => concluirTarefa(index)}>
              Concluir
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <footer>
        <p>Miguel Pires de Moura- {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
}

export default App;