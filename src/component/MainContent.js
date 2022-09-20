import {useState} from 'react';

import styles from "../css/MainContent.module.css";

import raceDummy from "../tempServer/race.json"
import skillDummy from "../tempServer/skill.json"
import supportDummy from "../tempServer/support.json"
import umaDummy from "../tempServer/uma.json"

function MainContent(){
    const [sup, setSup] = useState("");
    
    

    return(
        <div className={styles.content}>
            <div className = {styles.supportSearch}>

            </div>
            <div className = {styles.middle}>
                <div className = {styles.selectedList}>

                </div>
                <div className = {styles.eventSearch}>

                </div>
            </div>
            <div className = {styles.umaSearch}>

            </div>
            {
                /// 서폿 검색 페이지
                /// 선택한 목록 보는 페이지
                /// 이벤트 검색 페이지
                /// 우마무스메 검색 페이지
            }
        </div>
    )
}



export default MainContent;