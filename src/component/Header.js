import styles from "../css/Header.module.css"
import InfoNavigator from "./InfoNavigator";
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className={styles.header}>
            <div>
                <Link to = {`/`}> <h1 className={styles.headerText}>우마무스메 육성 도우미</h1> </Link>
                <p>도-모. 여기는 헤더입니다.</p>
            </div>
            <div>
                <InfoNavigator />
            </div>
        </div>
    )

}

export default Header;