import {useEffect} from "react"

import Accordion from "react-bootstrap/Accordion"

import styles from "../css/DetailSupportInfo.module.css"

import skillDummy from "../tempServer/skill.json"




function SkillAccordion({oSkills, eSkills}){


    

    return (
        <Accordion defaultActiveKey="0" alwaysOpen>
            
          <Accordion.Item eventKey="0">
            <Accordion.Header>OwnSkill Here</Accordion.Header>
            <Accordion.Body>
              {oSkills.map((skill) => 
                <div>
                  {skill}
                </div>
              
              )}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>EventSkill Here</Accordion.Header>
            <Accordion.Body>
            {eSkills.map((skill) => 
                <div>
                  {skill}
                </div>
              
              )}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );  
}

function EventAccordion({supportName}){

  

  return (
      <Accordion defaultActiveKey="0" alwaysOpen>
          
        <Accordion.Item eventKey="0">
          <Accordion.Header>Event Here</Accordion.Header>
          <Accordion.Body>
            EventList Here
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );  
}


function DetailSupportInfo({info}){

    let nickname, name, img = "";
    let oSkills, eSkills = [];
    let events = [];

    try{
      nickname = info.nickname;
      name = info.name;
      img = info.img;
      oSkills = info.ownSkill;
      eSkills = info.eventSkill;
    }
    catch(err){
      oSkills = [];
      console.log("nothing");
    }


    return(
        
        <div className={styles.detailSupportInfo}>
            <div className = {styles.detailSupportImg}>
              {`${nickname}, ${name}`}
            </div>
            <div className = {styles.detailSupportFunc}>
                allFunctions
            </div>
            <div className = {styles.detailSupportSkill}>
                <SkillAccordion oSkills={oSkills}/>
            </div>
            <div className = {styles.detailSupportEvent}>
                <EventAccordion />
            </div>
        </div>
    )
}

export default DetailSupportInfo;