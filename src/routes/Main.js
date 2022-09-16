import Header from "../component/Header";
import Footer from "../component/Footer";

import styles from "../css/Main.module.css"

function Main(){
    return(
        <div className={styles.homeContent}>
            <Header />
            <Footer />
        </div>
    )
}

export default Main;