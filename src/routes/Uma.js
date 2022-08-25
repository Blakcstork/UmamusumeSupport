import Header from "../component/Header";
import UmaContent from "../component/UmaContent";
import Footer from "../component/Footer";

import styles from "../css/Home.module.css"

function Uma(){
    return(
        <div className={styles.homeContent}>
            <Header />
            <UmaContent />
            <Footer />
        </div>
    )
}

export default Uma;