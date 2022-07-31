import { useState } from "react";


import skillDummy from "../tempServer/skill.json"
import supportDummy from "../tempServer/support.json"

import styles from "../css/SupportContent.module.css"
import SearchInput from "./searchInput";


function SupportList({name, nickname, type, rarity, distanceType, runType, img}){
    return(
        <div className={styles.supportList}>
            <div>{nickname} and {name}</div>
        </div>
    )
}



function SupportContent() {

    const [text, setText] = useState("");
    const [style, setStyle] = useState(`${styles.typeButton}`);
    const [isClicked, setIsClicked] = useState(false);



    const onClick = (e) =>{
        console.log(e);
        isClicked ? setStyle(`${styles.typeButton}`) : setStyle(`${styles.typeButton} ${styles.clicked}`)
        setIsClicked(!isClicked);
        const newArray = supportDummy.filter((d) => d.type.includes(e.target.alt))
    }


    return(
        <div className={styles.contents}>
            <p>도-모. 서포트 내용입니다.</p>
            <div>
                <img src = "/images/types/i_type1.png" alt = "speed" className={style} onClick= {onClick}/>
                <img src = "/images/types/i_type2.png" alt = "stamina" className={style} onClick= {onClick}/>
                <img src = "/images/types/i_type3.png" alt = "power" className={style} onClick= {onClick}/>
                <img src = "/images/types/i_type4.png" alt = "gonjo" className={style} onClick= {onClick}/>
                <img src = "/images/types/i_type5.png" alt = "knowledge" className={style} onClick= {onClick} />
                <img src = "/images/types/i_type6.png" alt = "friend" className={style} onClick= {onClick}/>
            </div>
            <div>
                <label><input type="radio" name = "rarity" value = "SSR"/>SSR</label>
                <label><input type="radio" name = "rarity" value = "SR"/>SR</label>
                <label><input type="radio" name = "rarity" value = "R"/>R</label>
            </div>
            <SearchInput setData={setText}/>
            <div className={styles.supportListDiv}>
                    {
                        supportDummy.map((e) => 
                            <div>
                            <SupportList name = {e.name} nickname = {e.nickname}/>
                            </div>
                        )
                    }

            </div>
        </div>
    )
}


export default SupportContent;