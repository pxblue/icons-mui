/**
Copyright (c) 2018-present, Eaton
 
All rights reserved.
 
This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import React from 'react';
import createSvgIcon from '@material-ui/icons/utils/createSvgIcon';
import SvgIcon from '@material-ui/core/SvgIcon';

const create = () => {
  if(parseInt({{size}}, 10) !== 24){
    return (
      <SvgIcon viewBox={'0 0 ' + {{size}} + ' ' + {{size}}}>
        <React.Fragment>{{{paths}}}</React.Fragment>
      </SvgIcon>
    )
  }
  else return createSvgIcon(
    <React.Fragment>{{{paths}}}</React.Fragment>
  , '{{componentName}}');
}
export default create;
