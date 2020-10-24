### fabricjs-layer

[![build](https://github.com/arch-inc/fabricjs-layer/workflows/npm-publish/badge.svg)](https://github.com/arch-inc/fabricjs-layer/actions?query=workflow%3Anpm-publish)
[![npm version](https://img.shields.io/npm/v/@arch-inc/fabricjs-layer)](https://www.npmjs.com/package/@arch-inc/fabricjs-layer)

**fabricjs-layer** is a simple layer implementation for Fabric.js v3.x and v4.x.

**fabricjs-layer** は Fabric.js  v3.x および v4.x 用のシンプルな消しゴムの実装です。

- ~~npm package: https://www.npmjs.com/package/@arch-inc/fabricjs-layer~~
- API document: https://arch-inc.github.io/fabricjs-layer/api/globals.html
- Demo site: https://arch-inc.github.io/fabricjs-layer/

### Usage / 使い方

```html
<canvas id="main" width="720" height="480"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-psbrush@latest/dist/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-layer@latest/dist/index.js"></script>
<script>

  // Create a Fabric.js canvas
  let canvas = new fabric.Canvas(document.getElementById("main"), {
    isDrawingMode: true,
    enablePointerEvents: true
  });

  // Initialize a brush
  let brush = new fabric.EraserBrush(canvas, { Simplify: psbrush.Simplify });
  brush.width = 10;
  canvas.freeDrawingBrush = brush;

</script>
```

If you use `Webpack` or other similar solutions, simply install the npm package and start using it.

TypeScript definitions are available by default. (e.g., [PSBrush.d.ts](https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-layer@latest/dist/PSBrush.d.ts))

`Webpack` 等を使っている場合は `npm install` でインストールできます。TypeScriptの型定義がついてきます。

```sh
npm i @arch-inc/fabricjs-layer
```

```javascript
import { PSBrush } from "@arch-inc/fabricjs-layer"
```

### API Documentation / APIドキュメント

All of the exported classes and interfaces are listed in [TypeDoc](https://arch-inc.github.io/fabricjs-layer/api/globals.html).

For instance, `PSBrush` can be constructed by [`new PSBrush(canvas)`](https://arch-inc.github.io/fabricjs-layer/api/globals.html#layer) and its instance has [various properties](https://arch-inc.github.io/fabricjs-layer/api/interfaces/layeriface.html) including `color`, `opacity`, `width`, `simplifyTolerance`, `pressureCoeff` etc. Use of these properties can be observed in [Griffith Sketch](https://gs.archinc.jp/), a web-based lightweight tool for sketching ideas.

Please note that `PSBrush` and `PSStroke` classes are listed as variables and their fields are defined separately as `PSBrushIface` and `PSStrokeIface`. This is because Fabric.js requires all relevant classes to be defined through its `fabric.util.createClass` helper function.

このモジュールが export しているすべてのクラスとインタフェースは [TypeDoc](https://arch-inc.github.io/fabricjs-layer/api/globals.html) で閲覧できます。

例えば `PSBrush` クラスは [`new PSBrush(canvas)`](https://arch-inc.github.io/fabricjs-layer/api/globals.html#layer) でインスタンス化でき、 [さまざまなプロパティ](https://arch-inc.github.io/fabricjs-layer/api/interfaces/layeriface.html) （`color`, `opacity`, `width`, `simplifyTolerance`, `pressureCoeff` など）を持っています。これらのプロパティの実際の利用例は、アイデアスケッチ作成用のWebサービス [Griffith Sketch](https://gs.archinc.jp/) で確認できます。

なお、 `PSBrush` と `PSStroke` は実際にはクラスですが変数 (Variables) としてリストアップされ、メンバー変数は `PSBrushIface` と `PSStrokeIface` という別のインタフェースで定義されています。これは Fabric.js 本体がクラス定義を `fabric.util.createClass` というヘルパー関数で行うように実装されているためです。

### Credits / 開発者

- [Jun Kato](https://junkato.jp), core algorithm developer
- [Kenta Hara](https://twitter.com/mactkg), developer
- [And all the other GitHub contributors in the original Fabric.js implementation](https://github.com/fabricjs/fabric.js/graphs/contributors)

### Dependencies / 依存パッケージ

Except for the dependency for Fabric.js, this library contains a TypeScript port of [Simplify.js](https://mourner.github.io/simplify-js/), a high-performance JS polyline simplification library.

Fabric.js の他にパス単純化のためのライブラリ [Simplify.js](https://mourner.github.io/simplify-js/) をTypeScriptで書き直して利用しています。

### Staying in touch / 開発者に連絡

We have developed this extension in collaboration with the core developers of Fabric.js and relevant information can be found in their issue tracker.

Twitter [@ArchResearchJp](https://twitter.com/ArchResearchJp) で連絡がつきます。 Fabric.js 本家の issue でも活動しています。

- [Pressure support for styluses? #4885
](https://github.com/fabricjs/fabric.js/issues/4885)

### Library in action / 利用例

- [Demo site](https://arch-inc.github.io/fabricjs-layer/): GitHub Pages accompanied with this library
- [Griffith Sketch](https://gs.archinc.jp/): a web-based lightweight tool for sketching ideas.

---
Copyright (c) 2020 Arch Inc. (Jun Kato, Kenta Hara)