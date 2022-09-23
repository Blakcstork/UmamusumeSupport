import { useState } from "react";
import SearchInput from "./SearchInput.js";
import { DetailSearchSupport } from "./DetailSearch.js";
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

    const [data, setData] = useState("");
    const [array, setArray] = useState([[], [], [], []])
    const [popup, setPopup] = useState({open : false, title : "", message: "", callback : false});

    const isInclude = (e, d) => {
        let r = true;

        for(let i = 0 ; i < e.length; i++){
            if(d.includes(e[i])){
                r = true;
            }
            else{
                r = false;
            }
        }

        return r;
    } // 배열의 포함관계 확인하는 함수


    const searchFilter = (e) => {
        return e.filter((d)=> 
        d.name.includes(data) &&
        d.type.includes(array[0]) &&
        d.rarity.includes(array[1]) &&
        isInclude(array[2], d.runType) &&
        isInclude(array[3], d.distanceType) 
        )
    }

    const newArray2 = searchFilter(supportDummy);


    const onClickList = (e, support) => {
        setPopup({open: true, title : `${support.name}, ${support.nickname}`, message : "Hello!", info : support})
    }


    return(
        <div className={styles.contents}>
            <p>도-모. 서포트 내용입니다.</p>
            <DetailSupportModal open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback} info = {popup.info}/>
            <DetailSearchSupport setArray = {setArray}/>
            <SearchInput setData={setData}/>
            <div className={styles.resultLength}><p>검색 결과 : {newArray2.length}건</p></div>
            <div className={styles.supportListDiv}>
                    {
                        newArray2.map((support) => 
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