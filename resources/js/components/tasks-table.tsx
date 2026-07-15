import { Pen, Trash2 } from "lucide-react";
import { 
         Table,
         TableHeader,
         TableHead,
         TableBody, 
         TableCell, 
         TableRow, } from "./ui/table";



type Tarefas = {
    id:string,
    titulo:string,
    descricao:string,
    concluida:boolean,
}

interface Props{
    tasksData:Tarefas[],
    modalAction:(arg:boolean)=>void,
    onOpen:(value:boolean)=>void,
    setTask:(value:Tarefas)=>void,
}


export const TasksTable = ({tasksData, modalAction, onOpen, setTask}:Props) =>{
    return(
        <>
            <Table className="border rounded-2xl">
                <TableHeader>
                    <TableRow>
                        <TableHead>id</TableHead>
                        <TableHead>titulo</TableHead>
                        <TableHead>descricao</TableHead>
                        <TableHead>estado</TableHead>
                        <TableHead>acções</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tasksData.map((item)=>{
                        return(
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.titulo}</TableCell>
                                <TableCell>{item.descricao}</TableCell>
                                <TableCell>{item.concluida ? "concluida" : "pendete"}</TableCell>
                                <TableCell className="flex gap-2">
                                    <button className="cursor-pointer">
                                        <Pen size={17} onClick={()=>{
                                            modalAction(false)
                                            onOpen(true)
                                            setTask(item)
                                        }}/>
                                    </button>
                                    <button className="cursor-pointer">
                                        <Trash2 size={17} className="text-red-600"/>
                                    </button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </>
    )
}