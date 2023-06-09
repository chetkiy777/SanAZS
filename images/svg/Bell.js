import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Bell(props) {
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
        d="M20.476 15.19l-.24-.292c-1.08-1.307-1.734-2.095-1.734-5.795 0-1.915-.458-3.486-1.361-4.665-.666-.87-1.566-1.53-2.752-2.019a.148.148 0 01-.04-.033C13.92.957 12.753 0 11.436 0s-2.484.957-2.91 2.385a.154.154 0 01-.04.032c-2.769 1.14-4.114 3.326-4.114 6.685 0 3.7-.653 4.49-1.734 5.795-.079.094-.159.19-.24.29a1.726 1.726 0 00-.229 1.848c.303.639.949 1.035 1.686 1.035h15.169c.733 0 1.375-.396 1.679-1.031a1.727 1.727 0 00-.227-1.85zM11.436 22a3.932 3.932 0 003.46-2.069.197.197 0 00-.077-.263.196.196 0 00-.097-.025h-6.57a.196.196 0 00-.174.288A3.93 3.93 0 0011.437 22z"
      />
    </Svg>
  )
}

export default Bell