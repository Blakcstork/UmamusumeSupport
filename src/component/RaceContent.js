import SearchInput from "./searchInput";
import styles from "../css/RaceContent.module.css"
import DetailSearch from "./detailSearch";


function RaceList(){
    return (
        <div className={styles.raceList}>

        </div>
    )
}


function RaceContent(){
    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <SearchInput />
            <DetailSearch />

            <ul>
                <li>
                    <RaceList />
                </li>
            </ul>
        </div>
    )
}

export default RaceContent;