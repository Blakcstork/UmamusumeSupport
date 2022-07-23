import {useState} from "react"
import dummy from "../tempServer/race.json"
import styles from "../css/searchInput.module.css"





function SearchInput({searchText}){
    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    }



    const newArray = dummy.filter((e) => e.name.includes(text));
    


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
                {console.log(newArray)}
            </form>
        </div>
    )
}




export default SearchInput;