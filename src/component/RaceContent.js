import {useState} from "react"
import SearchInput from "./searchInput.js";
import DetailSearch from "./detailSearch.js";
import {GradeButton} from "./GradeButton.js";
import DetailRaceModal from "./DetailRaceModal.js";
import RacePlanner from "./RacePlanner.js";
import {RaceList} from "./RaceList.js";

import styles from "../css/RaceContent.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

import dummy from "../tempServer/race.json"



function SaveButton(onClick){

    const [isClicked, setIsClicked] = useState(false);



}






function RaceContent(){

    const [data, setData] = useState("");
    const [r, setR] = useState(0);
    const [array, setArray] = useState(["", "", "", ""]);
    const [info, setInfo] = useState([]);

    const [detailOpen, setDetailOpen] = useState(false);

    const[popup, setPopup] = useState({open : false, title : "", message: "", callback : false});


    const toggleDetail = () => {
        setDetailOpen(!detailOpen);
        console.log(detailOpen);
    }
    


    const onClick = (e, params) => {
        setInfo([params.name, params.month, params.day, params.period, params.distance, params.type, params.grade, params.place, params.curve, params.require, params.fan, params.gate, params.img])
        setPopup({open: true, title : params.name, message : "Hello!"})
    }

    const onClickSave = (e, params) => {
        localStorage.setItem(`${params.month}${params.day}`, JSON.stringify(params))
        setR(r + 1)
        console.log(localStorage.getItem(`${params.month}${params.day}`))
    }

    const openPopup = (e) => {
        setPopup({open: true, title: "Hello", message : "Hello Sucker" })
    }


    const newArray = dummy.filter((e) => e.name.includes(data));
    const newArray2 = dummy.filter((e)=> e.name.includes(data) && (e.type.includes(array[1]) && e.period.includes(array[2]) && e.grade.includes(array[3])))





    



    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <RacePlanner />
            <DetailRaceModal open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback} info = {info}/>
            <div>
            <SearchInput setData = {setData}/>
            </div>
            <button onClick={() => {toggleDetail()}}>상세 검색</button>

            <DetailSearch setArray = {setArray}/>

            <div>
            <button onClick = {() => {console.log(newArray2, array)}}>click!</button>
            <ul>
                {
                    newArray2.map((race) =>
                        <li>
                            <RaceList
                            coverImg={race.img}
                            name = {race.name}
                            grade = {race.grade}
                            distance = {race.distance}
                            require = {race.require}
                            type = {race.type}
                            curve = {race.curve}
                            fan = {race.fan}
                            onClick={(e) => {onClick(e, race)}}
                            />
                            <button onClick = {(e) => {onClickSave(e,race)}}> + </button>
                        </li> 
                    )

                }
            </ul>
            </div>

        </div>
    )
}

export default RaceContent;