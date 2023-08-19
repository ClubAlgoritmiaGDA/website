/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/function-component-definition */

import * as React from 'react'
import { SVGProps } from 'react'

const AppleIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            fill="#000"
            d="M14.94 5.19A4.379 4.379 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42Zm2.52 7.44a4.509 4.509 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91-.83 0-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53 1.32-.05 1.75-.82 3.28-.82 1.53 0 2 .82 3.3.79 1.3-.03 2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85 4.41 4.41 0 0 1-2.68-4.04Z"
        />
    </svg>
)
export default AppleIcon
