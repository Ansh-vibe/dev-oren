export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-amber-300/30 blur-[160px]" />
      <div className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-amber-500/20 blur-[180px]" />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-amber-200/40 blur-[160px]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(232,201,122,0.25), transparent)",
        }}
      />
    </div>
  );
}
