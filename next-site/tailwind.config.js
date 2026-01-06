/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === 伝統的な日本の色 ===
        // 白系（余白・背景に使用）
        kinari: '#FBFAF5',      // 生成色 - 自然な白、メイン背景
        shironeri: '#F3F3F2',   // 白練 - 和紙のような白
        gofun: '#FFFFFB',       // 胡粉 - 純白

        // 墨系（テキストに使用）
        sumi: '#1C1C1C',        // 墨 - 深い黒、メインテキスト
        usuzumi: '#5C5C5C',     // 薄墨 - サブテキスト
        hai: '#7B7B7B',         // 灰色

        // 朱・茶系（アクセントに使用）
        shu: '#BA2636',         // 朱色 - 神社の赤、主要アクセント
        beni: '#B22D3B',        // 紅色
        tobi: '#6C3524',        // 鳶色 - 落ち着いた茶
        kitsune: '#9B6E23',     // 狐色 - 金茶

        // 藍系
        ai: '#165E83',          // 藍色 - 深い青
        hanada: '#2A4B7C',      // 縹色
        asagi: '#48929B',       // 浅葱色

        // その他伝統色
        matcha: '#6B7B4C',      // 抹茶色
        sakura: '#FEDFE1',      // 桜色（淡い）
        fuji: '#8B81C3',        // 藤色
      },
      fontFamily: {
        japanese: ['"Noto Serif JP"', 'serif'],
        heading: ['"Shippori Mincho"', '"Noto Serif JP"', 'serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
