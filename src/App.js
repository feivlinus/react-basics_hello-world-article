import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World</h1>
      <p>
        this is rendered with <strong>React</strong>
      </p>
    </article>
  );
}
