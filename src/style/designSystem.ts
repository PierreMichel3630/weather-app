import { px } from "csx";
import { style } from "typestyle";

export const Colors = {
  black: "#100E1D",
  black2: "#110E3C",
  gray: "#A09FB1",
  gray2: "#88869D",
  gray3: "#1E213A",
  gray4: "#6E707A",
  gray5: "#585676",
  white: "#E7E7EB",
  yellow: "#FFEC65",
};

export const Font = {
  Raleway: "Raleway",
};

export const FontStyle = {
  Medium: "Medium",
  SemiBold: "SemiBold",
};

export const text = style({
  fontFamily: Font.Raleway,
  fontSize: px(18),
  fontWeight: 700,
  margin: 0,
});

export const textWhite = style({
  fontFamily: Font.Raleway,
  fontSize: px(16),
  color: Colors.white,
  fontWeight: 500,
  margin: 0,
});

export const textWhite1 = style({
  fontFamily: Font.Raleway,
  fontSize: px(24),
  color: Colors.white,
  fontWeight: 700,
  margin: 0,
});

export const textWhite2 = style({
  fontFamily: Font.Raleway,
  fontSize: px(36),
  color: Colors.white,
  fontWeight: 500,
  margin: 0,
});

export const textWhite3 = style({
  fontFamily: Font.Raleway,
  fontSize: px(64),
  color: Colors.white,
  fontWeight: 700,
  margin: 0,
});

export const textWhite4 = style({
  fontFamily: Font.Raleway,
  fontSize: px(144),
  color: Colors.white,
  fontWeight: 500,
  margin: 0,
});

export const textGray = style({
  fontFamily: Font.Raleway,
  fontSize: px(16),
  color: Colors.gray,
  fontWeight: 500,
  margin: 0,
});

export const textGray1 = style({
  fontFamily: Font.Raleway,
  fontSize: px(36),
  color: Colors.gray,
  fontWeight: 500,
  margin: 0,
});

export const textGray2 = style({
  fontFamily: Font.Raleway,
  fontSize: px(48),
  color: Colors.gray,
  fontWeight: 500,
  margin: 0,
});

export const textGray3 = style({
  fontFamily: Font.Raleway,
  fontSize: px(18),
  color: Colors.gray2,
  fontWeight: 500,
  margin: 0,
});
