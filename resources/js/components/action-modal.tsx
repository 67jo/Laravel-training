import { useForm, usePage } from "@inertiajs/react";
import { Plus } from "lucide-react";
import React from "react";
import { ActionButton } from "./action-button";
import { 
    Dialog, 
    DialogContent, 
    DialogDescription, 
    DialogTitle, 
    DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ActionModalProps {
    open:boolean,
    onClose:()=>void,
    titulo:string,
    descricao:string,
    isChangeAction:boolean
    task?:Tarefas | undefined
}


export const ActionModal = ({open, onClose, titulo, descricao, isChangeAction, task}:ActionModalProps) =>{
    const {auth} = usePage().props
    const {data, setData, post, put, processing, errors, reset} = useForm({
        titulo:isChangeAction ? '' : task?.titulo,
        descricao:isChangeAction ? '' : task?.descricao,
        concluida:isChangeAction ? false : true,
        user_id:auth.user.id,
    })



    const handleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()

        if(isChangeAction){
            post('/tasks', {
                onSuccess:()=>{
                    onClose()
                    reset()
                }
            });

            return;
        }
        
        put(`/tasks/${task?.id}`,{
            onSuccess:()=>{
                onClose()
                reset()
            }
        })
    }

    return(
        <>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {titulo}
                        </DialogTitle>
                        <DialogDescription>
                            {descricao}
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        {errors.titulo && <span>{errors.titulo}</span>}
                        <Label>Título</Label>
                        <Input 
                        value={data.titulo}
                        onChange={(e)=>setData('titulo', e.target.value)}/>
                        <Label>Descrição</Label>
                        <Textarea
                            value={data.descricao} 
                            onChange={(e)=>setData('descricao', e.target.value)}
                            className="mb-3"
                            />
                        <div className="text-right">
                            <ActionButton
                                titulo="Adicionar"
                                icon={Plus}
                                action={()=>{}}
                                type="submit"
                                disabledAction={processing}
                             />
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}