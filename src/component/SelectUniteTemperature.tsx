import { style } from "typestyle";
import { Temperature } from "../model/Unity";
import { ButtonRound } from "./Button";

interface Props {
  unite: Temperature;
  change: (unite: Temperature) => void;
}

const body = style({
  display: "flex",
  justifyContent: "flex-end",
});
export const SelectUniteTemperature = ({ unite, change }: Props) => {
  return (
    <div className={body}>
      <ButtonRound
        active={unite === Temperature.DEGREE}
        icon={Temperature.DEGREE}
        onClick={() => change(Temperature.DEGREE)}
      />
      <ButtonRound
        active={unite === Temperature.FAHRENHEIT}
        icon={Temperature.FAHRENHEIT}
        onClick={() => change(Temperature.FAHRENHEIT)}
      />
    </div>
  );
};
