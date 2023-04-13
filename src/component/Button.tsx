import { percent, px } from "csx";
import { classes, style } from "typestyle";
import { Colors, text } from "../style/designSystem";

interface Props {
  active: boolean;
  icon: string;
  onClick: () => void;
}

const buttonRoundCss = style({
  borderRadius: percent(50),
  padding: px(8),
  cursor: "pointer",
  fontWeight: "bold",
  width: px(30),
  height: px(30),
  margin: px(10),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const activate = style({
  backgroundColor: Colors.white,
  color: Colors.black2,
});
const notActivate = style({
  backgroundColor: Colors.gray5,
  color: Colors.white,
});
export const ButtonRound = ({ active, icon, onClick }: Props) => (
  <div
    className={classes(text, buttonRoundCss, active ? activate : notActivate)}
    onClick={onClick}
  >
    <span>{icon}</span>
  </div>
);
