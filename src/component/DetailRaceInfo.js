import styles from "../css/DetailRaceInfo.module.css"
import {GradeButton,GradeButton2} from "./GradeButton"


function DetailRaceInfo({name, month, day, period, distance, type, grade, place, curve, require, fan, gate, img}){
    return(
        
        <div className={styles.detailRaceInfo}>
            <div>
                Race Image
            </div>
            <div>
                <table  className = {styles.infoTable}>
                    <tbody>
                    <tr>
                        <td>시즌</td>
                        <td>{period}</td>
                    </tr>
                    <tr>
                        <td>시기</td>
                        <td>{month}월 {day}반</td>
                    </tr>
                    <tr>
                        <td>등급</td>
                        <td><GradeButton2 grade = {grade} width = "40" height = "40" /></td>
                    </tr>
                    <tr>
                        <td>거리</td>
                        <td>{distance}m   
                        {
                            distance >= 1200 && distance < 1600 ? "단거리" : 
                            distance >= 1600 && distance < 1801 ? "마일" :
                            distance >= 1801 && distance < 2401 ? "중거리" :
                            distance >= 2401 ? "장거리" : "error"
                        }</td>
                    </tr>
                    <tr>
                        <td>경기장 각질</td>
                        <td>{type}</td>
                    </tr>
                    <tr>
                        <td>경기장</td>
                        <td>{place}</td>
                    </tr>
                    <tr>
                        <td>회전</td>
                        <td>{curve}</td>
                    </tr>
                    <tr>
                        <td>필요 팬 수</td>
                        <td>{require}</td>
                    </tr>
                    <tr>
                        <td>획득 팬 수</td>
                        <td>{fan}</td>
                    </tr>
                    <tr>
                        <td>풀 게이트</td>
                        <td>{gate}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                Track Image
            </div>
        </div>
    )
}

export default DetailRaceInfo;