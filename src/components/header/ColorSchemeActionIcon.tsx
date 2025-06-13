import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { TbMoon, TbSun } from 'react-icons/tb';
import { useModKey } from '~/hooks/useModKey';
import classes from './ColorSchemeActionIcon.module.css';

export function ColorSchemeActionIcon() {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+J', toggleColorScheme]]);
  const modKey = useModKey();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      color="currentColor"
      variant="transparent"
      title={`Toggle color scheme (${modKey}+J)`}
    >
      <TbSun className={classes.sunIcon} size={22} strokeWidth={1.25} />
      <TbMoon className={classes.moonIcon} size={15} strokeWidth={1.5} />
    </ActionIcon>
  );
}
