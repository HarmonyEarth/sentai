import React, { useState } from 'react';

const useFile = () => {
  const [data, setData] = useState(null);
  return { data };
};

export default useFile;
