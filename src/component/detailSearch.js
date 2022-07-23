import {useState, useInput} from "react"
import dummy from "../tempServer/race.json"






function DetailSearch(){

    const [value, setValue] = useState("");
    const [list, setList] = useState([]);

    const onChange = (e) => {

        setValue(e.target.value);
        const newList = list;
        newList[0] = e.target.value;
        setList(newList);
        console.log(list);
    }

    const onChange2 = (e) => {
        const newList = list;
        newList[1] = e.target.value;
        console.log(list);
    }

    const onChange3 = (e) => {
        const newList = list;
        newList[2] = e.target.value;
        console.log(list);
    }



    return (
        <div>
        <form>
            <div><input type = "text"  defaultValue = {value}/></div>
            <div>
                <p>거리</p>
                <label><input type = "radio" name = "distance" value = "short" onChange={onChange}/> 단거리 </label>
                <label><input type = "radio" name = "distance" value = "mile" onChange={onChange}/> 마일 </label>
                <label><input type = "radio" name = "distance" value = "middle" onChange={onChange}/> 중거리 </label>
                <label><input type = "radio" name = "distance" value = "long" onChange={onChange}/> 장거리 </label>
            </div>
            <div>
                <p>경기장 종류</p>
                <label><input type = "radio" name = "ground" value = "grass" onChange = {onChange2}/> 잔디 </label>
                <label><input type = "radio" name = "ground" value = "dirt" onChange = {onChange2}/> 더트 </label>         
            </div>
            <div>
                <p>시즌</p>
                <label><input type = "radio" name = "season" value = "junior" onChange = {onChange3}/> 주니어 </label>
                <label><input type = "radio" name = "season" value = "classic" onChange = {onChange3}/> 클래식 </label>  
                <label><input type = "radio" name = "season" value = "senior" onChange = {onChange3}/> 시니어 </label>  
            </div>
            <div>
                <button type = "submit">검색</button>
            </div>
        </form>
        </div>
    )
}

export default DetailSearch;