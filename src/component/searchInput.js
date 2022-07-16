import styles from "../css/searchInput.module.css"


function SearchInput({searchType}){
    return(
        <div>
            <form>
                <input type = "text" placeholder="please type input" className={styles.search}/>
                <button type = "submit"> Go </button>
            </form>
        </div>
    )
}




export default SearchInput;