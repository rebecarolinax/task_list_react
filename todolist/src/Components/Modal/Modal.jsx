


import React, { useState } from 'react';
import Button from '../Button/Button';
import './Modal.css'

const Modal = ({ onAddTask, description, setDescription, idTask, editTask }) => {
    const [taskDescription, setTaskDescription] = useState(description);
    const [error, setError] = useState(''); // Estado para controle de erro

    function adicionarTask() {
        if (!taskDescription?.trim()) {
            setError('É necessário escrever a tarefa.'); // Define a mensagem de erro
            return; // Interrompe a execução se a descrição estiver vazia ou for null
        }
        onAddTask(taskDescription);
        setError('');
    }

    function editarTask() {
        if (!taskDescription.trim()) {
            setError('É necessário escrever a tarefa.'); // Define a mensagem de erro
            return; // Interrompe a execução se a descrição estiver vazia
        }
        editTask(idTask, taskDescription)
        setDescription(null)
        setError(''); // Limpa a mensagem de erro após editar a tarefa
    }

    return (
        <>
            <div className='modal'>
                <p>Descreva sua tarefa</p>
                <input
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    placeholder='Exemplo de descrição'
                    className={`intModal ${error ? 'error-border' : ''}`} // Adiciona classe condicionalmente
                />
                {error && <p className="error-message">{error}</p>} {/* Exibe mensagem de erro */}
                <Button onClick={() => {
                    description == null ? adicionarTask() : editarTask();
                }} altura={64} largura={322} name={description == null ? "Cadastrar Tarefa" : "Editar Tarefa"} />
            </div>
        </>
    );
};

export default Modal;

