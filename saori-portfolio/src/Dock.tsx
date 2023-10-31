// Dock.tsx
import * as React from 'react';
import { animated, useSpringValue } from '@react-spring/web';
import { useWindowResize } from '../hooks/useWindowResize';
import { DockContext } from './DockContext';
import styles from './styles.module.scss';

interface DockProps {
  children: React.ReactNode
}

export const DOCK_ZOOM_LIMIT = [-100, 50];

export const Dock: React.FC<DockProps> = ({ children }) => {
  // ... (rest of the Dock component code as you provided)
}
