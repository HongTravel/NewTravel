import React,{useState} from "react";

function Incheon(){

    const [text, setText] = useState('');

    const InputText = (e) =>{
        setText(e.target.value);
    }
    const ResetText = () => {
        setText('');
    }

  return(
        <div>
          <div>
            <h3>인천광역시</h3>
          </div>
          <div>
             <label>주소 &nbsp;</label><input type="text" onChange={InputText} value={text} placeholder="지역구를 입력하세요" />
             <button onClick ={ResetText}>초기화</button>
          </div>
          <div>
            <b>주소로 {text} 를 검색한 결과입니다.</b>
          </div>
      </div>
    )
}

export default Incheon;
