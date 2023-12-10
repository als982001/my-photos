export const SELECT = "SELECT";

export const handleSelectAlbumType = (key: string, value: boolean) => {
  return {
    type: SELECT,
    payload: {
      key,
      value,
    },
  };
};
