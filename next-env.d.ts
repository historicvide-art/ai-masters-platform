@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --paper: #020617;
  --text: #e2e8f0;
  --muted: #94a3b8;
  --cyan: #06b6d4;
  --blue: #2563eb;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: linear-gradient(135deg, #020617 0%, #0f172a 100%);
  color: var(--text);
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}

::selection {
  background: #06b6d4;
  color: #020617;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0f172a;
}

::-webkit-scrollbar-thumb {
  background: #06b6d4;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #0891b2;
}
