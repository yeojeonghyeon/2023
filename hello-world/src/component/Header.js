import { Link } from 'react-router-dom';
import styles from './Common.module.css';
export default function Header() {
    return (
        <div className={styles.header}>
            <Link to={"/menu"}>Menu</Link>
            <Link to={"/counter"}>Counter</Link>
            <Link to={"/chat"}>chat-GPT</Link>
        </div>
    );
}