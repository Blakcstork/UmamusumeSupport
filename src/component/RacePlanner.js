import {useEffect, useState} from "react";

import {SmallRaceList} from "./RaceList";

import styles from "../css/RacePlanner.module.css";
import dummy from "../tempServer/race.json";
import umaDummy from "../tempServer/uma.json"
import { SmallGradeButton } from "./GradeButton";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function UmaSelectModal({open, setPopup, message, title, callback, season, smonth, sday, selected}){


  const handleClose = () => {
    setPopup({open: false});
    if(callback){
      callback();
    }
  }



  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            umaDummy.map((e) => 
              <div className = {styles.smallUmaIcon}>
                {e.name}
              </div>   
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



function PlannerModal({open, setPopup, message, title, callback, season, smonth, sday, selected}) {
    
    let temp = [];
    if(selected === null){
      temp = [];
    }
    else{
      temp = JSON.parse(selected);
    }


    const handleClose = () => {
      setPopup({open: false});
      if(callback){
        callback();
      }
    }

    const newArray3 = dummy.filter((e) => e.period === season && e.month === smonth && e.day.includes(sday));

    const onClick = (e, params) => {
      localStorage.setItem(`${season}${params.month}${params.day}`, JSON.stringify(params))
      handleClose();
    }

    return (
      <>
        <Modal show={open} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className = {styles.currentRace}>
              {
                selected === null ?
                <div className={styles.nullCurrentRace}>
                  there's no race!
                </div>
                  :
                <SmallRaceList
                coverImg={temp.img}
                name = {temp.name}
                grade = {temp.grade}
                distance = {temp.distance}
                require = {temp.require}
                type = {temp.type}
                curve = {temp.curve}
                fan = {temp.fan}
                />
              }

            </div>
            <div className={styles.boldLine}></div>
          {
            newArray3.map((race) => 
                <div className={styles.raceList}>
                    <SmallRaceList
                        coverImg={race.img}
                        name = {race.name}
                        grade = {race.grade}
                        distance = {race.distance}
                        require = {race.require}
                        type = {race.type}
                        curve = {race.curve}
                        fan = {race.fan}
                        onClick = {(e) => {onClick(e, race)}}
                    />
                </div>
            )
          }           
            </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}







function RacePlanner({season}){
    const [popup, setPopup] = useState({open : false, title : "", message: "", callback : false});
    const [popup2, setPopup2] = useState({open : false, title : "", message: "", callback : false});
    const [smonth, setMonth] = useState("");
    const [sday, setDay] = useState("");
    const [reset, setReset] = useState(0);
    const [selected, setSelected] = useState (null);

    const onClick = (e, month, day) => {
        setPopup({open: true, title : `${season} ${month}월 ${day}반`, message : "Hello!"})
        setMonth(month);
        setDay(day);
        setSelected(localStorage.getItem(`${season}${month}${day}`))
    }

    const onClickPlan = (e) => {
      }


    const isSelected = (e) =>{
      return (localStorage.getItem(e) === null)
    }



    return (
        <div>
            <PlannerModal open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback} season = {season} smonth = {smonth} sday = {sday} selected = {selected}/>
            <div>

            </div>
            <table  className={styles.planTable}>
                <thead>
                    <tr>
                        <th>{season}</th>
                        <th><button onClick={(e) => {localStorage.clear(); setReset(reset+1);}}>초기화</button></th>

                    </tr>
                    
                </thead>
                <tbody>
                    <tr className={styles.pNames}>
                        <td>1월 전</td>
                        <td>1월 후</td>
                        <td>2월 전</td>
                        <td>2월 후</td>
                        <td>3월 전</td>
                        <td>3월 후</td>
                    </tr>
                    <tr className= {styles.pContents}>
                        <td onClick = {(e) => onClick(e,1,"전")}> { isSelected(`${season}1전`) ? <img src = "/images/icons/plus.png" alt="1" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}1전`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,1,"후")}> { isSelected(`${season}1후`) ? <img src = "/images/icons/plus.png" alt="2" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}1후`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,2,"전")}> { isSelected(`${season}2전`) ? <img src = "/images/icons/plus.png" alt="3" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}2전`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,2,"후")}> { isSelected(`${season}2후`) ? <img src = "/images/icons/plus.png" alt="4" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}2후`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,3,"전")}> { isSelected(`${season}3전`) ? <img src = "/images/icons/plus.png" alt="5" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}3전`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,3,"후")}> { isSelected(`${season}3후`) ? <img src = "/images/icons/plus.png" alt="6" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}3후`)).grade}/>} </td>
                    </tr>
                    <tr className={styles.pNames}>
                        <td>4월 전</td>
                        <td>4월 후</td>
                        <td>5월 전</td>
                        <td>5월 후</td>
                        <td>6월 전</td>
                        <td>6월 후</td>
                    </tr>
                    <tr className= {styles.pContents}>
                        <td onClick = {(e) => onClick(e,4,"전")}> { isSelected(`${season}4전`) ? <img src = "/images/icons/plus.png" alt="7" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}4전`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,4,"후")}> { isSelected(`${season}4후`) ? <img src = "/images/icons/plus.png" alt="8" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}4후`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,5,"전")}> { isSelected(`${season}5전`) ? <img src = "/images/icons/plus.png" alt="9" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}5전`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,5,"후")}> { isSelected(`${season}5후`) ? <img src = "/images/icons/plus.png" alt="10" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}5후`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,6,"전")}> { isSelected(`${season}6전`) ? <img src = "/images/icons/plus.png" alt="11" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}6전`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,6,"후")}> { isSelected(`${season}6후`) ? <img src = "/images/icons/plus.png" alt="12" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}6후`)).grade}/>}</td>
                    </tr>
                    <tr className={styles.pNames}> 
                        <td>7월 전</td>
                        <td>7월 후</td>
                        <td>8월 전</td>
                        <td>8월 후</td>
                        <td>9월 전</td>
                        <td>9월 후</td>
                    </tr>
                    <tr className= {styles.pContents}>
                        <td onClick = {(e) => onClick(e,7,"전")}> { isSelected(`${season}7전`) ? <img src = "/images/icons/plus.png" alt="13" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}7전`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,7,"후")}> { isSelected(`${season}7후`) ? <img src = "/images/icons/plus.png" alt="14" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}7후`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,8,"전")}> { isSelected(`${season}8전`) ? <img src = "/images/icons/plus.png" alt="15" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}8전`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,8,"후")}> { isSelected(`${season}8후`) ? <img src = "/images/icons/plus.png" alt="16" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}8후`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,9,"전")}> { isSelected(`${season}9전`) ? <img src = "/images/icons/plus.png" alt="17" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}9전`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,9,"후")}> { isSelected(`${season}9후`) ? <img src = "/images/icons/plus.png" alt="18" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}9후`)).grade}/>} </td>
                    </tr>
                    <tr className={styles.pNames}>
                        <td>10월 전</td>
                        <td>10월 후</td>
                        <td>11월 전</td>
                        <td>11월 후</td>
                        <td>12월 전</td>
                        <td>12월 후</td>
                    </tr>
                    <tr className= {styles.pContents}>
                        <td onClick = {(e) => onClick(e,10,"전")}> { isSelected(`${season}10전`) ? <img src = "/images/icons/plus.png" alt="19" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}10전`)).grade}/>}</td>
                        <td onClick = {(e) => onClick(e,10,"후")}> { isSelected(`${season}10후`) ? <img src = "/images/icons/plus.png" alt="20" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}10후`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,11,"전")}> { isSelected(`${season}11전`) ? <img src = "/images/icons/plus.png" alt="21" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}11전`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,11,"후")}> { isSelected(`${season}11후`) ? <img src = "/images/icons/plus.png" alt="22" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}11후`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,12,"전")}> { isSelected(`${season}12전`) ? <img src = "/images/icons/plus.png" alt="23" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}12전`)).grade}/>} </td>
                        <td onClick = {(e) => onClick(e,12,"후")}> { isSelected(`${season}12후`) ? <img src = "/images/icons/plus.png" alt="24" /> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}12후`)).grade}/>} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RacePlanner;