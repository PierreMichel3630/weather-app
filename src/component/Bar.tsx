import { percent, px } from "csx";
import { classes, style } from "typestyle";
import { Colors, Font } from "../style/designSystem";

interface Props {
  value: number;
}

const barCss = style({
  borderRadius: px(80),
  height: px(8),
  width: percent(100),
});

const barYellowCss = style({
  backgroundColor: Colors.yellow,
});

const barWhiteCss = style({
  backgroundColor: Colors.white,
});

const text = style({
  fontFamily: Font.Raleway,
  color: Colors.gray,
  fontSize: px(12),
  fontWeight: 700,
});

export const PercentBar = ({ value }: Props) => (
  <div>
    <div style={{ position: "relative", marginBottom: px(2) }}>
      <span
        className={text}
        style={{ position: "absolute", left: 0, bottom: 0 }}
      >
        0
      </span>
      <span className={text}>50</span>
      <span
        className={text}
        style={{ position: "absolute", right: 0, bottom: 0 }}
      >
        100
      </span>
    </div>
    <div className={classes(barCss, barWhiteCss)}>
      <div
        className={classes(barCss, barYellowCss)}
        style={{ width: percent(value) }}
      ></div>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <span className={text}>%</span>
    </div>
  </div>
);
