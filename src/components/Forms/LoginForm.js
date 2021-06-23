import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Forms.module.css';
import { onLogin } from "../../store/operations/authOperations";

export default function LoginForm() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length > 3;

    const onSubmit = e => {
        e.preventDefault();
        dispatch(onLogin({email, password}));
    }
        return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label>
                Email*
                <input className={isEmailValid ? styles.input : `${styles.input} ${styles.invalid}`} value={email} onChange={e => setEmail(e.target.value)} placeholder="example@mail.com" />
            </label>
            <label>
                Password*
                <input type="password" className={isPasswordValid? styles.input : `${styles.input} ${styles.invalid}`} value={password} onChange={e => setPassword(e.target.value)} placeholder="length > 3" />
            </label>
            <button type="submit" disabled={!isEmailValid || !isPasswordValid}>Login</button>
            <Link to="/register">To register</Link>
        </form>
  );
}
