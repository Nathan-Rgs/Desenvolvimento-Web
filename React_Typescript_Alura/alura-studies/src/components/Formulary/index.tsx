import React from "react";
import { ITarefa } from "../../types/tarefas";
import Button from "../Buttons/index";
import style from "./Formulary.module.scss";
import { v4 as uuidv4 } from "uuid";

class Forms extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };
  addTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state, selecionado: false, completado: false, id: uuidv4() },
    ]);
    this.setState({
      tarefa: "",
      tempo: "00:00",
    });
  }
  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo:</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(event) =>
              this.setState({ ...this.state, tarefa: event.target.value })
            }
            placeholder="O que desja estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo:</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            value={this.state.tempo}
            onChange={(event) =>
              this.setState({ ...this.state, tempo: event.target.value })
            }
            min="00:00:00"
            max="03:30:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Forms;
