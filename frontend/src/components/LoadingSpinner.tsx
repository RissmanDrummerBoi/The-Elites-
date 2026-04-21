const LoadingSpinner = ({ text = "Loading..." }: { text?: string }) => (
  <div className="flex flex-col items-center justify-center py-20 gap-4">
    <div className="w-10 h-10 border-4 border-muted border-t-secondary rounded-full animate-spin-slow" />
    <p className="text-muted-foreground text-sm">{text}</p>
  </div>
);

export default LoadingSpinner;
