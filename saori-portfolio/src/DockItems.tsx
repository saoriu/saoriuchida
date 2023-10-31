// DockItem.tsx
import * as React from 'react';
import { animated } from '@react-spring/web';
import { useDock } from './DockContext';
import styles from './styles.module.scss';

interface DockItemProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export const DockItem: React.FC<DockItemProps> = ({ icon, label, onClick }) => {
  const { hovered } = useDock();

  return (
    <animated.div 
        className={styles.dockItem}
        onClick={onClick}
        style={{
            transform: hovered ? 'scale(1.2)' : 'scale(1)'
        }}>
        {icon}
        {label && <span className={styles.label}>{label}</span>}
    </animated.div>
  );
}
