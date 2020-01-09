import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  block: {
    marginTop: 56,
    marginBottom: 0
  }
}));

type Props = {
  language: string;
  value: string;
};

const CodeBlock: React.FC<Props> = ({ language, value }) => {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <SyntaxHighlighter language={language} style={prism}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
