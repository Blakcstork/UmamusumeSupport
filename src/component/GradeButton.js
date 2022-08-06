import styles from "../css/gradeButton.module.css"


function GradeButton({grade}){
    return(
        grade === "G1" ? <button id={styles.bigBtn} className={styles.g1Btn}>GⅠ</button> :
        grade === "G2" ? <button id={styles.bigBtn} className={styles.g2Btn}>GⅡ</button> :
        grade === "G3" ? <button id={styles.bigBtn} className={styles.g3Btn}>GⅢ</button> : 
        grade === "OP" ? <button id={styles.bigBtn} className={styles.opBtn}>{grade}</button> : <button id={styles.bigBtn}>{grade}</button>  
    )
}

function SmallGradeButton({grade}){
    return(
        grade === "G1" ? <button id={styles.smallBtn} className={styles.g1Btn}>GⅠ</button> :
        grade === "G2" ? <button id={styles.smallBtn} className={styles.g2Btn}>GⅡ</button> :
        grade === "G3" ? <button id={styles.smallBtn} className={styles.g3Btn}>GⅢ</button> : 
        grade === "OP" ? <button id={styles.smallBtn} className={styles.opBtn}>{grade}</button> : <button id={styles.smallBtn}>{grade}</button>  
    )

}

export {GradeButton, SmallGradeButton}