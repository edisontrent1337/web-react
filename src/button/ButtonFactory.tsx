import * as React from 'react';
import * as materialColor from 'material-colors';

import Button, { OnClickCallback } from './Button';

export function createDeleteButton(handleDelete: OnClickCallback) {
  return (
    <Button
      width={'120px'}
      value={
        <span>
          <i className={'typcn typcn-trash'} />Delete
        </span>
      }
      color={materialColor.red['600']}
      onClick={handleDelete}
    />
  );
}

export function buttonFace(icon: string, text: string) {
  return (
    <span>
      <i className={'typcn typcn-' + icon} />
      {text}
    </span>
  );
}
