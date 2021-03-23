import React from 'react';

import Container from '../modules/layout/components/Container';
import Button from '../modules/common/components/Button';
import Badge from '../modules/common/components/Badge';
import SvgIcon from '../modules/common/components/SvgIcon';
import Arrow from '../modules/common/components/Arrow';
import Breadcrumbs from '../modules/common/components/Breadcrumbs';
import CircleClose from '../modules/common/components/CircleClose';
import Input from '../modules/common/components/Input';

const STYLE_SECTION = {
  margin: '10px 0',
  padding: '20px',
  border: '1px solid black',
};

export default function UI(): JSX.Element {
  const [inputText, setInputText] = React.useState('');

  return (
    <Container>
      <div style={STYLE_SECTION}>
        <h2>Input</h2>
        <Input placeholder="Label" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <h2>Input required</h2>
        <Input required placeholder="Label" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <h2>Input with icon</h2>
        <Input icon="resting" placeholder="Label" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <h2>Input with error</h2>
        <Input
          placeholder="Label"
          error="Error message"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
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
        <SvgIcon style={{ width: '25px', height: '12px' }} kind="arrow-left" />
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
      <div style={STYLE_SECTION}>
        <h2>Breadcrumbs</h2>
        <Breadcrumbs
          links={[
            { href: '/', label: 'Home' },
            { href: '/test', label: 'Test' },
            { href: '/ui', label: 'UI' },
          ]}
        />
      </div>
      <div style={STYLE_SECTION}>
        <h2>CircleClose Big</h2>
        <CircleClose size="big" />
        <h2>CircleClose Big with badge</h2>
        <CircleClose size="big" data-count="12" />
        <h2>CircleClose Small</h2>
        <CircleClose size="small" />
        <h2>CircleClose disable</h2>
        <CircleClose disabled />
      </div>
    </Container>
  );
}
