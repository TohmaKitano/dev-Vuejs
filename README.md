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

### クラスやスタイルは、オブジェクトデータを渡すとスマート

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

### if文とfor文
v-ifディレクティブの条件に合致しないものは、コメントアウトを出力する。

```
<ul>
  <li v-for="item in list"
      v-bind:key="item.id"
      v-bind:class="{ tsuyoi: item.hp > 300 }">
    ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
    <span v-if="item.hp > 300">つよい！</span>
  </li>
</ul>

// =>
<ul>
  <li class="">ID.1 スライム HP.100<!----></li>
  <li class="">ID.2 ゴブリン HP.200<!----></li>
  <li class="tsuyoi">ID.3 ドラゴン HP.500<span>つよい！</span></li>
</ul>
```

- for文に直接if文を記述する場合

```
<ul>
  <li v-for="item in list"
      v-bind:key="item.id"
      v-if="item.hp > 300">
    ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
  </li>
</ul>

// =>
<ul>
  <!---->
  <!---->
  <li>ID.3 ドラゴン HP.500</li>
</ul>
```

### メソッドとfor文
- v-modelディレクティブを使って、listプロパティに新しい要素を追加

```
名前 <input v-model="name">
<button v-on:click="doAdd">モンスターを追加</button>
<ul>
  <li v-for="item in list" v-bind:key="item.id">
    ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
  </li>
</ul>

var app = new Vue({
  el: "#app",
  data: {
    // 初期値
    name: 'キマイラ',
    list: [
      { id:1, name: 'スライム', hp: 100 },
      { id:2, name: 'ゴブリン', hp: 200 },
      { id:3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    doAdd: function() {
      // リスト内で一番大きいIDを取得する
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // リストに追加
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    }
  }
})

// =>
<ul>
  <li id="1">
    ID.1 スライム HP.100
  </li>
  <li id="2">
    ID.2 ゴブリン HP.200
  </li>
  <li id="3">
    ID.3 ドラゴン HP.500
  </li>
  <li id="4">
    ID.4 キマイラ HP.500
  </li>
</ul>
```

- listプロパティから要素を削除

```
名前 <input v-model="name">
<button v-on:click="doAdd">モンスターを追加</button>
<ul>
  <li v-for="(item, index) in list" v-bind:key="item.id">
    ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
    <!-- for文の中にボタンを作成 -->
    <button v-on:click="doRemove(index)">モンスターを削除</button>
  </li>
</ul>

var app = new Vue({
  el: "#app",
  data: {
    // 初期値
    name: 'キマイラ',
    list: [
      { id:1, name: 'スライム', hp: 100 },
      { id:2, name: 'ゴブリン', hp: 200 },
      { id:3, name: 'ドラゴン', hp: 500 }
    ]
  },
  methods: {
    doAdd: function() {
      // リスト内で一番大きいIDを取得する
      var max = this.list.reduce(function(a, b) {
        return a > b.id ? a : b.id
      }, 0)
      // リストに追加
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500
      })
    },
    doRemove: function(index) {
      // インデックスの位置から要素を1個削除
      this.list.splice(index, 1)
    }
  }
})

// =>
<ul>
  <li>
    ID.1 スライム HP.100
    <button>モンスターを削除</button>
  </li>
  <li>
    ID.2 ゴブリン HP.200
    <button>モンスターを削除</button>
  </li>
  <li>
    ID.3 ドラゴン HP.500
    <button>モンスターを削除</button>
  </li>
</ul>
```

#### 配列メソッド
- push<br>
配列の末尾に要素を追加する
- pop<br>
配列の末尾の要素を削除する
- shift<br>
配列の末尾に要素を追加する
- unshift<br>
配列の先頭に要素を削除する
- splice<br>
配列の指定位置から要素を取り出し、要素を追加する
- sort<br>
配列を比較関数にしたがってソートする
- reverse<br>
配列の並び順を逆にする

- listプロパティを追加する
this.$set メソッドでリアクティブデータにプロパティを追加する。

```
this.$set(更新するデータ, インデックス or キー, 新しい値)

// =>
this.$this(this.list, 0, { id: 1, name: 'キングスライム', hp: 500 })
```

```
data: {
  ~
  created: function() {
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this)
  }
}
```

- listプロパティを更新する

```
<span v-if="item.hp < 50">瀕死！</span>
<button v-on:click="doAttack(index)">攻撃する</button>

methods: {
  ~
  doAttack: function(index) {
    this.list[index].hp -= 10
  }
}
```

