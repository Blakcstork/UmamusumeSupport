import {useState} from "react"
import DetailRaceInfo from "./DetailRaceInfo";
import styles from "../css/RaceContent.module.css"
import DetailSearch from "./detailSearch";
import dummy from "../tempServer/race.json"
import GradeButton from "./GradeButton";






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

    const [text, setText] = useState("");
    const [con, setCon] = useState([]);

    const onChange = (e) => {
        setText(e.target.value);
    }


    const newArray = dummy.filter((e) => e.name.includes(text));



    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <div>
            <form>
                <input type = "text" 
                placeholder="please type input" 
                className={styles.search}
                onChange = {onChange}
                value = {text}
                
                />
                <button type = "submit"> Go </button>
            </form>
            </div>
            <DetailSearch />
            <div>
            <ul>
                {
                    
                    newArray.map((race) =>
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