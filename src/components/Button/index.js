import {Button as ContainerButton} from './styles'

import React from 'react';

export default function Button({children, ...props}) {
 return (
   <ContainerButton {...props}>
       {children}
   </ContainerButton>
 )
}