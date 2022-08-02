import styles from "../css/RacePlanner.module.css"


function RacePlanner(){

    return (
        <div>
            <div>주니어</div>
            <table  className={styles.planTable}>
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
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> +</td>
                        <td> + </td>
                        <td> + </td>
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
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
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
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
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
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                        <td> + </td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default RacePlanner;