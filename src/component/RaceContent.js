import {useState} from "react"
import DetailRaceInfo from "./DetailRaceInfo.js";
import SearchInput from "./searchInput.js";
import DetailSearch from "./detailSearch.js";
import styles from "../css/RaceContent.module.css"
import dummy from "../tempServer/race.json"
import GradeButton from "./GradeButton.js";






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

    const [data, setData] = useState("");
    const [array, setArray] = useState([]);
    const [detailOpen, setDetailOpen] = useState(false);


    const toggleDetail = () => {
        setDetailOpen(!detailOpen);
        console.log(detailOpen);
    } 


    const newArray = dummy.filter((e) => e.name.includes(data));
    const newArray2 = dummy.filter((e)=> e.type === array[1] && e.period === array[2])



    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <div>
            <SearchInput setData = {setData}/>
            </div>
            <button onClick={() => {toggleDetail()}}>상세 검색</button>
            {
                detailOpen ? <DetailSearch setArray = {setArray}/> : null
            }
            <div>
            <button onClick = {() => {console.log(array)}}>click!</button>
            <ul>
                {
                    detailOpen ? 
                    
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
                            />
                        </li> 
                    )

                    :
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