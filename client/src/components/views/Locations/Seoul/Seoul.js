import React,{useState} from "react";

function Seoul(){

    const [text, setText] = useState('');

    const InputText = (e) =>{
        setText(e.target.value);
    }
    const ResetText = () => {
        setText('');
    }

  return(
        <div style={{marginLeft:"300px"}}>
          <div>
            <h2><b>서울특별시</b></h2>
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

export default Seoul;
