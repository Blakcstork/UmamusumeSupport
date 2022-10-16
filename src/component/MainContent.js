import {useState} from 'react';

import {LittleSearchInput} from '../component/SearchInput'
import DetailSupportModal from "../component/DetailSupportModal"
import DetailUmaModal from "../component/DetailUmaModal"


import styles from "../css/MainContent.module.css";


import raceDummy from "../tempServer/race.json"
import skillDummy from "../tempServer/skill.json"
import supportDummy from "../tempServer/support.json"
import umaDummy from "../tempServer/uma.json"


function SupportList({array}) {
    return (

        <div className = {styles.supportList}>
            {
                array.map((e) => 
                    <li className = {styles.supportArticle}> {e.name}</li>
                )
            }
        </div>
    )

}



function UmaList({array}) {
    return (

        <ul className = {styles.umaList}>
            {
                array.map((e) => 
                    <li className = {styles.umaArticle}> {e.name}</li>
                )
            }
        </ul>
    )

}

function EventSearch({array}){
    return(
        <div>
        {
            array.map((event) => 
                <div>
                    {event.eventName}
                </div>
            )
        }
        </div>
    )
}

function SelectedSupport({selectedArray}){
    return (
        <div className={styles.selectedSupportList}>
            {
                selectedArray.map((e) => (
                    <div className={styles.selectedSupportElement}>
                        this
                    </div>
                ))
            }
        </div>
    )
}


function MainContent(){
    const [sup, setSup] = useState("");

    const newArray = raceDummy;
    const newArray2 = skillDummy;
    const newArray3 = supportDummy;
    const selectedUma = useState("");
    const selectedArray = useState(["","","","","",""])
    const typeKind =[
        {name : "speed", img : "/images/types/i_type1.png"},
        {name : "stamina", img : "/images/types/i_type2.png"},
        {name : "power", img : "/images/types/i_type3.png"},
        {name : "gonjo", img : "/images/types/i_type4.png"},
        {name : "knowledge", img : "/images/types/i_type5.png"},
        {name : "friend", img : "/images/types/i_type6.png"}
    ];
    

    return(
        <div className={styles.content}>
            <div className = {styles.supportSearch}>

                <LittleSearchInput setData = {setSup}/>
                <SupportList array = {supportDummy} />

            </div>
            <div className = {styles.middle}>
                <div className = {styles.selectedList}>
                    <div className={styles.selectedUma}>

                    </div>
                    <div className={styles.selectedSupport}>
                        <SelectedSupport selectedArray={selectedArray}/>
                    </div>
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