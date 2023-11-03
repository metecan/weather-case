import type { FC } from 'react';

interface IconTextProps {
  children?: React.ReactNode;
  label: string;
}

const IconText: FC<IconTextProps> = ({ children, label }) => {
  return (
    <div className="text-[28px] flex items-center gap-2">
      <span className="flex items-center gap-2">{children}</span>
      <small className="text-sm opacity-70">{label}</small>
    </div>
  );
};
export default IconText;
