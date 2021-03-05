import React from 'react';

import Button from '../modules/common/components/Button';
import Badge from '../modules/common/components/Badge';
import Icon from '../modules/common/components/Icon';

export default function UI(): JSX.Element {
  return (
    <div>
      <h1>UI page</h1>
      <div>
        <h2>Buttons</h2>
        <Button>Primary</Button>
        <Button theme="secondary">Secondary</Button>
        <Button theme="light">Light</Button>
        <Button theme="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div>
        <h2>Badge</h2>
        <Badge>Text</Badge>
        <Badge isNumber>12</Badge>
      </div>
      <div>
        <h2>Icons</h2>
        <Icon style={{ width: '25px', height: '12px' }} type="arrow-left" />
      </div>
    </div>
  );
}
