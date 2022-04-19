import { FC } from 'react';

interface DividerProps {
  colorHex: string;
}

const Divider: FC<DividerProps> = ({ colorHex }) => {
  return <div style={{ borderBottom: `1px solid ${colorHex}` }}></div>;
};

export default Divider;
