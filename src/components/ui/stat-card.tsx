import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  icon?: LucideIcon
  trend?: {
    value: number
    isPositive: boolean
  }
  variant?: "default" | "primary" | "success" | "warning" | "danger"
}

const variantStyles = {
  default: "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200",
  primary: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
  success: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
  warning: "bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200",
  danger: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
}

const iconColorStyles = {
  default: "text-gray-600",
  primary: "text-blue-600",
  success: "text-green-600",
  warning: "text-amber-600",
  danger: "text-red-600",
}

const valueColorStyles = {
  default: "text-gray-900",
  primary: "text-blue-900",
  success: "text-green-900",
  warning: "text-amber-900",
  danger: "text-red-900",
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, label, value, icon: Icon, trend, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl border-2 p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              {label}
            </p>
            <p className={cn("text-3xl font-bold mb-1", valueColorStyles[variant])}>
              {value}
            </p>
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-1 text-sm font-medium",
                trend.isPositive ? "text-green-600" : "text-red-600"
              )}>
                <span>{trend.isPositive ? "↑" : "↓"}</span>
                <span>{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>
          {Icon && (
            <div className={cn("p-3 rounded-xl bg-white/50", iconColorStyles[variant])}>
              <Icon className="h-8 w-8" strokeWidth={2} />
            </div>
          )}
        </div>
      </div>
    )
  }
)
StatCard.displayName = "StatCard"

export { StatCard }
