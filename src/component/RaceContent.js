import SearchInput from "./searchInput";
import styles from "../css/RaceContent.module.css"
import DetailSearch from "./detailSearch";

function RaceContent(){
    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <SearchInput />
            <DetailSearch />
        </div>
    )
}

export default RaceContent;