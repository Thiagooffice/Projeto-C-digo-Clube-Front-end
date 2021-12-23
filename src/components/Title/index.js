import React from 'react';
import {H1} from './style'

export default function Title(props) {
 return (
   <H1>
       {props.children}
   </H1>
 );
}