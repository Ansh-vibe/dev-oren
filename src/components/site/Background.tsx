export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#060814]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[140px]" />
      <div className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[160px]" />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-pink-600/15 blur-[140px]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.3), transparent)",
        }}
      />
    </div>
  );
}
