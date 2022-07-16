import Header from "../component/Header";
import RaceContent from "../component/RaceContent";
import Footer from "../component/Footer";

import styles from "../css/Home.module.css"

function Home(){
    return(
        <div className={styles.homeContent}>
            <Header />
            <RaceContent />
            <Footer />
        </div>
    )
}

export default Home;