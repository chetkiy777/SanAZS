import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MenuSVG(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      fill="none"
      {...props}
    >
      <Path
        fill="#303030"
        d="M1 4.214A1.214 1.214 0 012.214 3h17a1.214 1.214 0 010 2.429h-17A1.214 1.214 0 011 4.214zm0 14.572a1.214 1.214 0 011.214-1.215h17a1.214 1.214 0 010 2.429h-17A1.214 1.214 0 011 18.786zm4.5-8.5a1.214 1.214 0 100 2.428h13.714a1.214 1.214 0 100-2.428H5.5z"
      />
    </Svg>
  )
}

export default MenuSVG
