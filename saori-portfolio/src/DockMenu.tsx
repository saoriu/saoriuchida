// DockMenu.tsx
import * as React from 'react';
import { Dock } from './Dock';
import { DockItem } from './DockItem';

interface DockMenuProps {
  items: {
    icon: React.ReactNode;
    label?: string;
    onClick?: () => void;
  }[];
}

export const DockMenu: React.FC<DockMenuProps> = ({ items }) => {
  return (
    <Dock>
        {items.map((item, index) => (
            <DockItem 
                key={index}
                icon={item.icon}
                label={item.label}
                onClick={item.onClick}
            />
        ))}
    </Dock>
  );
}
