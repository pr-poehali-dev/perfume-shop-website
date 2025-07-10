import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Perfume } from "@/types/perfume";

interface PerfumeEditDialogProps {
  perfume: Perfume | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (perfume: Perfume) => void;
}

export const PerfumeEditDialog = ({
  perfume,
  isOpen,
  onClose,
  onSave,
}: PerfumeEditDialogProps) => {
  const [editedPerfume, setEditedPerfume] = useState<Perfume | null>(perfume);

  const handleSave = () => {
    if (editedPerfume) {
      onSave(editedPerfume);
      onClose();
    }
  };

  if (!perfume || !editedPerfume) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Редактировать товар</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Название
            </Label>
            <Input
              id="name"
              value={editedPerfume.name}
              onChange={(e) =>
                setEditedPerfume({
                  ...editedPerfume,
                  name: e.target.value,
                })
              }
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Цена
            </Label>
            <Input
              id="price"
              type="number"
              value={editedPerfume.price}
              onChange={(e) =>
                setEditedPerfume({
                  ...editedPerfume,
                  price: parseInt(e.target.value) || 0,
                })
              }
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand" className="text-right">
              Бренд
            </Label>
            <Input
              id="brand"
              value={editedPerfume.brand}
              onChange={(e) =>
                setEditedPerfume({
                  ...editedPerfume,
                  brand: e.target.value,
                })
              }
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Описание
            </Label>
            <Input
              id="description"
              value={editedPerfume.description}
              onChange={(e) =>
                setEditedPerfume({
                  ...editedPerfume,
                  description: e.target.value,
                })
              }
              className="col-span-3"
            />
          </div>

          <Button
            onClick={handleSave}
            className="bg-luxury-gold hover:bg-yellow-600"
          >
            Сохранить изменения
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
