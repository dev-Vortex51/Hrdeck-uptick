import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

type StatCardProps = {
    title: string;
    value: number | string;
    loading: boolean;
    growth?: string;
  };
  
  const StatCard = ({ title, value, loading, growth }: StatCardProps) => {
    return (
      <div className="stats shadow bg-base-200 border border-base-300 rounded-lg p-4">
        <div className="stat">
          <div className="stat-title">{title}</div>
          <div className="stat-value">
            {loading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              value
            )}
          </div>
          {growth !== undefined && (
            <div
              className={`stat-desc flex items-center gap-3 ${
                growth.startsWith("-") ? "text-error " : "text-success"
              } `}
            >
              <div
                className={`inline-flex items-center gap-1 size-6 rounded-full p-1  ${
                  growth.startsWith("-") ? "bg-error/20" : "bg-success/20"
                }`}
              >
                {growth.startsWith("-") ? <ArrowDownLeft /> : <ArrowUpRight />}
              </div>
              {growth}%
            </div>
          )}
        </div>
      </div>
    );
  };

  export default StatCard