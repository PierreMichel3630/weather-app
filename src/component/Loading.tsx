import { style } from "typestyle";
import { Colors } from "../style/designSystem";

const skeletonCss = style({
  backgroundColor: Colors.gray3,
  animation: "skeleton-loading 1s linear infinite alternate",
});

interface Props {
  height?: number;
}
export const Skeleton = ({ height = 130 }: Props) => (
  <div className={skeletonCss} style={{ height }} />
);
