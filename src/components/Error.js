import React from 'react';
import { useAuth } from '../hooks/auth';

function Error() {
  const { error } = useAuth();
  return (
    <div className="bg-teal-200 text-black w-[300px] rounded-sm text-sm text-center py-1">
      {error}
    </div>
  );
}

export default Error;
