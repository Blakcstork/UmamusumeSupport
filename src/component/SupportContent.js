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
    const [array, setArray] = useState(["", "", "", ""])
    const [popup, setPopup] = useState({open : false, title : "", message: "", callback : false});

    const newArray2 = supportDummy.filter((d) => d.name.includes(data) && (d.type.includes(array[0]) && d.rarity === (array[1])))


    const onClickList = (e, support) => {
        setPopup({open: true, title : `${support.name}, ${support.nickname}`, message : "Hello!", info : support})
    }


    return(
        <div className={styles.contents}>
            <p>도-모. 서포트 내용입니다.</p>
            <DetailSupportModal open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback} info = {popup.info}/>
            <DetailSearchSupport setArray = {setArray}/>
            <SearchInput setData={setData}/>
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