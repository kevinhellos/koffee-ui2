// For internal use as of Jan 26 2025
export default function Bar({ variant, className, children } : 
    { variant: string, className?: string, children: React.ReactNode}) {

    if (variant === "red") {
        return (
            <div className={`bg-red-100/75 text-red-800 py-2 text-sm px-3.5 ${className ? className : ""} rounded-md`}>
                {children}
            </div>
        )
    }

    if (variant === "green") {
        return (
            <div className={`bg-green-100/75 text-green-800 py-2 text-sm px-3.5 ${className ? className : ""} rounded-md`}>
                {children}
            </div>
        )
    }

    if (variant === "blue") {
        return (
            <div className={`bg-blue-100/75 text-blue-800 py-2 text-sm px-3.5 ${className ? className : ""} rounded-md`}>
                {children}
            </div>
        )
    }

    if (variant === "yellow") {
        return (
            <div className={`bg-yellow-100/75 text-yellow-800 py-2 text-sm px-3.5 ${className ? className : ""} rounded-md`}>
                {children}
            </div>
        )
    }
}
