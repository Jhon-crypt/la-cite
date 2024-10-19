import Header from "./components/header/header";
import CenteredHero from "./components/heroes/centeredHero";

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* Background with blur */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/bg.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)",  // Apply blur here
            zIndex: -1,           // Make sure the background is behind
          }}
        />

        {/* Foreground content */}
        <div
          style={{
            position: "relative",  // Ensures it stays in the foreground
            zIndex: 1,             // Places the content above the blurred background
          }}
        >
          <CenteredHero />
        </div>
      </div>
    </div>

  );
}
