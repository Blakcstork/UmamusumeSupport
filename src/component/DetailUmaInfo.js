import Accordion from "react-bootstrap/Accordion"

import styles from "../css/DetailUmaInfo.module.css"


function DetailUmaInfo({nickname, name, rarity, img, trackType, distanceType, runType, stat, uniqueSkill, ownSkill, grown, awakenSkill, goal}){

    return(
        <div>
            <div>
                Here Image
            </div>
            <div>
                <div>
                    <table>
                        <tbody>
                        </tbody>
                    </table>
                </div>

                <div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>

                <div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
            <Accordion.Item eventKey="0">
            <Accordion.Header>GOAL Here</Accordion.Header>
                <Accordion.Body>
                    <ul>
                    {goal.map((g) => 
                    (    <li>
                            {g.name}
                        </li>) 
                    )}
                    </ul>

                </Accordion.Body>
          </Accordion.Item>
            </div>
        </div>
    )
}



export default DetailUmaInfo;