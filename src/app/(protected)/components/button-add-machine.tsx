import { PlusCircle } from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MachineAddForm from "./machine-add-form";

export function ButtonAddMachine() {
    const [open, setOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleFormSubmit = () => {
        setOpen(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // hide success message after 3 seconds
    };

    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button size="sm" className="h-7 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Adicione uma máquina
                        </span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[80vw] lg:max-w-[425px] rounded-md">
                    <MachineAddForm onSubmitSuccess={handleFormSubmit} />
                </DialogContent>
            </Dialog>
            {showSuccess && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md">
                    Máquina cadastrada com sucesso!
                </div>
            )}
        </>
    );
}
