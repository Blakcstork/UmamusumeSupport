import skillDummy from "../tempServer/skill.json"
import supportDummy from "../tempServer/support.json"

import styles from "../css/SupportContent.module.css"



function SupportContent() {

    const onClick = (e) =>{
        console.log(e);
        const newArray = supportDummy.filter((d) => d.type.includes(e.target.alt))
    }


    return(
        <div className={styles.contents}>
            <p>도-모. 서포트 내용입니다.</p>
            <div>
                <img src = "/images/types/i_type1.png" alt = "speed" className={styles.typeButton} onClick= {onClick}/>
                <img src = "/images/types/i_type2.png" alt = "stamina" className={styles.typeButton} onClick= {onClick}/>
                <img src = "/images/types/i_type3.png" alt = "power" className={styles.typeButton} onClick= {onClick}/>
                <img src = "/images/types/i_type4.png" alt = "gonjo" className={styles.typeButton} onClick= {onClick}/>
                <img src = "/images/types/i_type5.png" alt = "knowledge" className={styles.typeButton} onClick= {onClick} />
                <img src = "/images/types/i_type6.png" alt = "helper" className={styles.typeButton} onClick= {onClick}/>
                <img src = "/images/types/i_type7.jpg" alt = "group" className={styles.typeButton} onClick= {onClick}/>


            </div>
        </div>
    )
}


export default SupportContent;