type Row = {
  initials: string;
  initialBg: string;
  name: string;
  meta: string;
  leftOffset: number;
  topOffset: number;
  status: { label: string; tone: "green" | "neutral" };
  tags: [string, string];
};

const rows: Row[] = [
  {
    initials: "EC",
    initialBg: "#c9a961",
    name: "Emily Carter",
    meta: "Submitted application · 2 min ago",
    leftOffset: 110,
    topOffset: 100,
    status: { label: "Hot", tone: "green" },
    tags: ["Purchase", "Referral"],
  },
  {
    initials: "KH",
    initialBg: "#8a857a",
    name: "Kelly Hampton",
    meta: "Downloaded rate sheet · 1 hr ago",
    leftOffset: 160,
    topOffset: 260,
    status: { label: "Warm", tone: "green" },
    tags: ["Refinance", "Organic"],
  },
  {
    initials: "TJ",
    initialBg: "#5c5048",
    name: "Thomas Philip John",
    meta: "Booked a call · Yesterday",
    leftOffset: 110,
    topOffset: 420,
    status: { label: "New", tone: "green" },
    tags: ["Purchase", "Paid"],
  },
];

export default function ConvertVisual() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(151.33deg, rgb(10,10,13) 0%, rgb(26,26,31) 76.9%)",
      }}
    >
      {/* Soft elliptical glow */}
      <div
        aria-hidden
        className="absolute left-[48px] top-[100px] h-[348px] w-[631px] rotate-[15deg]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217,178,115,0.15) 0%, rgba(15,15,15,0) 60%)",
          filter: "blur(20px)",
        }}
      />

      {/* ABCNormal tag */}
      <div className="absolute left-[480px] top-[60px] flex h-[28px] w-[96px] items-center justify-center rounded-[14px] bg-[rgba(46,46,46,0.9)]">
        <p className="text-[11px] text-ivory">ABCNormal</p>
      </div>

      {rows.map((r) => (
        <div key={r.name}>
          <div
            className="absolute h-[110px] w-[420px] rounded-[12px] bg-[#fafaf8] shadow-[0px_12px_32px_rgba(0,0,0,0.3)]"
            style={{ left: r.leftOffset, top: r.topOffset }}
          />
          <div
            className="absolute flex h-10 w-10 items-center justify-center rounded-full text-[12px] font-semibold text-white"
            style={{
              left: r.leftOffset + 18,
              top: r.topOffset + 18,
              backgroundColor: r.initialBg,
            }}
          >
            {r.initials}
          </div>
          <p
            className="absolute whitespace-nowrap text-[14px] font-semibold text-ink"
            style={{ left: r.leftOffset + 72, top: r.topOffset + 20 }}
          >
            {r.name}
          </p>
          <p
            className="absolute whitespace-nowrap text-[12px] text-stone"
            style={{ left: r.leftOffset + 72, top: r.topOffset + 40 }}
          >
            {r.meta}
          </p>

          {/* Tags */}
          <div
            className="absolute flex h-[20px] w-[60px] items-center justify-center rounded-[4px] bg-[#e8f0e6]"
            style={{ left: r.leftOffset + 72, top: r.topOffset + 70 }}
          >
            <span className="text-[10px] font-semibold text-green">
              {r.status.label}
            </span>
          </div>
          <div
            className="absolute flex h-[20px] w-[50px] items-center justify-center rounded-[4px] bg-[#f0ebe0]"
            style={{ left: r.leftOffset + 140, top: r.topOffset + 70 }}
          >
            <span className="text-[10px] font-medium text-stone">
              {r.tags[0]}
            </span>
          </div>
          <div
            className="absolute flex h-[20px] w-[50px] items-center justify-center rounded-[4px] bg-[#f0ebe0]"
            style={{ left: r.leftOffset + 196, top: r.topOffset + 70 }}
          >
            <span className="text-[10px] font-medium text-stone">
              {r.tags[1]}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
