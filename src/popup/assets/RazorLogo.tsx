import * as React from 'react';
import { SVGProps } from 'react';

function SvgComponent(props: SVGProps<SVGSVGElement>) {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={32} height={32} viewBox="0 0 82.000000 82.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,82.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M311 607 c-37 -19 -63 -60 -68 -109 -8 -66 0 -69 173 -66 l149 3 3
        93 3 92 -118 0 c-74 0 -127 -5 -142 -13z"/>
        <path d="M251 386 c-8 -9 -11 -43 -9 -93 l3 -78 117 -3 c91 -2 125 1 148 13
        41 21 62 66 58 123 l-3 47 -151 3 c-121 2 -153 0 -163 -12z"/>
        </g>
        </svg>
    );
}

export default SvgComponent;



