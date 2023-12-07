import styles from './Common.module.css';

export default function MenuContainer({hobbies, foods}) {
    const hobbyNodes = hobbies.map((hobby)=>{
        return <li key={hobby}>{hobby}</li>;
    });
    const foodNodes = foods.map((food)=>{
        return <li key={food}>{food}</li>;
    });
    return (
        <div className={styles.menu}>
            <h3>hobbies</h3>
            <ul>{hobbyNodes}</ul>
            <h3>foods</h3>
            <ul>{foodNodes}</ul>
        </div>
    );
}