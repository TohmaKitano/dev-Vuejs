# README
Let's study & enjoy Vue.js

## Chapter 1

- フレームワーク<br>
アプリケーションを設計するための骨組みのことで、基本的な機能やルールを備えている。

- Vue.js のコンセプト<br>
データ駆動。データを中心としたアプリケーション設計のこと。<br>
具体的には、画面を描画する構造の本体は、DOMではなくJavaScriptのデータとなる。

- データバインディング<br>
データと描画を同期させる仕組みのこと。<br>
ex) v-if, v-bind, key, ...<br>

```
v-bind:value.sync = "message"
```

・v-bind => ディレクティブ<br>
・:value => 引数<br>
・.sync => 修飾子<br>
・"message" => 値

- リアクティブデータ<br>
Vue.js が取得したとき(get)と代入したとき(set)のフック処理が登録されたデータのこと。<br>
Vue.js 自体が実行する様々な処理の仕組みをリアクティブシステムという。

- ディレクティブ<br>
テンプレートとロジックを関連づける機能のこと。

- マウント(mount)<br>
配置する要素とアプリケーションを紐づけること。

- コンポーネント<br>
機能ごとにJavaScriptとテンプレートを1つのセットにして、他の機能とは分離して開発できるようにする仕組みのこと。

- インスタンスの生成

```
var app = new Vue({
  // オプション
})
```

※Vue => コンストラクタ関数

- ライフサイクルフック<br>
あらかじめ登録した処理を、Vueインスタンスの特定のタイミングで自動的に呼び出す仕組みのこと。


## Chapter 2

### テキストへのデータバインディング

#### マスタッシュ記法
テキストコンテンツをデータバインディングするための記法のこと。<br>
属性には使用することができない。

```
<div id="app">
  <p>{{ message }}</p>
</div>

var app = new Vue({
  el: 'app',
  data: {
    message: 'Hello, Vue.js!'
  }
})

// => Hello, Vue.js!
```

{{ message }} は、dataのmessageプロパティと常に同期する。

```
<div id="app">
  <input type="text" value="{{ message }}">
  <input type="text" v-bind:value="message.value">
  <input type="text" :value="message.value">
</div>

var app = new Vue({
  el: 'app',
  data: {
    message: 'Hello, Vue.js!'
  }
})

// => Error
// => Hello, Vue.js!
// => Hello, Vue.js!
```

属性にマスタッシュ記法を使う場合、v-bindディレクティブを使う。


### this が何を指すのか

```
methods: {
  increment: function() {
    // インスタンスのthisを参照
    this.count += 1
  }

  increment: () => {
    // アロー関数はインスタンスのthisを参照できない
    this.count += 1
  }
  // メソッドの外側部分のスコープがthisとなってしまう

  // 省略する場合の書き方
  increment() {
    // インスタンスのthisを参照
    this.count += 1
  }
}
```

### クラスへのデータバインディング

```
<p v-bind:class="{ child: isChild, 'is-active': isActive }">Text</p>

data: {
  isChild: true,
  isActive: true
}

// =>
<p class="child is-active">Text</p>

// 三項演算子を使う場合(非推奨)
<p v-bind:class="[isActive ? 'active' : 'normal', otherClass]">Text</p>

// =>
<p class="active">Text</p>
```

### スタイルへのデータバインディング

```
<p v-bind:style="{ color: textColor, backgroundColor: bgColor }">Text</p>

data: {
  textColor: 'red',
  bgColor: 'lightgray'
}

// =>
<p style="color: red; background-color: lightgray;">Text</p>
```

- クラスやスタイルは、オブジェクトデータを渡すとスマート

```
<p v-bind:class="classObjext">Text</p>
<p v-bind:style="styleObject">Text</p>

data: {
  classObjext: {
    child: true,
    'is-active': true
  },
  styleObject: {
    color: 'red',
    backgroundColor: 'lightgray'
  }
}

// =>
<p class="child is-active">Text</p>
<p style="color: red; background-color: lightgray;">Text</p>
```

### 複数のデータへのデータバインディング

```
<img v-bind="item">
<img v-bind="item" v-bind:id="'thumb-' + item.id">

data: {
  item: {
    id: 1,
    src: 'item1.jpg',
    alt: '商品1サムネイル',
    width: 200,
    height: 200
  }
}

// =>
<img id="1" src="item1.jpg" alt="商品1サムネイル" width="200" height="200">
<img id="thumb-1" src="item1.jpg" alt="商品1サムネイル" width="200" height="200">
```

### SVGデータへのデータバインディング

```
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="100" cy="75" v-bind:r="radius" fill="lightpink" />
</svg>
<input type="range" min="0" max="100" v-model="radius">
```

### 条件分岐(if文)
v-ifでは要素はDOMレベルで削除される。v-showでは要素はスタイル(display: none;)で隠蔽される。

```
<div v-if="ok">v-if条件による描画</div>
<div v-show="ok">v-show条件による描画</div>

data: {
  ok: true // or false
}
```

- templateタグでv-ifをグループ化

```
<template v-if="ok">
  <header>タイトル</header>
  <div>コンテンツ</div>
</template>

data: {
  ok: true // or false
}
```

- v-if, v-else-if, v-elseでグループ化

```
<div v-if="type === 'A'">
  type は A
</div>
<div v-else-if="type === 'B'">
  type は B
</div>
<div v-else>
  タイプはありません。
</div>

data: {
  ok: true // or false
}
```
- v-ifのグループ内で同じ要素を使用する場合、ユニークなkeyを付与しエスケイプする

```
<div v-if="loaded" key="content-visible">
  content
</div>
<div v-else key="content-loading">
  loading now...
</div>

data: {
  loaded: true // or false
}
```

### 繰り返し処理(for文)

- リストデータはオブジェクトを要素とした配列にする

```
data: {
  list: [
    { id:1, name: 'スライム', hp: 100 },
    { id:2, name: 'ゴブリン', hp: 200 },
    { id:3, name: 'ドラゴン', hp: 500 }
  ]
}
```
- リストデータのデータバインディング
繰り返し描画させたいタグに対して、v-forディレクティブを使用する。<br>
要素の識別と効率的な描画処理のために要素にはユニークなIDを指定する。ただし、同じ親要素内でキーの重複はできない。

```
<div id="app">
  <ul>
    <li v-for="item in list" v-bind:key="item.id">
      ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
    </li>
    </ul>
</div>

data: {
  list: [
    { id:1, name: 'スライム', hp: 100 },
    { id:2, name: 'ゴブリン', hp: 200 },
    { id:3, name: 'ドラゴン', hp: 500 }
  ]
}

// =>
<ul>
  <li>ID.1 スライム HP.100</li>
  <li>ID.2 ゴブリン HP.200</li>
  <li>ID.3 ドラゴン HP.500</li>
</ul>
```





```

```

```

```

```

```

```

```

```

```

```

```

```

```

```

```