import styles from "../css/SearchButton.moudle.css"


function CheckBoxButton({text}){
    return (
        <button className={styles.checkButton}>{text}</button>
    )
}