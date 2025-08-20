import add_icon from "../assets/add_button.svg";

const AddButton = () => {
  return (
    <div className="inputs_box">
      <button className="add_button">
        <img src={add_icon} alt="Add icon" width={24} height={24} />
      </button>
    </div>
  );
};

export default AddButton;