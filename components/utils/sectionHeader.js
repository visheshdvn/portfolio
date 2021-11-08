import React from "react";

const SectionHeader = ({ word1, word2, theme }) => {
  return (
    <header
      style={{ fontSize: "160px", lineHeight: "1.18" }}
      className="font-primary"
    >
      <h1>
        <span className={theme}>{word1.slice(0, 1)}</span>
        {word1.slice(1)}
        {!word2 && "."}
      </h1>
      {word2 && <h1>{word2}.</h1>}
    </header>
  );
};

export default SectionHeader;
