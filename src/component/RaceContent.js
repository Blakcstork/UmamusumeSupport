import SearchInput from "./searchInput";
import styles from "../css/RaceContent.module.css"
import DetailSearch from "./detailSearch";
import dummy from "../tempServer/race.json"






function RaceList({coverImg, name, grade, distance, type, curve, fan}){
    return (
        <div className={styles.raceList}>
            <div className = {styles.raceImage}>
                this is image
            </div>
            <div>{grade}</div>
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





function RaceContent(){
    console.log(dummy);


    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <SearchInput />
            <DetailSearch />
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