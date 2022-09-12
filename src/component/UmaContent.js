import { useState } from "react";
import SearchInput from "./SearchInput.js";
import { DetailSearchUma } from "./DetailSearch.js";
import DetailUmaModal from "./DetailUmaModal.js"

import umaDummy from "../tempServer/uma.json"

import styles from "../css/UmaContent.module.css"







function UmaContent() {

    const [data, setData] = useState("");
    const [array, setArray] = useState([[], [], [], []])

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