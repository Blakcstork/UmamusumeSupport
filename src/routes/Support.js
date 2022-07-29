import Header from "../component/Header";
import SupportContent from "../component/SupportContent";
import Footer from "../component/Footer";

import styles from "../css/Home.module.css"

function Support(){
    return(
        <div className={styles.homeContent}>
            <Header />
            <SupportContent />
            <Footer />
        </div>
    )
}

export default Support;