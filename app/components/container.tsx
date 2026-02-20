import { cn } from "@/utils/lib"

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div className={cn("max-w-3xl w-full relative", className)}>
        {children}

    </div>
}

