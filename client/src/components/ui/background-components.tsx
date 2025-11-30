export const YellowGlowBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Soft Yellow Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, #FFF991 0%, rgba(255, 249, 145, 0.5) 30%, transparent 60%)`,
          opacity: 0.6,
        }}
      />
    </div>
  );
};
