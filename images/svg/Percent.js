import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"

const Percent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={16.5} cy={16.5} r={16.5} fill="#FCFFFE" />
    </G>
    <Circle cx={16.5} cy={16.5} r={16} stroke="#FCFFFE" />
    <Path
      fill="#00B488"
      d="M16.5 7C11.275 7 7 11.275 7 16.5s4.275 9.5 9.5 9.5 9.5-4.275 9.5-9.5S21.725 7 16.5 7Zm-3.011 4.797c.93 0 1.681.751 1.681 1.691 0 .931-.75 1.682-1.681 1.682a1.68 1.68 0 0 1-1.692-1.681c0-.941.751-1.692 1.691-1.692Zm6.07 9.453c-.931 0-1.681-.76-1.681-1.691s.75-1.681 1.681-1.681 1.691.75 1.691 1.681-.76 1.691-1.691 1.691Zm-6.384.029-1.425-1.425 8.104-8.104 1.425 1.425-8.104 8.104Z"
    />
    <Defs></Defs>
  </Svg>
)
export default Percent
