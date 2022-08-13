import {useState} from "react"
import dummy from "../tempServer/race.json"

import styles from "../css/DetailSearch.module.css"





function DetailSearch({setArray}){
    
    const [list, setList] = useState(["", "", ""]);

    const onChange = (e) => {
        console.log(e);
        if(e.target.name === "distance") {
          const newList = list;
          newList[0] = e.target.value;
          setList({...newList}); //... 붙이면 해제했다가 다시 붙이는 것

        }
        else if(e.target.name === "ground") {
            const newList = list;
            newList[1] = e.target.value;
            setList({...newList});
        }
        else if(e.target.name === "season"){
            const newList = list;
            newList[2] = e.target.value;
            setList({...newList});            
        }

        setArray(list);
        

    }



    return (
        <div>
        <form>
            <table className={styles.searchTable}>
                <tbody>
                    <tr>
                        <td>거리</td>
                        <td>
                            <label><input type = "radio" name = "distance" value = "short" onChange={onChange}/> 단거리 </label>
                            <label><input type = "radio" name = "distance" value = "mile" onChange={onChange}/> 마일 </label>
                            <label><input type = "radio" name = "distance" value = "middle" onChange={onChange}/> 중거리 </label>
                            <label><input type = "radio" name = "distance" value = "long" onChange={onChange}/> 장거리 </label>                            
                        </td>
                    </tr>
                    <tr>
                        <td>타입</td>
                        <td>
                            <label><input type = "radio" name = "ground" value = "grass" onChange = {onChange}/> 잔디 </label>
                            <label><input type = "radio" name = "ground" value = "dirt" onChange = {onChange}/> 더트 </label>                             
                        </td>
                    </tr>
                    <tr>
                        <td>시즌</td>
                        <td>
                            <label><input type = "radio" name = "season" value = "junior" onChange = {onChange}/> 주니어 </label>
                            <label><input type = "radio" name = "season" value = "classic" onChange = {onChange}/> 클래식 </label>  
                            <label><input type = "radio" name = "season" value = "senior" onChange = {onChange}/> 시니어 </label>                             
                        </td>
                    </tr>                    
                </tbody>
            </table>
            <div>
                <button type = "submit">검색</button>
            </div>
        </form>
        </div>
    )

}

export default DetailSearch;