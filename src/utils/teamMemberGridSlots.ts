interface Props<T> {
  arrayData: T[] | undefined;
}

export const teamMemberGridSlots = <T>({ arrayData }: Props<T>) => {
  let grid1Members;
  let grid2Members;

  const grid1 = {
    xs: 0,
  };
  const grid2 = {
    xs: 0,
  };

  if (!arrayData) {
    return;
  }

  switch (arrayData.length) {
    case 4:
      grid1.xs = 6;
      grid1Members = arrayData;
      break;
    case 5:
      grid1.xs = 4;
      grid2.xs = 6;
      grid1Members = arrayData.slice(0, 3);
      grid2Members = arrayData.slice(3, 5);
      break;
    case 6:
      grid1.xs = 4;
      grid1Members = arrayData;
      break;
    case 7:
      grid1.xs = 4;
      grid2.xs = 3;
      grid1Members = arrayData.slice(0, 3);
      grid2Members = arrayData.slice(3, 7);
      break;
    default:
      break;
  }

  return {
    grid1,
    grid1Members,
    grid2,
    grid2Members,
  };
};
