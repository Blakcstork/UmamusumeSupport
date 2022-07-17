

function DetailSearch(){
    return (
        <form>
            <div>
                <p>거리</p>
                <label><input type = "radio" name = "distance" value = "short"/> 단거리 </label>
                <label><input type = "radio" name = "distance" value = "mile"/> 마일 </label>
                <label><input type = "radio" name = "distance" value = "middle"/> 중거리 </label>
                <label><input type = "radio" name = "distance" value = "long"/> 장거리 </label>
            </div>
            <div>
                <p>경기장 종류</p>
                <label><input type = "radio" name = "ground" value = "grass"/> 잔디 </label>
                <label><input type = "radio" name = "ground" value = "dirt"/> 더트 </label>         
            </div>
            <div>
                <p>시즌</p>
                <label><input type = "radio" name = "season" value = "junior"/> 주니어 </label>
                <label><input type = "radio" name = "season" value = "classic"/> 클래식 </label>  
                <label><input type = "radio" name = "season" value = "senior"/> 시니어 </label>  
            </div>
            <div>
                <button type = "submit">검색</button>
            </div>
        </form>
    )
}

export default DetailSearch;