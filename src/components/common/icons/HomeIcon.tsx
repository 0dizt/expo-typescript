import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const HomeIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill={fill ?? "#292D32"}
      d="M19.33 5.68 13.06 2.3c-.66-.36-1.46-.36-2.12 0L4.67 5.68c-.46.25-.74.73-.74 1.28 0 .54.28 1.03.74 1.28l6.27 3.38c.33.18.7.27 1.06.27.36 0 .73-.09 1.06-.27l6.27-3.38c.46-.25.74-.73.74-1.28s-.28-1.03-.74-1.28Z"
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M9.91 12.79 4.07 9.87c-.45-.22-.97-.2-1.39.06-.43.27-.68.72-.68 1.22v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.442 1.442 0 0 0 1.39-.06c.43-.26.68-.72.68-1.22v-5.51c.01-.96-.52-1.82-1.37-2.24ZM21.32 9.93c-.43-.26-.95-.29-1.39-.06l-5.83 2.92c-.85.43-1.38 1.28-1.38 2.24v5.51c0 .5.25.96.68 1.22a1.442 1.442 0 0 0 1.39.06l5.83-2.92c.85-.43 1.38-1.28 1.38-2.24v-5.51c0-.5-.25-.95-.68-1.22Z"
      opacity={0.4}
    />
  </Svg>
);
export default HomeIcon;