import React, { useEffect, useRef, useState } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  type?: string;
}

const Icon: React.FC<IconProps> = ({ type, ...rest }): JSX.Element | null => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);

  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        if (!type) {
          throw 'No svg type';
        }

        ImportedIconRef.current = (await import(`src/assets/icons/${type}.svg`)).default;
      } catch (err) {
        console.error(err);
        // throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [type]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return <ImportedIcon {...rest} />;
  }

  return null;
};

export default Icon;
