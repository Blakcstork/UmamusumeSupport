import { useState } from "react";
import SearchInput from "./searchInput.js";
import DetailSupportModal from "./DetailSupportModal.js";

import skillDummy from "../tempServer/skill.json"
import supportDummy from "../tempServer/support.json"

import styles from "../css/SupportContent.module.css"



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
    const [popup, setPopup] = useState({open : false, title : "", message: "", callback : false});



    const onClick = (e) =>{
        console.log(e);
        isClicked ? setStyle(`${styles.typeButton}`) : setStyle(`${styles.typeButton} ${styles.clicked}`)
        setIsClicked(!isClicked);
        const newArray = supportDummy.filter((d) => d.type.includes(e.target.alt))
    }

    const onClickList = (e, support) => {
        setPopup({open: true, title : `${support.name}, ${support.nickname}`, message : "Hello!"})
    }


    return(
        <div className={styles.contents}>
            <p>도-모. 서포트 내용입니다.</p>
            <DetailSupportModal open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
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
            <div>
                <label><input type="checkbox" name = "rType" value = "도주"/>도주</label>
                <label><input type="checkbox" name = "rType" value = "선행"/>선행</label>
                <label><input type="checkbox" name = "rType" value = "선입"/>선입</label>
                <label><input type="checkbox" name = "rType" value = "추입"/>추입</label>
            </div>
            <div>
                <label><input type="checkbox" name = "dType" value = "단거리"/>단거리</label>
                <label><input type="checkbox" name = "dType" value = "마일"/>마일</label>
                <label><input type="checkbox" name = "dType" value = "중거리"/>중거리</label>
                <label><input type="checkbox" name = "dType" value = "장거리"/>장거리</label>
            </div>
            <SearchInput setData={setText}/>
            <div className={styles.supportListDiv}>
                    {
                        supportDummy.map((support) => 
                            <div onClick = {(e)=> {onClickList(e, support)}}>
                            <SupportList name = {support.name} nickname = {support.nickname}/>
                            </div>
                        )
                    }

            </div>
        </div>
    )
}


export default SupportContent;