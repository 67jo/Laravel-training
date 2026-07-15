import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ButtonProps {
    titulo:string;
    action: ()=>void;
    icon?:LucideIcon;
    disabledAction?:boolean;
    type?:any;
}

interface IconRender {
    icon:LucideIcon
}

export const ActionButton = ({titulo, action, icon, disabledAction, type}:ButtonProps) =>{
    return(
        <>
            <Button 
                onClick={action} 
                className="cursor-pointer font-bold transition duration-500"
                disabled={disabledAction}
                type={type}>
                {titulo}{icon && <IconRendered icon={icon}/>}
            </Button>
        </>
    )
}

const IconRendered = ({icon:Icon}:IconRender) =>{
    return <Icon className="h-5 w-5"/>
}