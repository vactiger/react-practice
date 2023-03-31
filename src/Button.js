
function Button(props) {
  // 按鈕有二個屬性：內容文字 value、顏色 class
  // value: inputValue[0]
  // class: inputValue[1]
  const { inputValue } = props;
  // console.log(inputValue);
  return (
    <button type="button" className={`btn button ${inputValue[1]} mr-4 text-uppercase`}>{inputValue[0]}</button>
  );
}

export default Button;