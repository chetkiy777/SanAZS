import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Logo(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={34}
      height={47}
      fill="none"
      {...props}
    >
      <Path
        fill="#00B488"
        stroke="#FCFFFE"
        strokeWidth={1.01}
        d="M33.495 29.174c0 9.11-7.385 16.495-16.495 16.495-4.528 0-8.652-2.18-11.654-5.354-3.005-3.18-4.841-7.31-4.841-11.141 0-3.24 1.415-6.088 3.397-9.033.754-1.12 1.579-2.24 2.433-3.399l.816-1.11c1.136-1.555 2.288-3.185 3.326-4.94C12.863 6.659 13.69 3.989 13.69.785c0-.181.03-.254.042-.276a.319.319 0 01.1-.002c.13.013.324.07.583.193a7.1 7.1 0 01.854.493c1.257.83 2.758 2.178 3.686 3.046 11.513 10.773 14.54 17.634 14.54 24.935zM13.722.514s0-.002.005-.003l-.005.002z"
      />
      <Path
        fill="#FCFFFE"
        stroke="#FCFFFE"
        strokeWidth={1.01}
        d="M30.802 32.13c0 7.337-6.163 13.315-13.802 13.315-3.791 0-7.243-1.763-9.756-4.33-2.516-2.57-4.046-5.904-4.046-8.984 0-2.61 1.12-5.003 2.75-7.435.813-1.214 1.744-2.424 2.71-3.668l.248-.318c.886-1.14 1.796-2.309 2.651-3.52 2.978-4.218 3.813-5.713 4.624-8.743a.595.595 0 01.048-.13.823.823 0 01.227.093c.127.07.278.173.451.311.557.445 1.212 1.134 1.898 1.858.192.202.387.407.583.61 9.062 9.4 11.414 15.034 11.414 20.942z"
      />
      <Path
        fill="#DC0000"
        stroke="#DC0000"
        strokeWidth={1.01}
        d="M14.359 40.802a11.934 11.934 0 002.102 3.147c-2.511-.366-4.778-1.702-6.504-3.53-2.04-2.16-3.28-4.961-3.28-7.546 0-2.189.906-4.199 2.231-6.249.662-1.023 1.42-2.044 2.208-3.096l.202-.269c.723-.963 1.466-1.953 2.165-2.978 2.361-3.467 2.853-4.83 3.673-7.105.03-.086.062-.174.095-.263a.562.562 0 01.011-.03c.094.028.267.119.526.328.56.454 1.233 1.217 1.878 1.95l.04.046c7.166 8.138 9.3 12.702 9.3 17.666 0 4.686-2.882 8.7-6.969 10.36 4.419-8.683 1.802-14.998-.295-17.205l-1.047-1.104.18 1.511c.344 2.89.263 4.91-.07 6.282-.331 1.366-.896 2.034-1.485 2.332-.6.304-1.345.286-2.16.022-.813-.263-1.632-.753-2.316-1.293l-.541-.428-.244.646c-.956 2.532-.562 4.899.3 6.806z"
      />
    </Svg>
  )
}

export default Logo
