import { percent, px } from "csx";
import { style } from "typestyle";
import { Colors, Font } from "../style/designSystem";

interface Props {
  wind_degree: number;
  wind_dir: string;
}

const text = style({
  fontFamily: Font.Raleway,
  fontWeight: 500,
  fontSize: 14,
  color: Colors.white,
});

const roundCss = style({
  backgroundColor: Colors.gray2,
  borderRadius: percent(50),
  padding: px(8),
  width: px(30),
  height: px(30),
  margin: px(10),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Wind = ({ wind_degree, wind_dir }: Props) => (
  <div style={{ marginTop: px(5) }}>
    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
      <div className={roundCss}>
        <span
          className="material-symbols-outlined"
          style={{
            color: Colors.white,
            transform: `rotate(${wind_degree}deg)`,
          }}
        >
          north
        </span>
      </div>
    </div>
    <span className={text}>{wind_dir}</span>
  </div>
);
