import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { onRegister } from '../../store/operations/authOperations';
import styles from './Forms.module.css';

export default function RegisterForm({ history }) {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const isNameValid = name.length > 0;
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length > 3;
    const isConfirmPasswordValid = confirmPassword === password;

    const isBtnActive = isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

    const onSubmit = e => {
        e.preventDefault();
        dispatch(onRegister({name, email, password})).then(response => {
            if (response) {
                setTimeout(() => {
                    history.push('/login')
                }, 1500)
            }
        });
    }
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <label>
                Name*
                <input className={isNameValid ? styles.input : `${styles.input} ${styles.invalid}`} value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Email*
                <input className={isEmailValid ? styles.input : `${styles.input} ${styles.invalid}`} value={email} onChange={e => setEmail(e.target.value)} placeholder="example@mail.com" />
            </label>
            <label>
                Password*
                <input type="password" className={isPasswordValid? styles.input : `${styles.input} ${styles.invalid}`} value={password} onChange={e => setPassword(e.target.value)} placeholder="length > 3" />
            </label>
            <label>
                Confirm password*
                <input type="password" className={isConfirmPasswordValid? styles.input : `${styles.input} ${styles.invalid}`} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </label>
            <button type="submit" disabled={!isBtnActive}>Register</button>
            <Link to="/login">To login</Link>
        </form>
  );
}
