import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/cjs/styles/prism";

const useStyles = makeStyles(theme => ({
  body: {
    // padding: "2rem",
    lineHeight: 1.58,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: 18
    }
  },
  h1: {
    fontSize: 34,
    lineHeight: 1.12,
    marginTop: "1.95em",
    marginBottom: "-0.28em",
    fontWeight: 600
  },
  h2: {
    fontSize: 26,
    lineHeight: 1.18,
    marginTop: "1.72em",
    marginBottom: "-0.31em",
    fontWeight: 600
  },
  h3: {
    // TODO: ちゃんと設定する
    fontSize: 26,
    lineHeight: 1.18,
    marginBottom: 0,
    fontWeight: 600
  },
  firstParagraph: {
    marginTop: "0.86em",
    marginBottom: "-0.46em"
  },
  paragraph: {
    marginTop: "2em",
    marginBottom: "-0.46em"
  },
  list: {
    margin: 0
  },
  firstListItem: {
    marginTop: "0.86em",
    marginBottom: "-0.46em"
  },
  centerListItem: {
    marginTop: "2em",
    marginBottom: "-0.46em"
  },
  listItem: {
    marginTop: "1.05em",
    marginBottom: "-0.46em"
  },
  hr: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 14,
    border: "none",
    fontSize: 28,

    "&::before": {
      content: "'...'",
      lineHeight: 1.4,
      letterSpacing: "0.6em"
    }
  },
  blockquote: {
    boxShadow: "inset 3px 0 0 0 rgba(0, 0, 0, 0.84)",
    margin: "18px 18px 18px 0px"
  }
}));

type Props = {
  source: string;
};

const CodeBlock: React.FC<Props> = ({ source }) => {
  const classes = useStyles();

  let isFirstP = false;
  let isFirstListItem = true;

  const Heading = (props: any) => {
    const level = props.level;
    const tagName = `h${level}`;

    // NOTE: エラー回避のため雑: No index signature with a parameter of type 'string' was found on type 'Record<"title" | ...
    let className = classes.h1;
    switch (tagName) {
      case "h2":
        className = classes.h2;
        break;
      case "h3":
        className = classes.h3;
        break;
      default:
        break;
    }

    isFirstP = true;
    return React.createElement(tagName, { className }, props.children);
  };

  const Paragraph = (props: any) => {
    const tagName = "p";
    let className = classes.paragraph;
    if (isFirstP) {
      className = classes.firstParagraph;
    }

    isFirstP = false;
    return React.createElement(tagName, { className }, props.children);
  };

  const List = (props: any) => {
    const tagName = props.ordered ? "ol" : "ul";
    const className = classes.list;
    isFirstListItem = true;
    return React.createElement(tagName, { className }, props.children);
  };

  const ListItem = (props: any) => {
    const tagName = "li";
    let className = classes.listItem;

    if (isFirstListItem && isFirstP) {
      className = classes.firstListItem;
    }
    if (isFirstListItem && !isFirstP) {
      className = classes.centerListItem;
    }

    isFirstP = false;
    isFirstListItem = false;
    return React.createElement(tagName, { className }, props.children);
  };

  const CodeBlock = (props: any) => {
    isFirstP = false;
    return (
      <SyntaxHighlighter
        language={props.language}
        style={prism}
        customStyle={{ "marginTop": "56px", "marginBottom": "0px" }}
      >
        {props.value}
      </SyntaxHighlighter>
    );
  };

  const ThematicBreak = () => {
    isFirstP = false;
    return <hr className={classes.hr} />;
  };

  const Blockquote = (props: any) => {
    console.log("props", props.children)
    return <blockquote className={classes.blockquote}>{props.children}</blockquote>;
  };

  return (
    <ReactMarkdown
      className={classes.body}
      source={source}
      renderers={{
        heading: Heading,
        paragraph: Paragraph,
        list: List,
        listItem: ListItem,
        code: CodeBlock,
        thematicBreak: ThematicBreak,
        blockquote: Blockquote
      }}
    ></ReactMarkdown>
  );
};

export default CodeBlock;
