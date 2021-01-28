import { NextPage } from "next";
import Head from "next/head";
import { DemoAppWrapper } from "../components/DemoAppWrapper";

// const basePath = process.env.BASE_PATH.replace(/\/$/, "");

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title key="title">
          fabricjs-layer | A lightweight pressure-sensitive brush implementation
          for Fabric.js
        </title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.4/dist/semantic.min.css"
        ></link>
      </Head>
      <style jsx>{`
        :global(html, body) {
          background: #eee;
        }
        div.hero {
          padding: 3em 0;
        }
        div.main.content {
          background: #fff;
          padding: 2em 0 0 0;
        }
        footer {
          padding: 2em 0;
        }
      `}</style>
      <div className="hero">
        <div className="ui container">
          <h1 className="ui header">
            <div className="content">
              fabricjs-layer
              <div className="sub header">
                A simple layer implementation for Fabric.js
              </div>
            </div>
          </h1>
        </div>
      </div>
      <div className="main content">
        <div className="ui container">
          <div className="ui message">
            <div className="header">How to install</div>
            <pre>npm i @arch-inc/fabricjs-layer</pre>
            <p>
              For more details on how to use this library, please refer to the
              following documents.
            </p>
          </div>
          <div className="ui selection divided list">
            <a
              className="item"
              href="https://github.com/arch-inc/fabricjs-layer/packages/"
            >
              <i className="npm icon"></i>
              <div className="content">
                <div className="header">GitHub package registry</div>
                <div className="description">@arch-inc/fabricjs-layer</div>
              </div>
            </a>
            <a
              className="item"
              href="https://github.com/arch-inc/fabricjs-layer"
            >
              <i className="github icon"></i>
              <div className="content">
                <div className="header">GitHub repository</div>
                <div className="description">@arch-inc/fabricjs-layer</div>
              </div>
            </a>
            <a
              className="item"
              href="https://arch-inc.github.io/fabricjs-layer/api/globals.html"
            >
              <i className="file alternate outline icon"></i>
              <div className="content">
                <div className="header">API document</div>
                <div className="description">
                  automatically generated with TypeDoc
                </div>
              </div>
            </a>
          </div>
        </div>
        <DemoAppWrapper />
      </div>
      <footer>
        <div className="ui container">
          <div className="ui horizontal divided list">
            <div className="item">
              &copy; <a href="//research.archinc.jp">Arch Inc.</a> 2021
            </div>
            <div className="item">
              <a href="https://github.com/arch-inc/fabricjs-layer">
                <i className="github icon" /> arch-inc/fabricjs-layer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Index;
