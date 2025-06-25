import { getTipById } from "@/utils/tips";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TipProps {
  id: string;
  onClose: () => void;
}

const TipInfoModal = ({ id, onClose }: TipProps) => {
  const tip = getTipById(id);

  return (
    <DialogContent className="sm:max-w-[80%] sm:max-h-[90%] overflow-y-auto" style={{ backgroundColor: '#FEFBF8', borderColor: "#FEFBF8"}}>
      <DialogHeader  className="flex flex-col space-y-1">
        <div className="w-full h-[300px] mb-4 overflow-hidden border rounded-lg shadow-md" style={{ backgroundColor: '#FEFBF8', borderColor: "#FEFBF8"}}>
          <img
            src={tip.image || "/default-tip-image.jpg"}
            className="w-full h-full object-cover"
            alt={tip.title}
          />
        </div>

        <DialogTitle className="text-black">{tip.title}</DialogTitle>
        <DialogDescription className="text-gray-600">
          {tip.description}
        </DialogDescription>
      </DialogHeader>

      <div className="text-gray-800 mt-4">{tip.body}</div>
      <DialogFooter>
        <div className="flex flex-col items-start space-y-2 w-full">
          <div className="w-full justify-start">
            <Label className="text-gray-700">Tags:</Label>
            <div className="flex flex-wrap gap-2 mt-1">
              {tip.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="w-full italic text-right mb-4"
            style={{ color: "#C8B4DC" }}
          >
            Date: {tip.date}
          </div>
          <div className="flex w-full justify-center">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="w-[30%]"
                style={{ backgroundColor: "#8A71AD", color: "#FFFFFF" }}
              >
                Close
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  );
};

export default TipInfoModal;
