import AddInput from "./AddInput";
import AddButton from "./AddButton";

import { useContexState } from "../context/Context";

const AddComponent = () => {
  const {inputValue,setInputValue} = useContexState()

  return (
    <div className="button_input_box">
      <AddInput inputValue={inputValue} setVasetInputValuelue={setInputValue} />
      <AddButton />
    </div>
  );
};

export default AddComponent;
