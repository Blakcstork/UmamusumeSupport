import {useState} from "react"
import SearchInput from "./searchInput.js";
import DetailSearch from "./detailSearch.js";
import {GradeButton} from "./GradeButton.js";
import DetailRaceModal from "./DetailRaceModal.js";

import styles from "../css/RaceContent.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

import dummy from "../tempServer/race.json"




function RaceList({coverImg, name, grade, distance, require, type, curve, fan}){
    return (
        <div className={styles.raceList}>
            
            <div className = {styles.raceImage}>
                this is image
            </div>
            {
                <GradeButton 
                grade={grade}
                width = "40"
                height = "40"
                />
            }
            <div>
                <p>{name}</p>
                <button>{require}</button> <button>+{fan}</button>
            </div>
            <div className={styles.raceDetail}>
                <ul>
                    <li>{
                        distance >= 1200 && distance < 1600 ? "단거리" : 
                        distance >= 1600 && distance < 1801 ? "마일" :
                        distance >= 1801 && distance < 2401 ? "중거리" :
                        distance >= 2401 ? "장거리" : "error"
                    }</li>
                    <li>{
                        type === "grass" ? "잔디" :
                        type === "dirt" ? "더트" : "error"
                    }</li>
                    <li>{curve}</li>
                    <li>+{fan}</li>
                </ul>
            </div>

        </div>
    )
}









function RaceContent(){

    const [data, setData] = useState("");
    const [array, setArray] = useState([]);
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

    const openPopup = (e) => {
        setPopup({open: true, title: "Hello", message : "Hello Sucker" })
    }


    const newArray = dummy.filter((e) => e.name.includes(data));
    const newArray2 = dummy.filter((e)=> e.type.includes(array[1]) && e.period.includes(array[2]))





    



    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <button onClick={openPopup}>Popup ON</button>
            <DetailRaceModal open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback} info = {info}/>
            <div>

            { detailOpen ? null : <SearchInput setData = {setData}/>}
            </div>
            <button onClick={() => {toggleDetail()}}>상세 검색</button>

            { detailOpen ? <DetailSearch setArray = {setArray}/> : null}

            <div>
            <button onClick = {() => {console.log(newArray2, array)}}>click!</button>
            <ul>
                {
                    detailOpen ? 
                    
                    newArray2.map((race) =>
                        <li onClick={(e) => {onClick(e, race)}}>
                            <RaceList
                            coverImg={race.img}
                            name = {race.name}
                            grade = {race.grade}
                            distance = {race.distance}
                            require = {race.require}
                            type = {race.type}
                            curve = {race.curve}
                            fan = {race.fan}
                            />
                        </li> 
                    )

                    :

                    newArray.map((race) =>
                        <li onClick={(e) => {onClick(e, race)}}>
                            <RaceList
                            coverImg={race.img}
                            name = {race.name}
                            grade = {race.grade}
                            distance = {race.distance}
                            require = {race.require}
                            type = {race.type}
                            curve = {race.curve}
                            fan = {race.fan}
                            />
                        </li> 
                    )


                }
            </ul>
            </div>

        </div>
    )
}

export default RaceContent;