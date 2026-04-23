import { useState } from "react";

const FORMSPREE_ID = "mbdqjrwj"; // your existing Formspree form ID
const PDF_PATH = "/CRA_Compliance_Checklist_WesleyAI.pdf"; // put PDF in public/

type Stage = "idle" | "loading" | "success" | "error";

export default function CRADownloadGate() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [stage, setStage] = useState<Stage>("idle");
  const [error, setError] = useState("");

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("請輸入有效的 Email");
      return;
    }
    setError("");
    setStage("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          company: company || "(未填)",
          _subject: `[CRA Checklist 下載] ${email}`,
          source: "CRA Checklist Lead Magnet",
        }),
      });

      if (res.ok) {
        setStage("success");
        // Auto-trigger download
        const a = document.createElement("a");
        a.href = PDF_PATH;
        a.download = "CRA_Compliance_Checklist_WesleyAI.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      } else {
        throw new Error("送出失敗");
      }
    } catch {
      setStage("error");
    }
  }

  // ── Styles (inline, no Tailwind dependency beyond utilities) ──
  const card: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #E1F5EE",
    borderRadius: 12,
    padding: "28px 32px",
    maxWidth: 420,
    width: "100%",
    boxShadow: "0 2px 16px rgba(13,158,117,0.08)",
    fontFamily: "'Inter', 'Noto Sans TC', sans-serif",
  };
  const badge: React.CSSProperties = {
    display: "inline-block",
    background: "#E1F5EE",
    color: "#0D9E75",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.5px",
    padding: "3px 10px",
    borderRadius: 20,
    marginBottom: 12,
  };
  const h2: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 700,
    color: "#0F2544",
    marginBottom: 6,
    lineHeight: 1.3,
  };
  const subtitle: React.CSSProperties = {
    fontSize: 13,
    color: "#6B6B67",
    marginBottom: 20,
    lineHeight: 1.6,
  };
  const label: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "#0F2544",
    marginBottom: 5,
  };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "9px 12px",
    border: "1px solid #D8D6CE",
    borderRadius: 7,
    fontSize: 14,
    color: "#3D3D3A",
    outline: "none",
    marginBottom: 14,
    boxSizing: "border-box",
  };
  const btn: React.CSSProperties = {
    width: "100%",
    padding: "11px 0",
    background: stage === "loading" ? "#9FE1CB" : "#0D9E75",
    color: "#fff",
    border: "none",
    borderRadius: 7,
    fontSize: 14,
    fontWeight: 700,
    cursor: stage === "loading" ? "not-allowed" : "pointer",
    transition: "background 0.2s",
    marginTop: 2,
  };
  const privacy: React.CSSProperties = {
    fontSize: 11,
    color: "#9B9992",
    marginTop: 10,
    textAlign: "center",
  };
  const bullets: React.CSSProperties = {
    background: "#F5F5F2",
    borderRadius: 8,
    padding: "10px 14px",
    marginBottom: 18,
    fontSize: 12,
    color: "#3D3D3A",
    lineHeight: 1.8,
  };

  if (stage === "success") {
    return (
      <div style={card}>
        <div style={{ textAlign: "center", padding: "8px 0" }}>
          <div style={{ fontSize: 36, marginBottom: 10 }}>✅</div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#0F2544", marginBottom: 8 }}>
            下載已開始！
          </div>
          <div style={{ fontSize: 13, color: "#6B6B67", marginBottom: 16, lineHeight: 1.6 }}>
            如果沒有自動下載，請點下方連結。<br />
            我們已將清單連結寄至你的信箱。
          </div>
          <a
            href={PDF_PATH}
            download="CRA_Compliance_Checklist_WesleyAI.pdf"
            style={{
              display: "inline-block",
              background: "#0F2544",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 7,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              marginBottom: 16,
            }}
          >
            手動下載 PDF →
          </a>
          <div style={{ fontSize: 12, color: "#0D9E75", fontWeight: 600 }}>
            想深入了解你的 Gap？
          </div>
          <div style={{ fontSize: 12, color: "#6B6B67", marginTop: 4 }}>
            預約免費 30 分鐘 CRA Gap 診斷 →{" "}
            <a href="https://wesleyai.com.tw" style={{ color: "#0D9E75" }}>
              wesleyai.com.tw
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={card}>
      <span style={badge}>免費下載 · Free Download</span>
      <div style={h2}>CRA 合規自評清單</div>
      <div style={subtitle}>
        21 個檢查項目，涵蓋 Annex I 資安要求、漏洞管理、技術文件與事件通報。
        <br />適用出口歐盟的 OT / IoT / 工業設備製造商。
      </div>

      <div style={bullets}>
        ✦ &nbsp;產品範疇確認 + 風險等級判定<br />
        ✦ &nbsp;Annex I 資安要求（9 項）<br />
        ✦ &nbsp;漏洞管理 + SBOM 建置<br />
        ✦ &nbsp;技術文件 + CE 符合性聲明<br />
        ✦ &nbsp;24h / 72h 事件通報要求
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <label style={label} htmlFor="cra-email">
          Email <span style={{ color: "#E8930A" }}>*</span>
        </label>
        <input
          id="cra-email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            ...input,
            borderColor: error ? "#E8930A" : "#D8D6CE",
          }}
          required
        />
        {error && (
          <div style={{ fontSize: 11, color: "#E8930A", marginTop: -10, marginBottom: 10 }}>
            {error}
          </div>
        )}

        <label style={label} htmlFor="cra-company">
          公司名稱 <span style={{ color: "#9B9992", fontWeight: 400 }}>(選填)</span>
        </label>
        <input
          id="cra-company"
          type="text"
          placeholder="台灣製造股份有限公司"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={input}
        />

        <button type="submit" style={btn} disabled={stage === "loading"}>
          {stage === "loading" ? "處理中…" : "免費下載 CRA 清單 →"}
        </button>

        {stage === "error" && (
          <div style={{ fontSize: 12, color: "#E8930A", marginTop: 8, textAlign: "center" }}>
            送出失敗，請稍後再試或直接寄信至 hello@wesleyai.com.tw
          </div>
        )}
      </form>

      <div style={privacy}>
        🔒 不會寄送垃圾郵件。只用於傳送相關 CRA 合規資源。
      </div>
    </div>
  );
}
