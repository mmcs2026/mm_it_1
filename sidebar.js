// プレビューや拡張性を持たせた sidebar.js の例
window.addEventListener('DOMContentLoaded', () => {
  const menus = [
    { href: "index.html", text: "🏠 ホーム" },
    { href: "text.html", text: "📝 文字データ量計算" },
    { href: "mojibake.html", text: "🔤 文字化け実験室" },
    { href: "audio.html", text: "🎵 音声データ量計算" },
    { href: "image.html", text: "🖼️ 画像データ量計算" },
    { href: ""resolution_simulator.html", text: "🖼️ 解像度シミュレーター" },
    { href: "video.html", text: "🎬 動画データ量計算" },
    { href: "rogic_circuit.html", text: "⚡ 論理回路シミュレーター" },
    { href: "blockmelody.html", text: "🎵 電子オルゴール" }
  ];

  // 現在のファイル名を取得（例: audio.html）
  const currentFileName = location.pathname.split('/').pop() || 'index.html';

  let navHtml = `
    <nav class="sidebar">
      <h2>📊 MM情報1</h2>
  `;

  menus.forEach(menu => {
    const isActive = (menu.href === currentFileName) ? ' active' : '';
    navHtml += `<a href="${menu.href}" class="tab-link${isActive}">${menu.text}</a>\n`;
  });

  navHtml += `</nav>`;

  // 指定した場所（またはbodyの最初）に挿入
  document.body.insertAdjacentHTML('afterbegin', navHtml);
});
