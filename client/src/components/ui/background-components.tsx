export const PrimaryGlowBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Primary Purple/Blue Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, #4747F3 0%, rgba(71, 71, 243, 0.5) 30%, transparent 60%)`,
          opacity: 0.6,
        }}
      />
    </div>
  );
};
