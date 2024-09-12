// types/toggle-beautify.d.ts
declare module 'toggle-beautify' {
  import { FC } from 'react';

  interface ToggleBeautyProps {
    isSelected: boolean;
   
  }

  const ToggleBeauty: FC<ToggleBeautyProps>;

  export default ToggleBeauty;
}
