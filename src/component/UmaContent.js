import { useState } from "react";
import SearchInput from "./SearchInput.js";
import { DetailSearchUma } from "./DetailSearch.js";

import umaDummy from "../tempServer/uma.json"

import styles from "../css/UmaContent.module.css"







function UmaContent() {

    const [data, setData] = useState("");
    const [array, setArray] = useState(["", "", "", ""])





    return(
        <div className={styles.contents}>
            <p>도-모. 서포트 내용입니다.</p>
            <DetailSearchUma setArray = {setArray}/>
            <SearchInput setData={setData}/>
        </div>
    )
}


export default UmaContent;