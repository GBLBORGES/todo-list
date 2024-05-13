import { useState, useRef } from 'react';

function TodoList() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const inputRef = useRef();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim()) {

            setItems([...items, inputValue]);
            setInputValue('');
            inputRef.current.focus();
        }
    };

    return (
        <div >
            <div className='todo-input'>
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Digite algo..."
                />
                <button onClick={handleAddItem}>Adicione Suas Tarefas</button>
            </div>
            <div className='todo-list'>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default TodoList;