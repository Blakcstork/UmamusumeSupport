import styles from "../css/DetailRaceInfo.module.css"
import GradeButton from "./GradeButton"


function DetailRaceInfo({name, month, day, period, distance, type, grade, place, curve, require, fan, gate, img}){
    return(
        
        <div className={styles.detailRaceInfo}>
            <div>
                Race Image
            </div>
            <table  className = {styles.infoTable}>
                <tbody>
                <tr>
                    <td>시즌</td>
                    <td>클래식</td>
                </tr>
                <tr>
                    <td>시기</td>
                    <td>n월 전반</td>
                </tr>
                <tr>
                    <td>등급</td>
                    <td><GradeButton grade = "G3" width = "40" height = "40"/></td>
                </tr>
                <tr>
                    <td>거리</td>
                    <td>1200m 단거리</td>
                </tr>
                <tr>
                    <td>경기장 각질</td>
                    <td>잔디</td>
                </tr>
                <tr>
                    <td>경기장</td>
                    <td>도쿄</td>
                </tr>
                <tr>
                    <td>회전</td>
                    <td>좌회전, 외</td>
                </tr>
                <tr>
                    <td>필요 팬 수</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>획득 팬 수</td>
                    <td>15000</td>
                </tr>
                <tr>
                    <td>풀 게이트</td>
                    <td>16</td>
                </tr>
                </tbody>
            </table>
            <div>
                Track Image
            </div>
        </div>
    )
}

export default DetailRaceInfo;