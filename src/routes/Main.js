import Header from "../component/Header";
import Footer from "../component/Footer";
import MainContent from "../component/MainContent";

import styles from "../css/Home.module.css"

function Main(){
    return(
        <div className={styles.homeContent}>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default Main;