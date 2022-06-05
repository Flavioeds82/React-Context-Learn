import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context';
import '../App.css';


export const ShowData = () => {
    const { name, age } = useContext(Context);

    return (
        <div className='container'>
            <h1>Tela ShowData</h1>
            <p>Nome: {name}</p>
            <p>Idade: {age} anos</p>
            <br/>
            <Link to="/" className='link'>Voltar</Link>
        </div>
    );
}