- listそのものを更新する
filterメソッドでlistデータそのものを更新する

```
this.list = this.list.filter(function(el) {
  return el >= 100
})
```

- ユニークキーを持たないv-forディレクティブ

```
<select>
  <option v-for="item in list">{{ item }}</option>
</select>

data: {
  list: [
    'スライム', 'ゴブリン', 'ドラゴン'
  ]
}

// =>
<select>
  <option>スライム</option>
  <option>ゴブリン</option>
  <option>ドラゴン</option>
</select>
```

- オプションにデータを持たないv-forディレクティブ

```
<span v-for="item in 15">{{ item }}</span>
<span v-for="item in [1, 5, 10, 15]">{{ item }}</span>

// =>
<span>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>5</span>
<span>6</span>
<span>7</span>
<span>8</span>
<span>9</span>
<span>10</span>
<span>11</span>
<span>12</span>
<span>13</span>
<span>14</span>
<span>15</span>

<span>1</span>
<span>5</span>
<span>10</span>
<span>15</span>
```

- 文字列に対するv-forディレクティブ

```
<span v-for="item in text">{{ item }}</span>

<span>H</span>
<span>e</span>
<span>l</span>
<span>l</span>
<span>o</span>
```

### 外部からデータを取得する(JSON, WebAPI)

```
<div id="app">
  <ul>
    <li v-for="(item, index) in list" v-bind:key="item.id">
      ID.{{ item.id }} {{ item.name }} HP.{{ item.hp }}
    </li>
  </ul>
</div>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

var app = new Vue({
  el: '#app',
  data: {
    // 空配列をセットしておく
    list: []
  },
  // ローカルで動かす場合は、ローカルサーバーを立てる
  created: function() {
    axios.get('list.json').then(function(response) {
      this.list = response.data
      console.log(response.data)
    }.bind(this)).catch(function(e) {
      console.log(e)
    })
  }
})
```

- 簡易的なローカルサーバー

```
$ npm install -g live-server
$ cd ルートディレクトリ
$ live-server .
```

### DOMに直接アクセスする
DOMにアクセスするためにはインスタンスプロパティ$el, $refsを使用する。

- $el ルート要素へアクセスする

```
<div id="app"></div>

var app = new Vue({
  el: '#app',
  mounted: function() {
    console.log(this.$el)
  }
})

// =>
<div id="app"></div>
```

- $refs ルート以外の要素へアクセスする

```
<div id="app">
  <p ref="hello">Hello, World!</p>
</div>

var app = new Vue({
  el: '#app',
  mounted: function() {
    console.log(this.$refs.hello)
  }
})

// =>
<p>Hello, World!</p>
```

- $el, $refsは一時的な変更
$el, $refsによるDOMの操作が仮想DOMによって上書きされる点に注意する。

```
<div id="app">
  <button v-on:click="handClick">カウントアップ</button>
  <button v-on:click="show=!show">表示/非表示</button>
  <span ref="count" v-if="show">0</span>
</div>

var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    handClick: function() {
      var count = this.$refs.count
      if (count) {
        // parseInt 文字列型を数値型に変換する
        count.innerText = parseInt(count.innerText, 10) + 1
      }
    }
  }
})
```

### テンプレートを制御するディレクティブ

- v-pre HTMLコンパイルをスキップ

```
<a v-bind:href="url" v-pre>Hello {{ message }}</a>

data: {
  url: 'https://www.google.com/',
  message: 'Vue.js!'
}

// =>
<a v-bind:href="url" v-pre="">Hello {{ message }}</a>
```

- v-once 一度だけバインディングを行い以降はスキップ

```
<a v-bind:href="url" v-once>Hello {{ message }}</a>

data: {
  url: 'https://www.google.com/',
  message: 'Vue.js!'
}

// =>
<a href="https://www.google.com/">Hello Vue.js!</a>
```

- v-text マスタッシュの代わりにテキストコンテンツをバインディング

```
<span v-text="message"></span>

data: {
  message: 'Hello Vue.js!'
}

// =>
<span>Hello Vue.js!</span>
```

- v-html HTMLをバインディング
XSS脆弱性を引き起こすため、信頼できるテンプレートのみに使用する。

```
<span v-html="message"></span>

data: {
  message: 'Hello <strong>Vue.js</strong>'
}

// =>
<span>Hello <strong>Vue.js</strong></span>
```

- v-cloak インスタンスの準備が終わると取り除かれる。スタイルも同時に定義して使用する。

