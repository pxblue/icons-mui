/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import React from 'react';
import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';
import SvgIcon from '@material-ui/core/SvgIcon';

const create = ({{width}} !== '24' || {{height}} !== '24') ? 
  (props)=>
    <SvgIcon viewBox={'0 0 ' + {{width}} + ' ' + {{height}}} {...props}>
      <React.Fragment>{{{paths}}}</React.Fragment>
    </SvgIcon>
  : 
  createSvgIcon(
    <React.Fragment>{{{paths}}}</React.Fragment>
    , '{{componentName}}'
  )
;
export default create;
