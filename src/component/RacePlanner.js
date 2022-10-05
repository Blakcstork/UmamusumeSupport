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




function PlannerBlock({onClick, mon, day, season, isSelected}){

  return (
    <td onClick = {(e) => onClick(e,mon,day)}>
        { isSelected(`${season}${mon}${day}`) ? <img src = "/images/icons/plus.png"/> : <SmallGradeButton grade = {JSON.parse(localStorage.getItem(`${season}${mon}${day}`)).grade}/>}      
    </td>
  )

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
        console.log("isclicked!")
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
                        <PlannerBlock onClick={onClick} mon = {`1`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`1`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`2`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`2`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`3`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`3`} day = {`후`} season = {season} isSelected = {isSelected}/>
                      
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
                        <PlannerBlock onClick={onClick} mon = {`4`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`4`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`5`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`5`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`6`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`6`} day = {`후`} season = {season} isSelected = {isSelected}/>
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
                        <PlannerBlock onClick={onClick} mon = {`7`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`7`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`8`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`8`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`9`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`9`} day = {`후`} season = {season} isSelected = {isSelected}/>
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
                        <PlannerBlock onClick={onClick} mon = {`10`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`10`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`11`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`11`} day = {`후`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`12`} day = {`전`} season = {season} isSelected = {isSelected}/>
                        <PlannerBlock onClick={onClick} mon = {`12`} day = {`후`} season = {season} isSelected = {isSelected}/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RacePlanner;