```
<div id="app" v-cloak>
  {{ message }}
</div>

[v-cloak] {
  display: none;
}
@keyframes cloak-in {
  0% {
    opacity: 0;
  }
}
#app {
  animation: cloak-in 1s;
}
#app[v-cloak] {
  opacity: 0;
}

data: {
  message: 'Hello Vue.js!'
}
```


## Chapter 3

### イベントハンドラ
JavaScriptのaddEventListennerメソッドは、Vue.jsではv-onディテクティブを使用する。jQueryでは$(element).onメソッド。

- メソッドイベントハンドラ<br>
コンポーネントのmethodsオプションに定義したメソッド名を指定する。

```
<button v-on:click="handleClick">クリック</button>
<button @click="handleClick">クリック</button>
```

```
<button v-on:click="handleClick">クリック</button>

var app = new Vue({
  el: '#app',
  methods: {
    handleClick: function() {
      alert('クリックしたよ');
    }
    // 省略形
    // handleClick() {
      // alert('クリックしたよ');
    //}
  }
})
```

- インラインメソッドハンドラ<br>
ディレクティブの値にJavaScriptの式を直接定義する。

```
<button v-on:click="count++">クリック</button>
<button v-on:click="handleClick($event, item)">クリック</button>
```

イベントオブジェクトとスコープ内のitemプロパティを引数として持ち、メソッドを呼び出す。

- 使用可能なDOMイベント例

```
<!-- 要素のスクロールイベント -->
<div v-on:scroll="handler">
  コンテンツ
</div>
<!-- マウスのホイールイベント -->
<div v-on:mousewheel="handler">
  コンテンツ
</div>
<!-- 要素のドラッグイベント -->
<div v-on:dragstrat="handler" draggable>
  ドラッグ可能
</div>
<!-- フォーム -->
<input v-bind:value="message" v-on:click="handleInput">
methods: {
  handleInput: function(event) {
  // フック処理
  this.message = event.target.value
  }
}
// => v-onディレクティブを使うことでフック処理を行う
```

### イベント修飾子
DOMイベントの振る舞いを変更する。<br>
通常のHTMLでは、同じイベントをハンドルしたDOMがネストされている場合、event.target要素から順に親要素に向かってバブリング(イベントの伝播)される。

|修飾子|振る舞い|
|---|---|
|.stop|event.stopPropagation()を呼ぶ|
|.prevent|event.preventDefault()を呼ぶ|
|.capture|キャプチャモードでイベントを発生する|
|.self|event.target要素がそのもの自身のときのみ発火する|
|.native|コンポーネントで直接イベントを発火する|
|.once|一回のみイベントを呼ぶ|
|.passive|{ passive: true }でイベントを明示的に呼び出さない|

- stopPropagation()メソッド<br>
イベントが親要素に伝播するのをキャンセルするためのメソッド。

- preventDefault()メソッド<br>
イベントをキャンセルするためのメソッド。

- マウスイベントの修飾子

|修飾子|振る舞い|
|---|---|
|.left|マウスの左ボタンが押す|
|.right|マウスの右ボタンが押す|
|.middle|マウスの中央ボタンが押す|

- サンプル

```
<div v-on:click.rigth="handler">example</div>
<div v-on:click.right.prevent="handler">example</div>

methods: {
  handler: function(comment) {
  console.log(comment)
  }
}

// =>
MouseEvent {isTrusted: true, screenX: 182, screenY: 171, clientX: 47, clientY: 24, …}
// =>

```

- .stop イベントが親要素に伝播するのをキャンセルする

```
<div v-on:click="handler('div1')">
  div1
  <a href="#" v-on:click.stop="handler('div2')">div2</a>
</div>

// div2 をクリック =>
div2
```

- .prevent イベントをキャンセルする

```
<div v-on:click="handler('div1')">
  div1
  <a href="#" v-on:click.prevent="handler('div2')">div2</a>
</div>

// div2 をクリック =>
div2
div1
```

- .capture キャプチャモードでイベントを発生する<br>
ルート要素からevent.targetまでDOMツリーを探すキャプチャ中(キャプチャフェーズ)にイベントが発生する。<br>
バブリングモードより先に発生する。

```
<div v-on:click.capture="handler('div1')">
  div1
  <div v-on:click="handler('div2')">
    div2
    <div v-on:click="handler('div3')">div3</div>
  </div>
</div>

// div3 をクリック =>
div1
div3
div2
```

