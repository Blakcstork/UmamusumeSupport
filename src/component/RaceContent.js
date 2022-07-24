import {useState} from "react"
import DetailRaceInfo from "./DetailRaceInfo.js";
import SearchInput from "./searchInput.js";
import styles from "../css/RaceContent.module.css"
import dummy from "../tempServer/race.json"
import GradeButton from "./GradeButton.js";






function RaceList({coverImg, name, grade, distance, require, type, curve, fan}){
    return (
        <div className={styles.raceList}>
            <div className = {styles.raceImage}>
                this is image
            </div>
            {
                <GradeButton 
                grade={grade}
                width = "40"
                height = "40"
                />
            }
            <div>
                <p>{name}</p>
            </div>
            <div className={styles.raceDetail}>
                <ul>
                    <li>{
                        distance >= 1200 && distance < 1600 ? "단거리" : 
                        distance >= 1600 && distance < 1801 ? "마일" :
                        distance >= 1801 && distance < 2401 ? "중거리" :
                        distance >= 2401 ? "장거리" : "error"
                    }</li>
                    <li>{
                        type === "grass" ? "잔디" :
                        type === "dirt" ? "더트" : "error"
                    }</li>
                    <li>{curve}</li>
                    <li>+{fan}</li>
                </ul>
            </div>

        </div>
    )
}




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






function RaceContent(){



    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
    let isDetailOpen = true;



    const onChange = (e) => {
        setText(e.target.value);
    }

    const toggleDetail = () => {
        isDetailOpen = !isDetailOpen;
        console.log(isDetailOpen);
    } 


    const newArray = dummy.filter((e) => e.name.includes(text));



    return(
        <div className={styles.contents}>
            <p>도-모 헤더=상, 푸터=상. 여기는 컨텐츠입니다.</p>
            <div>
            <SearchInput setData = {setArray}/>
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
            <button onClick={() => {toggleDetail()}}>DetailOpen</button>
            {
                isDetailOpen ? <DetailSearch /> : null
            }
            <div>
            <button onClick = {() => {console.log(array)}}>click!</button>
            <ul>
                {
                    
                    newArray.map((race) =>
                        <li>
                            <RaceList
                            coverImg={race.img}
                            name = {race.name}
                            grade = {race.grade}
                            distance = {race.distance}
                            require = {race.require}
                            type = {race.type}
                            curve = {race.curve}
                            fan = {race.fan}
                            />
                        </li> 
                    )
                }
            </ul>
            </div>

        </div>
    )
}

export default RaceContent;