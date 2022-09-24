import { useState } from "react";
import SearchInput from "./SearchInput.js";
import { DetailSearchUma } from "./DetailSearch.js";
import DetailUmaModal from "./DetailUmaModal.js"

import umaDummy from "../tempServer/uma.json"

import styles from "../css/UmaContent.module.css"







function UmaContent() {

    const [data, setData] = useState("");
    const [array, setArray] = useState([[], [], [], []])

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
    } // e가 d에 완전히 포함되는지 배열의 포함관계 확인하는 함수

    const newArray = umaDummy;



    return(
        <div className={styles.contents}>
            <p>도-모. 캐릭터 내용입니다.</p>
            <DetailSearchUma setArray = {setArray}/>
            <SearchInput setData={setData}/>
            <div>
                {
                    newArray.map((e) => (
                        <div>{e.name}</div>
                    ))
                }

            </div>
        </div>
    )
}


export default UmaContent;