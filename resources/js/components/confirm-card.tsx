import { ActionButton } from "./action-button"
import { CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Dialog, DialogContent, } from "./ui/dialog"


interface ConfirmationDialogProps{
    open:boolean;
    onClose:()=>void;
    titulo:string;
    fn:()=>void;
    descricao:string;
}

export const ConfirmationDialog = ({open, onClose, titulo, descricao, fn}:ConfirmationDialogProps) =>{
    return(
        <>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent>
                    <CardHeader>
                        <CardTitle>{titulo}</CardTitle>
                        <CardDescription>{descricao}</CardDescription>
                    </CardHeader>
                    <div className="flex gap-2 justify-end">
                        <ActionButton
                            titulo="Sim"
                            action={fn}
                        />
                        <ActionButton
                            titulo="Cancelar"
                            action={()=>{}}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}