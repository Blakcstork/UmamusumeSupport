import {useState, useInput} from "react"
import dummy from "../tempServer/race.json"





function DetailSearch({setArray}){
    
    const [list, setList] = useState([]);

    const onChange = (e) => {
        if(e.target.name === "distance") {
        const newList = list;
        newList[0] = e.target.value;
        setList(newList);
        console.log(list);

        }
        else if(e.target.name === "ground") {
            const newList = list;
            newList[1] = e.target.value;
            console.log(list);
        }
        else if(e.target.name === "season"){
            const newList = list;
            newList[2] = e.target.value;
            console.log(list);                
        }

        setArray(list);

    }



    return (
        <div>
        <form>
            <div>
                <p>거리</p>
                <label><input type = "radio" name = "distance" value = "short" onChange={onChange}/> 단거리 </label>
                <label><input type = "radio" name = "distance" value = "mile" onChange={onChange}/> 마일 </label>
                <label><input type = "radio" name = "distance" value = "middle" onChange={onChange}/> 중거리 </label>
                <label><input type = "radio" name = "distance" value = "long" onChange={onChange}/> 장거리 </label>
            </div>
            <div>
                <p>경기장 종류</p>
                <label><input type = "radio" name = "ground" value = "grass" onChange = {onChange}/> 잔디 </label>
                <label><input type = "radio" name = "ground" value = "dirt" onChange = {onChange}/> 더트 </label>         
            </div>
            <div>
                <p>시즌</p>
                <label><input type = "radio" name = "season" value = "junior" onChange = {onChange}/> 주니어 </label>
                <label><input type = "radio" name = "season" value = "classic" onChange = {onChange}/> 클래식 </label>  
                <label><input type = "radio" name = "season" value = "senior" onChange = {onChange}/> 시니어 </label>  
            </div>
            <div>
                <button type = "submit">검색</button>
            </div>
        </form>
        </div>
    )
}

export default DetailSearch;