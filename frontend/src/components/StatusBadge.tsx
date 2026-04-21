import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const styles: Record<string, string> = {
    pending: "bg-status-pending/15 text-status-pending border-status-pending/30",
    in_progress: "bg-status-in-progress/15 text-status-in-progress border-status-in-progress/30",
    resolved: "bg-status-resolved/15 text-status-resolved border-status-resolved/30",
  };

  const labels: Record<string, string> = {
    pending: "Pending",
    in_progress: "In Progress",
    resolved: "Resolved",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border",
        styles[status] || styles.pending
      )}
    >
      <span className={cn(
        "w-1.5 h-1.5 rounded-full mr-2",
        status === "pending" && "bg-status-pending",
        status === "in_progress" && "bg-status-in-progress",
        status === "resolved" && "bg-status-resolved",
      )} />
      {labels[status] || status}
    </span>
  );
};

export default StatusBadge;
