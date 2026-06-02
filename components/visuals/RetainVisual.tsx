export default function RetainVisual() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(159.17deg, rgb(13,13,15) 0%, rgb(36,31,26) 53%, rgb(10,10,13) 75.8%)",
      }}
    >
      {/* Bottom ellipse glow */}
      <div
        aria-hidden
        className="absolute left-[-80px] top-[280px] h-[400px] w-[800px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(217,178,115,0.25) 0%, rgba(15,15,15,0) 65%)",
          filter: "blur(30px)",
        }}
      />

      {/* Saved chip */}
      <div className="absolute left-[60px] top-[60px] flex h-[28px] w-[64px] items-center justify-center rounded-[6px] bg-[rgba(31,31,31,0.85)]">
        <p className="text-[12px] font-semibold text-ivory">Saved</p>
      </div>

      {/* Selection card */}
      <div className="absolute left-[60px] top-[130px] h-[280px] w-[440px] rounded-[6px] bg-white shadow-[0px_16px_40px_rgba(0,0,0,0.3)]" />
      <p className="absolute left-[84px] top-[154px] text-[16px] font-semibold text-ink">
        Your Client Portal
      </p>
      <p className="absolute left-[470px] top-[154px] text-[16px] text-stone">
        ⋯
      </p>

      {/* Row 1: Closing checklist */}
      <div
        className="absolute left-[84px] top-[188px] h-[48px] w-[48px] rounded-[6px]"
        style={{
          backgroundImage: "linear-gradient(to right, #80664d, #33261f)",
        }}
      />
      <p className="absolute left-[148px] top-[192px] text-[14px] font-semibold text-ink">
        Closing checklist
      </p>
      <p className="absolute left-[280px] top-[194px] text-[12px] font-medium text-moss">
        Active
      </p>
      <p className="absolute left-[148px] top-[210px] text-[12px] text-stone">
        3 of 7 complete · Updated today
      </p>
      <p className="absolute left-[148px] top-[226px] text-[11px] text-stone">
        Purchase · $640,000 · Conventional
      </p>

      {/* Row 2: Rate update */}
      <div
        className="absolute left-[84px] top-[252px] h-[48px] w-[48px] rounded-[6px]"
        style={{
          backgroundImage: "linear-gradient(to right, #80664d, #33261f)",
        }}
      />
      <p className="absolute left-[148px] top-[256px] text-[14px] font-semibold text-ink">
        Quarterly rate update
      </p>
      <p className="absolute left-[280px] top-[258px] text-[12px] font-medium text-moss">
        Sent
      </p>
      <p className="absolute left-[148px] top-[274px] text-[12px] text-stone">
        Auto sent to 184 past clients
      </p>
      <p className="absolute left-[148px] top-[290px] text-[11px] text-stone">
        Open rate 58% · 12 replies
      </p>

      {/* Action bar */}
      <div className="absolute left-[200px] top-[460px] flex h-[44px] w-[280px] items-center rounded-[22px] bg-[rgba(26,26,26,0.85)]">
        <p className="ml-[20px] text-[12px] font-medium text-ivory">
          2 touchpoints queued
        </p>
        <div className="ml-[12px] h-[18px] w-[2px] bg-sand" />
        <p className="ml-[10px] text-[12px] font-medium text-ivory">Edit</p>
        <div className="ml-[10px] flex h-[30px] w-[70px] items-center justify-center rounded-[15px] bg-white">
          <p className="text-[12px] font-semibold text-ink">Send</p>
        </div>
      </div>
    </div>
  );
}
