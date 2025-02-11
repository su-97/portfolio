/*===================================
　ページトップリンク
===================================*/
function PageTopAnime() {
  const scroll = $(window).scrollTop(); //スクロール値を取得
  if (scroll >= 250) {
    //200pxスクロールしたら
    $(".js-pageTop").removeClass("DownMove"); // DownMoveというクラス名を除去して
    $(".js-pageTop").addClass("UpMove"); // UpMoveというクラス名を追加して出現
  } else {
    //それ以外は
    if ($(".js-pageTop").hasClass("UpMove")) {
      //UpMoveというクラス名が既に付与されていたら
      $(".js-pageTop").removeClass("UpMove"); //  UpMoveというクラス名を除去し
      $(".js-pageTop").addClass("DownMove"); // DownMoveというクラス名を追加して非表示
    }
  }

  const wH = window.innerHeight; //画面の高さを取得
  const footerPos = $(".footer").offset().top; //footerの位置を取得
  if (scroll + wH >= footerPos + 10) {
    var pos = scroll + wH - footerPos + 10; //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
    $(".js-pageTop").css("bottom", pos); //.js-pageTopに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
  } else {
    //それ以外は
    if ($(".js-pageTop").hasClass("UpMove")) {
      $(".js-pageTop").css("bottom", "10px"); // 下から10pxの位置にページリンクを指定
    }
  }
}

// 画面をスクロールをしたら動かす
$(window).scroll(function () {
  PageTopAnime();
});

// .js-pageTopをクリックした際の設定
$(".js-pageTop").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false; //リンク自体の無効化
});

/*===================================
　ページ内リンク
===================================*/
$('.js-pageLink a[href*="#"]').click(function () {
  const elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  const pos = $(elmHash).offset().top - 100; //idの上部の距離からHeaderの高さを引いた値を取得
  $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール
  return false;
});

/*===================================
　グローバルナビ（レスポンシブ）
===================================*/
$(".header__openbtn").click(function () {
  $(this).toggleClass("active");
  $(".header__navi").toggleClass("panelactive");
});

$(".header__navi a").click(function () {
  $(".header__openbtn").removeClass("active");
  $(".header__navi").removeClass("panelactive");
});

/*===================================
　モーダル表示
===================================*/
let flag = false;

$(".js-modal-open").modaal({
  // start_open: flag, // ページロード時に表示するか
  overlay_close: true, //モーダル背景クリック時に閉じるか
  before_open: function () {
    // モーダルが開く前に行う動作
    $("html").css("overflow-y", "hidden"); /*縦スクロールバーを出さない*/
  },
  after_close: function () {
    // モーダルが閉じた後に行う動作
    $("html").css("overflow-y", "scroll"); /*縦スクロールバーを出す*/
  },
});