- .self event.target要素がそのもの自身のときのみ発火する。

```
<div class="overlay" v-on:click.self="close">...</div>
```

- .native コンポーネントで直接イベントを発火する

```
<!-- コンポーネントをクリックするとイベントが発火 -->
<my-component v-on:click.native="handler"></my-component>
<!-- コンポーネントをクリックしてもイベントが発火しない -->
<my-component v-on:click="handler"></my-component>
```

### キー修飾子
特定のキーコードの入力のみイベントを呼び出す。

```
<input v-on:keydown.13="handler">
<input v-on:keydown.enter="handler">
// いずれかのarrowキーが押されたとき
<input v-on:keydown.up.down.left.rigth="handler">
```

|修飾子|振る舞い|
|-----|-----|
|.enter|エンターキーを押す|
|.tab|tabキーを押す|
|.delete|deleteキーを押す|
|.esc|escキーを押す|
|.space|spaceキーを押す|
|.up|arrowキーの上を押す|
|.down|arrowキーの下を押す|
|.left|arrowキーの左を押す|
|.right|arrowキーの右を押す|

### システム修飾子
特定のキーコードが押されているときのみイベントを呼び出す。

|修飾子|振る舞い|
|-----|-----|
|.ctrl|ctrlキーが押されている|
|.alt|altキーが押されている|
|.shift|shiftキーが押されている|
|.meta|metaキーが押されている|

```
<button v-on:click.shift="doDelete">削除ボタン</button>
```

### フォーム
v-modelディレクティブを使いフォームの値をデータと同期させる双方向データバインディングを行う。<br>
v-modelディレクディブは、DOMのデータバインディングとリアクティブデータの処理を自動化する。<br>
入力フォームでは値は全て文字列型に、複数選択した値は配列型になる。<br>
なお、v-modelディレクティブを使用すると、value, checked, selected などの設定は無視される。

1. データバインディングで要素のvalue属性を更新する
2. イベントハンドリングで受け取った値をデータに代入する

```
<div id="app">
  <input v-model="message">
  <p>{{ message }}</p>
</div>

var app = new Vue({
  el: '#app',
  data: {
    // 初期値をセット
    message: 'Hello, World!'
  }
})
```

```
<!-- インプット -->
<input v-model="message">
<p>{{ message }}</p>

data: {
  // 初期値をセット
  message: 'Hello, World!'
}

// => Hello, World!

<!-- テキストエリア -->
<textarea v-model="message"></textarea>
<pre>{{ message }}</pre>

data: {
  // 初期値をセット
  message: 'Hello, World!'
}

// => Hello, World!

<!-- チェックボックス -->
<label><input type="checkbox" v-model="val"> {{ val }}</label>
<label><input type="checkbox" v-model="val" true-value="yes" false-value="no"> {{ val }}</label>

data: {
  val: true
}

// => true / false
// => yes / no

<label><input type="checkbox" v-model="val" value="A">A</label>
<label><input type="checkbox" v-model="val" value="B">B</label>
<label><input type="checkbox" v-model="val" value="C">C</label>
<p>{{ val }}</p>

data: {
  val: []
}

// => ["A", "C"]

<!-- ラジオボタン -->
<label><input type="radio" v-model="val" value="a">A</label>
<label><input type="radio" v-model="val" value="b">B</label>
<label><input type="radio" v-model="val" value="c">C</label>
<p>{{ val }}</p>

data: {
  val: ''
}

// => 'a'

<!-- セレクトボックス -->
<select v-model="val">
  <option disabled="disabled">選択して下さい</option>
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
</select>
<p>{{ val }}</p>

data: {
  val: ''
}

// => 'a'

<select v-model="val" multiple>
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
</select>
<p>{{ val }}</p>

data: {
  val: []
}

// => ["a"]

<!-- 画像ファイル -->
<!-- v-modelディレクティブを使用できなため、changeイベントをハンドルする -->
<input type="file" v-on:change="handleChange">
<div v-if="preview">
  <img v-bind:src="preview">
</div>

data: {
  preview: ''
},
methods: {
  handleChange: function(event) {
    var file = event.target.files[0]
    if (file && file.type.match(/^image\/(png|jpeg)$/)) {
      this.preview = window.URL.createObjectURL(file)
    }
  }
}

// => <img src="blob:null/ff38863e-ab28-4c4e-ae8c-25d7dbc7e343">

<!-- その他 -->
<input type="range" v-model.number="val"> {{ val }}

data: {
  val: 50
}
```
