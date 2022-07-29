import {useState} from "react"
import dummy from "../tempServer/race.json"
import styles from "../css/searchInput.module.css"





function SearchInput({setData}){
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
        setData(e.target.value);
    }



    return(

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
    )
}




export default SearchInput;