export const getSectionColor = (id) => {
  const idArr = id.split('-');
  ///preserving in separate sections for now in case I need more granular control
  if (idArr[0] < 3 && idArr[1] < 3) return 'section-1';
  if (idArr[0] < 3 && idArr[1] < 6) return 'section-2';
  if (idArr[0] < 3 && idArr[1] < 9) return 'section-3';
  if (idArr[0] < 6 && idArr[1] < 3) return 'section-4';
  if (idArr[0] < 6 && idArr[1] < 6) return 'section-5';
  if (idArr[0] < 6 && idArr[1] < 9) return 'section-6';
  if (idArr[0] < 9 && idArr[1] < 3) return 'section-7';
  if (idArr[0] < 9 && idArr[1] < 6) return 'section-8';
  if (idArr[0] < 9 && idArr[1] < 9) return 'section-9';
};
