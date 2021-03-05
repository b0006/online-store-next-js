import React from 'react';

import Button from '../modules/common/components/Button';
import Badge from '../modules/common/components/Badge';
import Icon from '../modules/common/components/Icon';
import Arrow from '../modules/common/components/Arrow';

const STYLE_SECTION = {
  margin: '0 20px',
  padding: '20px',
  border: '1px solid black',
};

export default function UI(): JSX.Element {
  return (
    <div>
      <h1>UI page</h1>
      <div style={STYLE_SECTION}>
        <h2>Buttons</h2>
        <Button>Primary</Button>
        <Button theme="secondary">Secondary</Button>
        <Button theme="light">Light</Button>
        <Button theme="outlined">Outlined</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div style={STYLE_SECTION}>
        <h2>Badge</h2>
        <Badge>Text</Badge>
        <Badge isNumber>12</Badge>
      </div>
      <div style={STYLE_SECTION}>
        <h2>Icons</h2>
        <Icon style={{ width: '25px', height: '12px' }} type="arrow-left" />
      </div>
      <div style={STYLE_SECTION}>
        <h2>Arrows</h2>
        <div>
          <span>default</span>
          <Arrow direction="left" theme="default" />
          <Arrow direction="right" theme="default" />
        </div>
        <div>
          <span>long</span>
          <Arrow direction="left" theme="long" />
          <Arrow direction="right" theme="long" />
        </div>
        <div>
          <span>transparent</span>
          <Arrow direction="left" theme="transparent" />
          <Arrow direction="right" theme="transparent" />
        </div>
        <div>
          <span>rounded</span>
          <Arrow direction="left" theme="rounded" />
          <Arrow direction="right" theme="rounded" />
        </div>
      </div>
    </div>
  );
}
