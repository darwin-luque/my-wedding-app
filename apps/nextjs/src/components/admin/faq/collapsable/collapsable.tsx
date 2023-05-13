import type { FC } from 'react';

export const AdminFaqCollapsable: FC = () => {
  return (
    <div
      tabIndex={0}
      className="collapse-arrow rounded-box collapse border border-base-300 bg-base-100"
    >
      <div className="collapse-title text-xl font-medium">
        Focus me to see content
      </div>
      <div className="collapse-content">
        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
      </div>
    </div>
  );
};
