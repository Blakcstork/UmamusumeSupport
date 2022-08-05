import {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {SmallRaceList, RaceList} from "./RaceList";

import styles from "../css/RacePlanner.module.css";
import dummy from "../tempServer/race.json";



function PlannerModal({open, setPopup, message, title, callback, smonth, sday}) {
    const handleClose = () => {
      setPopup({open: false});
      if(callback){
        callback();
      }

      console.log(smonth)
      console.log(newArray3)
    }

    //const newArray3 = dummy.filter((e) => e.month.includes(smonth) && e.day.includes(sday));
    const newArray3 = dummy.filter((e) => e.month === smonth && e.day.includes(sday));

    return (
      <>
        <Modal show={open} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
    const [smonth, setMonth] = useState("");
    const [sday, setDay] = useState("");

    const [isSelected, setIsSelected] = useState([]);

    const onClick = (e, month, day) => {
        setPopup({open: true, title : `${month}월 ${day}반`, message : "Hello!"})
        setMonth(month);
        setDay(day);
        console.log(`${month}, ${day}`)
    }


    return (
        <div>
            <PlannerModal open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback} smonth = {smonth} sday = {sday}/>
            <table  className={styles.planTable}>
                <thead>
                    <tr>
                        <th>주니어</th>
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
                        <td onClick = {(e) => onClick(e,1,"전")}> <img src = "/images/icons/plus.png" alt="10" /></td>
                        <td onClick = {(e) => onClick(e,1,"후")}> <img src = "/images/icons/plus.png" alt="11"/> </td>
                        <td onClick = {(e) => onClick(e,2,"전")}> <img src = "/images/icons/plus.png" alt="20"/> </td>
                        <td onClick = {(e) => onClick(e,2,"후")}> <img src = "/images/icons/plus.png" alt="21"/> </td>
                        <td onClick = {(e) => onClick(e,3,"전")}> <img src = "/images/icons/plus.png" alt="30"/> </td>
                        <td onClick = {(e) => onClick(e,3,"후")}> <img src = "/images/icons/plus.png" alt="31"/> </td>
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
                        <td onClick = {(e) => onClick(e,4,"전")}> <img src = "/images/icons/plus.png" alt="40"/></td>
                        <td onClick = {(e) => onClick(e,4,"후")}> <img src = "/images/icons/plus.png" alt="41"/> </td>
                        <td onClick = {(e) => onClick(e,5,"전")}> <img src = "/images/icons/plus.png" alt="50"/> </td>
                        <td onClick = {(e) => onClick(e,5,"후")}> <img src = "/images/icons/plus.png" alt="51"/> </td>
                        <td onClick = {(e) => onClick(e,6,"전")}> <img src = "/images/icons/plus.png" alt="60"/> </td>
                        <td onClick = {(e) => onClick(e,6,"후")}> <img src = "/images/icons/plus.png" alt="61"/> </td>
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
                        <td onClick = {(e) => onClick(e,7,"전")}> <img src = "/images/icons/plus.png" alt="70"/></td>
                        <td onClick = {(e) => onClick(e,7,"후")}> <img src = "/images/icons/plus.png" alt="71"/> </td>
                        <td onClick = {(e) => onClick(e,8,"전")}> <img src = "/images/icons/plus.png" alt="80"/> </td>
                        <td onClick = {(e) => onClick(e,8,"후")}> <img src = "/images/icons/plus.png" alt="81"/> </td>
                        <td onClick = {(e) => onClick(e,9,"전")}> <img src = "/images/icons/plus.png" alt="90"/> </td>
                        <td onClick = {(e) => onClick(e,9,"후")}> <img src = "/images/icons/plus.png" alt="91"/> </td>
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
                        <td onClick = {(e) => onClick(e,10,"전")}> <img src = "/images/icons/plus.png" alt="100"/></td>
                        <td onClick = {(e) => onClick(e,10,"후")}> <img src = "/images/icons/plus.png" alt="101"/> </td>
                        <td onClick = {(e) => onClick(e,11,"전")}> <img src = "/images/icons/plus.png" alt="110"/> </td>
                        <td onClick = {(e) => onClick(e,11,"후")}> <img src = "/images/icons/plus.png" alt="111"/> </td>
                        <td onClick = {(e) => onClick(e,12,"전")}> <img src = "/images/icons/plus.png" alt="120"/> </td>
                        <td onClick = {(e) => onClick(e,12,"후")}> <img src = "/images/icons/plus.png" alt="121"/> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RacePlanner;