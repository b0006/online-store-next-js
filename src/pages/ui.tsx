import React from 'react';

import Button from '../modules/common/components/Button';

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
    </div>
  );
}
