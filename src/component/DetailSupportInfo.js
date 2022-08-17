import Accordion from "react-bootstrap/Accordion"

import styles from "../css/DetailSupportInfo.module.css"

import skillDummy from "../tempServer/skill.json"
import supportDummy from "../tempServer/support.json"



function SkillAccordion(supportName){

    const thisSupport = supportDummy.filter((e) => e.name === supportName);


    return (
        <Accordion defaultActiveKey="0" alwaysOpen>
            
          <Accordion.Item eventKey="0">
            <Accordion.Header>Skill Name Here</Accordion.Header>
            <Accordion.Body>
              Skill Detail Here
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Skill Name 2 Here</Accordion.Header>
            <Accordion.Body>
              Skill Detail 2 Here
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      );  
}


function DetailSupportInfo({}){
    return(
        
        <div className={styles.detailSupportInfo}>
            <div className = {styles.detailSupportImg}>
                Support Image
            </div>
            <div className = {styles.detailSupportFunc}>
                allFunctions
            </div>
            <div className = {styles.detailSupportSkill}>
                <SkillAccordion />
            </div>
            <div className = {styles.detailSupportEvent}>
                Events
            </div>
        </div>
    )
}

export default DetailSupportInfo;