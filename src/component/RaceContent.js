import SearchInput from "./searchInput";
import styles from "../css/RaceContent.module.css"
import DetailSearch from "./detailSearch";
import dummy from "../tempServer/race.json"






function RaceList({coverImg, name, grade, distance, require, type, curve, fan}){
    return (
        <div className={styles.raceList}>
            <div className = {styles.raceImage}>
                this is image
            </div>
            {
                grade === "G1" ? <button id={styles.smallBtn} className={styles.g1Btn}>GⅠ</button> :
                grade === "G2" ? <button id={styles.smallBtn} className={styles.g2Btn}>GⅡ</button> :
                grade === "G3" ? <button id={styles.smallBtn} className={styles.g3Btn}>GⅢ</button> : 
                grade === "OP" ? <button id={styles.smallBtn} className={styles.opBtn}>{grade}</button> : <button id={styles.smallBtn}>{grade}</button>
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
                        type === "grass" ? "잔디" : "더트"
                    }</li>
                    <li>{curve}</li>
                    <li>+{fan}</li>
                </ul>
            </div>

        </div>
    )
}


function DetailRaceInfo(){
    return(
        
        <div className={styles.detailRaceInfo}>
            <div>
                Race Image
            </div>
            <table  className = {styles.infoTable}>
                <tbody>
                <tr>
                    <td>시기</td>
                    <td>n월 전반</td>
                </tr>
                <tr>
                    <td>등급</td>
                    <td><button>G3</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <div>
                Track Image
            </div>
        </div>
    )
}




function RaceContent(){
    console.log(dummy);


    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <SearchInput />
            <DetailSearch />
            <DetailRaceInfo />
            <div>
            <ul>
                {
                    
                    dummy.map((race) =>
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