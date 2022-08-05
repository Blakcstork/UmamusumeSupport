import { GradeButton } from "./GradeButton";
import styles from "../css/RaceList.module.css"

function RaceList({coverImg, name, grade, distance, require, type, curve, fan, onClick}){
    return (
        <div className={styles.raceList} onClick = {onClick}>
            
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


function SmallRaceList({coverImg, name, grade, distance, require, type, curve, fan, onClick}){
    return (
        <div className={styles.smallRaceList} onClick = {onClick}>
            
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
            <div className = {styles.smallRaceDetail}>
                <p>{name}</p>
                <ul>
                    <li>{
                        distance >= 1200 && distance < 1600 ? "단거리" : 
                        distance >= 1600 && distance < 1801 ? "마일" :
                        distance >= 1801 && distance < 2401 ? "중거리" :
                        distance >= 2401 ? "장거리" : "error"
                    }</li>
                    <li>
                        {distance}m
                    </li>
                    <li>{
                        type === "grass" ? "잔디" :
                        type === "dirt" ? "더트" : "error"
                    }</li>
                    <li>{curve}</li>
                    <li>{require}명</li>
                    <li>+{fan}</li>
                </ul>
            </div>

        </div>
    )
}

export {RaceList, SmallRaceList};