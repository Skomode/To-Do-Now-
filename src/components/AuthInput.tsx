import React from "react";


type AuthInputProps = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const AuthInput = ({ label, ...props }: AuthInputProps) => {
    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-white-600 ml-1">
                {label}
            </label>

            <input {...props}
                className="
                 w-full h-12 px-4 rounded-xl
                bg-white/10 backdrop-blur-md          
                 border border-white/20             
                 text-white placeholder:text-white/40  
                hover:bg-white/20                     
                focus:bg-white/15 focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20
                 transition-all outline-none
  "
            />
        </div>
    )
}