import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useTheme } from 'native-base';
import React, { useEffect, useState } from 'react';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

type UtilFontAwesomeProps = {
  icon: IconProp;
  color?: string;
  size?: number;
};

function UtilFontAwesome({ icon, color, size = 16 }: UtilFontAwesomeProps) {
  const theme = useTheme();

  const [colorFormatted, setColorFormatted] = useState<string>('gray');

  const themeColors = theme.colors as any;

  useEffect(() => {
    if (color) {
      const [themeColor, shade] = color.split('.');
      const shadeFormatted = shade ? shade : 500;

      if (color.startsWith('#')) {
        setColorFormatted(color);
      } else if (color === 'white' || color === 'black') {
        setColorFormatted(color);
      } else {
        setColorFormatted(themeColors[themeColor][shadeFormatted]);
      }
    }
  }, [color]);

  return (
    <>
      <FontAwesomeIcon icon={icon} color={colorFormatted} size={size} />
    </>
  );
}

export default UtilFontAwesome;
