import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
interface Props extends SvgProps {
  fill?: string | undefined;
}
const NoteIcon: React.FC<Props> = ({ fill, ...props }: SvgProps) => (
  <Svg viewBox="0 0 24 24" width={24} height={24} fill="none" {...props}>
    <Path
      fill={fill ?? "#292D32"}
      d="M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z"
      opacity={0.4}
    />
    <Path
      fill={fill ?? "#292D32"}
      d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM14.78 13.71H7.36a.749.749 0 1 1 0-1.5h7.42a.749.749 0 1 1 0 1.5ZM12 17.42H7.36a.749.749 0 1 1 0-1.5H12a.749.749 0 1 1 0 1.5Z"
    />
  </Svg>
);
export default NoteIcon;
