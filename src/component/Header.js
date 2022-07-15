import styles from "../css/Header.module.css"
import InfoNavigator from "./InfoNavigator";

function Header(){
    return (
        <div className={styles.header}>
            <div>
                <h1>우마무스메 육성 도우미</h1>
                <p>도-모. 여기는 헤더입니다.</p>
            </div>
            <div>
                <InfoNavigator />
            </div>
        </div>
    )

}

export default Header;