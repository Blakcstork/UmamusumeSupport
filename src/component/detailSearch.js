import {useState} from "react"

import { SmallGradeButton } from "./GradeButton";


import dummy from "../tempServer/race.json"

import styles from "../css/DetailSearch.module.css"






function DetailSearchRace({setArray}){
    
    const [list, setList] = useState(["", "", "", ""]);

    const onChange = (e) => {
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
                            <label><input type = "radio" name = "distance" value = "단거리" onChange={onChange} /> 단거리 </label>
                            <label><input type = "radio" name = "distance" value = "마일" onChange={onChange} /> 마일 </label>
                            <label><input type = "radio" name = "distance" value = "중거리" onChange={onChange} /> 중거리 </label>
                            <label><input type = "radio" name = "distance" value = "장거리" onChange={onChange} /> 장거리 </label>                            
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
                            <label><input type = "radio" name = "season" value = "주니어" onChange = {onChange}/> 주니어 </label>
                            <label><input type = "radio" name = "season" value = "클래식" onChange = {onChange}/> 클래식 </label>  
                            <label><input type = "radio" name = "season" value = "시니어" onChange = {onChange}/> 시니어 </label>                             
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







function DetailSearchSupport({setArray}){
    
    const typeKind =[
        {name : "speed", img : "/images/types/i_type1.png"},
        {name : "stamina", img : "/images/types/i_type2.png"},
        {name : "power", img : "/images/types/i_type3.png"},
        {name : "gonjo", img : "/images/types/i_type4.png"},
        {name : "knowledge", img : "/images/types/i_type5.png"},
        {name : "friend", img : "/images/types/i_type6.png"}
    ];

    const rarityKind = ["SSR", "SR", "R"];

    const [list, setList] = useState([[], [], [], []]);

    const onClick = (e) => {
        console.log(e);
    }

    const onChange = (e) => {
        console.log(e);
        if(e.target.name === "type") {
          const newList = list;

          if(e.target.checked){
            newList[0].push(e.target.value);
            setList({...newList}); //... 붙이면 해제했다가 다시 붙이는 것
            console.log(newList);
          }
          else{
            for (let i = 0 ; i < newList[0].length; i++){
                if(newList[0][i] === e.target.value){
                    newList[0].splice(i,1);
                    i--;
                }
            }
            setList({...newList}); //... 붙이면 해제했다가 다시 붙이는 것
            console.log(newList);
          }

        }
        else if(e.target.name === "rarity") {
            const newList = list;

            if(e.target.checked){
              newList[1].push(e.target.value);
              setList({...newList});
              console.log(newList);
            }
            else{
              for (let i = 0 ; i < newList[1].length; i++){
                  if(newList[1][i] === e.target.value){
                      newList[1].splice(i,1);
                      i--;
                  }
              }
              setList({...newList});
              console.log(newList);
            }
        }
        else if(e.target.name === "rType"){
            const newList = list;

            if(e.target.checked){
              newList[2].push(e.target.value);
              setList({...newList}); 
              console.log(newList);
            }
            else{
              for (let i = 0 ; i < newList[2].length; i++){
                  if(newList[2][i] === e.target.value){
                      newList[2].splice(i,1);
                      i--;
                  }
              }
              setList({...newList}); 
              console.log(newList);
            }          
        }
        else if(e.target.name === "dType"){
            const newList = list;

            if(e.target.checked){
              newList[3].push(e.target.value);
              setList({...newList}); 
              console.log(newList);
            }
            else{
              for (let i = 0 ; i < newList[3].length; i++){
                  if(newList[3][i] === e.target.value){
                      newList[3].splice(i,1);
                      i--;
                  }
              }
              setList({...newList});
              console.log(newList);
            }       
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
                            {typeKind.map(kind => (
                                    <label>
                                        <input
                                            type = "checkbox"
                                            name = "type"
                                            className = {styles.input_hidden}
                                            value = {kind.name}
                                            onChange = {onChange}
                                            onClick = {onClick}
                                       />
                                        <img src = {kind.img} alt = {kind.name} className = {styles.inputImg}></img>
                                    </label>
                                ))
                            }                           
                        </td>
                    </tr>
                    <tr>
                        <td>레어도</td>
                        <td>
                            {rarityKind.map(kind => (
                                <label>
                                    <input
                                        type = "checkbox"
                                        name = "rarity"
                                        className = {styles.input_hidden}
                                        value = {kind}
                                        onChange = {onChange}
                                        onClick = {onClick}
                                   />
                                   {kind}
                                </label>
                            ))
                            }                   
                        </td>
                    </tr>
                    <tr>
                        <td>각질</td>
                        <td>
                            <label><input type="checkbox" name = "rType" value = "도주" onChange = {onChange}/>도주</label>
                            <label><input type="checkbox" name = "rType" value = "선행" onChange = {onChange}/>선행</label>
                            <label><input type="checkbox" name = "rType" value = "선입" onChange = {onChange}/>선입</label>
                            <label><input type="checkbox" name = "rType" value = "추입" onChange = {onChange}/>추입</label>                            
                        </td>
                    </tr>
                    <tr>
                        <td>경기장 각질</td>
                        <td>
                            <label><input type="checkbox" name = "dType" value = "단거리" onChange = {onChange}/>단거리</label>
                            <label><input type="checkbox" name = "dType" value = "마일" onChange = {onChange}/>마일</label>
                            <label><input type="checkbox" name = "dType" value = "중거리" onChange = {onChange}/>중거리</label>
                            <label><input type="checkbox" name = "dType" value = "장거리" onChange = {onChange}/>장거리</label>                           
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








function DetailSearchUma({setArray}){
    
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
                        <td>타입</td>
                        <td>
                            <label><input type = "radio" name = "ground" value = "grass" onChange = {onChange}/> 잔디 </label>
                            <label><input type = "radio" name = "ground" value = "dirt" onChange = {onChange}/> 더트 </label>                             
                        </td>
                    </tr>
                    <tr>
                        <td>시즌</td>
                        <td>
                            <label><input type = "radio" name = "dType" value = "단거리" onChange = {onChange}/> 단거리 </label>
                            <label><input type = "radio" name = "dType" value = "마일" onChange = {onChange}/> 마일 </label>  
                            <label><input type = "radio" name = "dType" value = "중거리" onChange = {onChange}/> 중거리 </label>
                            <label><input type = "radio" name = "dType" value = "장거리" onChange = {onChange}/> 장거리 </label>                             
                        </td>
                    </tr>
                    <tr>
                        <td>등급</td>
                        <td>
                            <label><input type = "radio" name = "rType" value = "도주" onChange = {onChange}/> 도주 </label>
                            <label><input type = "radio" name = "rType" value = "선행" onChange = {onChange}/> 선행 </label>  
                            <label><input type = "radio" name = "rType" value = "선입" onChange = {onChange}/> 선입 </label>
                            <label><input type = "radio" name = "rType" value = "추입" onChange = {onChange}/> 추입 </label>                               
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


export {DetailSearchRace, DetailSearchSupport, DetailSearchUma}