import useComponentVisible from "../useComponentVisible";
import "../../styles/main.css";
import "../../styles/search.css";

const DropDown = ({ name, items, checked, setChecked }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const handleChecked = (e) => {
    setChecked((old) =>
      old.includes(e.target.name)
        ? [...old.filter((item) => item !== e.target.name)]
        : [...old, e.target.name]
    );
  };


  return (
    <div className="checkbox-container"  ref={ref} key={name}>
      <button style={isComponentVisible ? {border: "2px solid #facd1e"}:null}
        onClick={() => {
          setIsComponentVisible(!isComponentVisible);
        }}
      >
        {name}
      </button>
      {isComponentVisible && (
        <div className="checkbox-subcontainer" id={name.toLowerCase()}>
          {items.map((item) => {
            return (
              <div className="checkbox" key={item.id}>
                <label>{item.attributes.name}</label>
                <input
                  type="checkbox"
                  name={item.attributes.name}
                  onChange={handleChecked}
                  checked={checked.includes(item.attributes.name)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
