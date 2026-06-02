export default function AcquireVisual() {
  return (
    <div className="absolute inset-0">
      {/* Inner card */}
      <div
        className="absolute left-[60px] top-[60px] h-[380px] w-[520px] rounded-[8px]"
        style={{
          backgroundImage:
            "linear-gradient(128.02deg, rgb(15,15,15) 0%, rgb(46,41,33) 90.9%)",
        }}
      />

      {/* URL bar */}
      <div className="absolute left-[80px] top-[80px] h-[28px] w-[280px] rounded-[14px] border border-[rgba(102,82,56,0.3)] bg-[rgba(31,31,31,0.85)]" />
      <p className="absolute left-[100px] top-[88px] text-[11px] text-sand">
        harrington-lending.com
      </p>

      {/* Listing card */}
      <div
        className="absolute left-[100px] top-[140px] h-[240px] w-[440px] rounded-[6px]"
        style={{
          backgroundImage:
            "linear-gradient(169.7deg, rgb(26,26,31) 0%, rgb(10,10,13) 83.3%)",
        }}
      />
      <p className="absolute left-[200px] top-[230px] whitespace-nowrap font-serif text-[28px] font-normal text-ivory">
        Built for Lending
      </p>

      {/* Aa swatch */}
      <div className="absolute left-[470px] top-[380px] h-[84px] w-[96px] rounded-[8px] bg-white shadow-[0px_8px_24px_rgba(0,0,0,0.2)]" />
      <p className="absolute left-[500px] top-[392px] font-serif text-[28px] font-normal text-ink">
        Aa
      </p>
      <div className="absolute left-[482px] top-[440px] h-[12px] w-[20px] rounded-[2px] bg-[#3d2d20]" />
      <div className="absolute left-[506px] top-[440px] h-[12px] w-[20px] rounded-[2px] bg-gold" />
      <div className="absolute left-[530px] top-[440px] h-[12px] w-[20px] rounded-[2px] bg-[#efe9dc]" />
    </div>
  );
}
