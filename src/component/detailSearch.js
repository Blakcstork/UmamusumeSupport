import {useState} from "react"
import dummy from "../tempServer/race.json"

import styles from "../css/DetailSearch.module.css"





function DetailSearch({setArray}){
    
    const [list, setList] = useState(["", "", "", ""]);

    const onChange = (e) => {
        console.log(e);
        if(e.target.name === "distance") {
          const newList = list;
          newList[0] = e.target.value;
          setList({...newList}); //... 붙이면 해제했다가 다시 붙이는 것
          console.log(newList);

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
        else if(e.target.name === "grade"){
            const newList = list;
            newList[3] = e.target.value;
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
                            <label><input type = "radio" name = "distance" value = "단거리" onChange={onChange}/> 단거리 </label>
                            <label><input type = "radio" name = "distance" value = "마일" onChange={onChange}/> 마일 </label>
                            <label><input type = "radio" name = "distance" value = "중거리" onChange={onChange}/> 중거리 </label>
                            <label><input type = "radio" name = "distance" value = "장거리" onChange={onChange}/> 장거리 </label>                            
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
                    <tr>
                        <td>등급</td>
                        <td>
                            <label><input type = "radio" name = "grade" value = "PreOP" onChange = {onChange}/> Pre-OP </label>
                            <label><input type = "radio" name = "grade" value = "OP" onChange = {onChange}/> OP </label>  
                            <label><input type = "radio" name = "grade" value = "G3" onChange = {onChange}/> G3 </label>
                            <label><input type = "radio" name = "grade" value = "G2" onChange = {onChange}/> G2 </label>  
                            <label><input type = "radio" name = "grade" value = "G1" onChange = {onChange}/> G1 </label>                              
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