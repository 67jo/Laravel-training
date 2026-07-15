import { Head } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { ActionButton } from '@/components/action-button';
import { ActionModal } from '@/components/action-modal';
import { TasksTable } from '@/components/tasks-table';
import { dashboard } from '@/routes';



interface Props{
    tarefas:Tarefas[]
}

export default function Dashboard({tarefas}:Props) {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [modalAction, setModalAction] = useState<boolean>(true)
    const [task, setTask] = useState<Tarefas | undefined>()

    return (
        <>
            <>
                <Head title="Dashboard" />
                <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                    <div className="w-full text-right">
                        <ActionButton
                            titulo='Add'
                            action={()=>{
                                setOpenModal(true)
                                setModalAction(true)
                            }}
                            icon={Plus}
                            />
                    </div>
                    <div className="relative min-h-screen flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                        <TasksTable 
                            tasksData={tarefas} 
                            modalAction={setModalAction}
                            onOpen={setOpenModal}
                            setTask={setTask}
                        />
                    </div>
                </div>
            </>
            {openModal && 
                    <ActionModal 
                        open={openModal}
                        task={task}
                        onClose={()=>setOpenModal(false)}
                        isChangeAction={modalAction}
                        titulo={modalAction ? "Adicione tarefas" : "Edite a tarefa"}
                        descricao={modalAction ? "Por favor adicione a tarefa desejada" : "Edite a tarefa selecionada"}
                    />}
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};
