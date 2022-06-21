import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

const VisitedRenderer = (props) => {
  return (
    <ButtonGroup>
      <ToggleButton
        size="sm"
        id={`visited-${props.rowIndex}`}
        type="checkbox"
        variant={props.getValue() ? "outline-primary" : "outline-secondary"}
        checked={props.getValue()}
        value="1"
        onChange={(e) => {
          props.setValue(e.currentTarget.checked);
          console.log("value", props.getValue());
        }}
      >
        {props.getValue() ? "YES" : "NO"}
      </ToggleButton>
    </ButtonGroup>
  );
};

export { VisitedRenderer };
