import Filters from "../components/Filters";
import ArticleList from "../components/ArticleList";
import { HighSeverityColor, ModerateSeverityColor, LowSeverityColor } from "../config";

function Home() {
  return (
    <>
      <Filters />
      <ArticleList />

      {/* Severity Legend */}
      <div
        style={{
          position: "fixed",
          bottom: 10,
          right: 10,
          textAlign: "right",
          lineHeight: "1.5",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ fontWeight: "bold", color: "#000000", opacity: "0.6" }}>Severity:</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: HighSeverityColor, marginRight: 5 }} />
            <div style={{ fontWeight: "bold", color: HighSeverityColor }}>High</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: ModerateSeverityColor, marginRight: 5 }} />
            <div style={{ fontWeight: "bold", color: ModerateSeverityColor }}>Moderate</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: LowSeverityColor, marginRight: 5 }} />
            <div style={{ fontWeight: "bold", color: LowSeverityColor }}>Low</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
