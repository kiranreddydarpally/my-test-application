import React from "react";

const Path = ({ path, currentPath }: { path: string; currentPath: string }) => {
  return (
    <main className="path">
      {path} <span className="my-posts">{currentPath} </span>
    </main>
  );
};

export default Path;
