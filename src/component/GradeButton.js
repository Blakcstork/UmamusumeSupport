import styles from "../css/gradeButton.module.css"


function GradeButton({grade, width, height}){
    const buttonName = `${width}${height}btn`
    return(
        grade === "G1" ? <button id={styles.smallBtn} className={styles.g1Btn}>GⅠ</button> :
        grade === "G2" ? <button id={styles.smallBtn} className={styles.g2Btn}>GⅡ</button> :
        grade === "G3" ? <button id={styles.smallBtn} className={styles.g3Btn}>GⅢ</button> : 
        grade === "OP" ? <button id={styles.smallBtn} className={styles.opBtn}>{grade}</button> : <button id={styles.smallBtn}>{grade}</button>  
    )
}

export default GradeButton 