import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"

const Sum = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={16.5} cy={16.5} r={16.5} fill="#FCFFFE" />
    </G>
    <Circle cx={16.5} cy={16.5} r={16} stroke="#FCFFFE" />
    <Path
      fill="#00B488"
      d="M24.2 24H9.8c-.477 0-.935-.184-1.273-.513A1.726 1.726 0 0 1 8 22.25v-10.5c0-.464.19-.91.527-1.237A1.826 1.826 0 0 1 9.8 10h14.4c.477 0 .935.184 1.273.513.337.328.527.773.527 1.237v10.5c0 .464-.19.91-.527 1.237A1.826 1.826 0 0 1 24.2 24Zm-13.5-6.125v1.75h9.9v-1.75h-9.9Zm0-3.5v1.75h12.6v-1.75H10.7Z"
    />
    <Defs></Defs>
  </Svg>
)
export default Sum
