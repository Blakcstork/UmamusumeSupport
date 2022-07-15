import styles from "../css/searchInput.module.css"


function SearchInput({searchType}){
    return(
        <div>
            <input type = "text" placeholder="please type input" className={styles.search}/>
        </div>
    )
}




export default SearchInput;