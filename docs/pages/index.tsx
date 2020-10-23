import { useMemo, useRef, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";

const basePath = process.env.BASE_PATH.replace(/\/$/, "");

const Index: NextPage = () => {
  // create a canvas element that never gets reloaded
  const ref = useRef<HTMLCanvasElement>();
  const canvas = useMemo(
    () => <canvas ref={ref} width="720" height="480" />,
    []
  );

  // call window.initialize defined in index.js
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") {
      return;
    }
    window["initialize"](ref.current);
  }, [ref.current]);

  return (
    <>
      <Head>
        <title key="title">
          fabricjs-eraser | A lightweight pressure-sensitive brush
          implementation for Fabric.js
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
        div.canvas-wrapper {
          background: #f5f5f5;
          margin: 2em auto 0 auto;
          padding: 2em 0;
        }
        div.canvas-wrapper > div.canvas {
          text-align: center;
          overflow: hidden;
        }
        div.canvas-wrapper > div.canvas :global(.canvas-container) {
          margin: auto;
          border: 1px solid #eee;
          background: #fff;
        }
        footer {
          padding: 2em 0;
        }
      `}</style>
      <div className="hero">
        <div className="ui container">
          <h1 className="ui header">
            <div className="content">
              fabricjs-eraser
              <div className="sub header">
                A simple eraser implementation for
                Fabric.js
              </div>
            </div>
          </h1>
        </div>
      </div>
      <div className="main content">
        <div className="ui container">
          <div className="ui message">
            <div className="header">How to install</div>
            <pre>npm i @arch-inc/fabricjs-eraser</pre>
            <p>
              For more details on how to use this library, please refer to the
              following documents.
            </p>
          </div>
          <div className="ui selection divided list">
            <a
              className="item"
              href="https://www.npmjs.com/package/@arch-inc/fabricjs-eraser"
            >
              <i className="npm icon"></i>
              <div className="content">
                <div className="header">NPM package registry</div>
                <div className="description">@arch-inc/fabricjs-eraser</div>
              </div>
            </a>
            <a
              className="item"
              href="https://github.com/arch-inc/fabricjs-eraser"
            >
              <i className="github icon"></i>
              <div className="content">
                <div className="header">GitHub repository</div>
                <div className="description">@arch-inc/fabricjs-eraser</div>
              </div>
            </a>
            <a
              className="item"
              href="https://arch-inc.github.io/fabricjs-eraser/api/globals.html"
            >
              <i className="file alternate outline icon"></i>
              <div className="content">
                <div className="header">API document</div>
                <div className="description">
                  automatically generated with TypeDoc
                </div>
              </div>
            </a>
            <a
              className="item"
              href="https://arch-inc.github.io/fabricjs-eraser/index.js"
            >
              <i className="file code outline icon"></i>
              <div className="content">
                <div className="header">index.js</div>
                <div className="description">
                  example code loaded in this page
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="canvas-wrapper">
          <div className="ui container">
            <h3 className="ui header">Live demo</h3>
            <p>
              Draw anything on the white blank canvas shown below; tested on
              iPad Pro and Surface Go.
            </p>
            <div className="ui divider"></div>
          </div>
          <div className="ui basic segment center aligned">
            <div className="ui horizontal list">
              <div className="item"><button id="brush" className="ui primary button"><i className="paint brush icon" />brush</button></div>
              <div className="item"><button id="eraser" className="ui button"><i className="eraser icon" />eraser</button></div>
              <div className="item"><button id="undo" className="ui button" disabled={true}><i className="undo icon" />undo last erase</button></div>
            </div>
          </div>
          <div className="canvas">{canvas}</div>
        </div>
      </div>
      <footer>
        <div className="ui container">
          <div className="ui horizontal divided list">
            <div className="item">
              &copy; <a href="//research.archinc.jp">Arch Inc.</a> 2020
            </div>
            <div className="item">
              <a href="https://github.com/arch-inc/fabricjs-eraser">
                <i className="github icon" /> arch-inc/fabricjs-eraser
              </a>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-psbrush@0.0.15/dist/index.js"></script>
      <script src={`${basePath}/lib.js`}></script>
      <script src={`${basePath}/index.js`}></script>
    </>
  );
};

export default Index;
