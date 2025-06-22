
export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #6e00ff, #00c8ff)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "2rem"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚀 Jarvis Boost</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "500px" }}>
        Добро пожаловать в мультиязычное мини-приложение для раскрутки соцсетей.
        Все категории с наценкой 50% и поддержкой TON / USDT.
      </p>
    </div>
  );
}
