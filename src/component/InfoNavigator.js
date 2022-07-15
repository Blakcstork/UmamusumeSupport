
import styles from "../css/InfoNavigator.module.css"

function InfoNavigator(){
    return (
        <div>
            <p>여기는 정보 탭 네비게이터입니다.</p>

            <div>
                <button className={styles.navButton}> 육성 팁 </button>
                <button className={styles.navButton}> 레이스 정보 </button>
                <button className={styles.navButton}> 서포트카드 DB</button>
                <button className={styles.navButton}> 우마무스메 DB </button>
            </div>
        </div>
    )
}

export default InfoNavigator;