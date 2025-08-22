const AddInput = ({
  inputValue,
  setVasetInputValuelue,
}: {
  inputValue: string;
  setVasetInputValuelue: (val: string) => void;
}) => {
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setVasetInputValuelue(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default AddInput;
