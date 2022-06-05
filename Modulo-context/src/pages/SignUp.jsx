import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/Context';
import '../App.css';

export const SignUp = () => {
    const {age, name} = useContext(Context);

    return (
        <div className='container'>
            <h1>Tela SignUp</h1>
            <p>Nome: {name}</p>
            <p>Idade: {age} anos</p>
            <br />
            <Link to="/exibir" className='link'>Avançar</Link>
        </div>
    );
}