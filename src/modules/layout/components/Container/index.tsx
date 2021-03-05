import React from 'react';
import { Container as GridContainer, ContainerProps } from 'react-grid-system';

const Container = React.forwardRef(({ children, ...rest }: ContainerProps, ref: React.LegacyRef<never>) => (
  <GridContainer {...rest} ref={ref} style={{ width: '100%' }}>
    {children}
  </GridContainer>
));

Container.displayName = 'Container';

export default Container;
