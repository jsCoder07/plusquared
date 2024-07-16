import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgmain:"#ecf0f3",
        blackmd:"#31344b",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', ],
        'serif': ['ui-serif', 'Georgia', ],
        'mono': ['ui-monospace', 'SFMono-Regular', ],
        'display': ['Oswald', ],
        'body': ['"Open Sans"',],
      },
    },
  },
  plugins: [],
};
export default config;
