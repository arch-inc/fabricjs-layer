### fabricjs-layer

[![build](https://github.com/arch-inc/fabricjs-layer/workflows/npm-publish-gpr/badge.svg)](https://github.com/arch-inc/fabricjs-layer/actions?query=workflow%3Anpm-publish-gpr)
[![npm version](https://img.shields.io/npm/v/@arch-inc/fabricjs-layer)](https://www.npmjs.com/package/@arch-inc/fabricjs-layer)

**fabricjs-layer** is a simple layer implementation for Fabric.js v3.x and v4.x.

**fabricjs-layer** は Fabric.js v3.x および v4.x 用のシンプルなレイヤー実装です。

- npm package: https://www.npmjs.com/package/@arch-inc/fabricjs-layer
- API document: https://arch-inc.github.io/fabricjs-layer/api/globals.html
- Demo site: https://arch-inc.github.io/fabricjs-layer/

### Usage / 使い方

```html
<canvas id="main" width="720" height="480"></canvas>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sortedindex@latest/dist/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-layer@latest/dist/index.js"></script>
<script>
  // Create a Fabric.js canvas
  let canvas = new fabric.Canvas(document.getElementById("main"), {
    isDrawingMode: true
  });

  // Create layer manager
  let manager = new fabricLayer.LayerManager(canvas);

  // Add layers
  for (let i = 0; i++; i < 5) {
    manager.addLayer();
  }

  // Set active layer
  manager.activeLayer = manager.getLayer(3);

  // Remove layer
  manager.removeLayer(manager.getLayer(2));

  // Move layer
  manager.moveLayer(manager.activeLayerIndex, manager.activeLayerIndex + 1);

  // Dispose layer manager
  manager.dispose();
</script>
```

If you use `Webpack` or other similar solutions, simply install the npm package and start using it.

TypeScript definitions are available by default. (e.g., [Layer.d.ts](https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-layer@latest/dist/Layer.d.ts))

`Webpack` 等を使っている場合は `npm install` でインストールできます。TypeScript の型定義がついてきます。

```sh
npm i @arch-inc/fabricjs-layer
```

```javascript
import { LayerGroup } from "@arch-inc/fabricjs-layer";
```

### API Documentation / API ドキュメント

All of the exported classes and interfaces are listed in [TypeDoc](https://arch-inc.github.io/fabricjs-layer/api/globals.html).

このモジュールが export しているすべてのクラスとインタフェースは [TypeDoc](https://arch-inc.github.io/fabricjs-layer/api/globals.html) で閲覧できます。

### Credits / 開発者

- [Jun Kato](https://junkato.jp), developer

### Staying in touch / 開発者に連絡

- Twitter: [@ArchResearchJp](https://twitter.com/ArchResearchJp)
- Website: https://research.archinc.jp/en (日本語: https://research.archinc.jp)

### Library in action / 利用例

- [Demo site](https://arch-inc.github.io/fabricjs-layer/): GitHub Pages accompanied with this library

---

Copyright (c) 2021 Arch Inc. (Jun Kato)
