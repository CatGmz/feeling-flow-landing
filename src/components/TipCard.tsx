import { useState } from "react";
import { Tip } from "../types/tip";
import TipInfoModal from "@/components/TipInfoModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const TipCard = ({ id, title, description, body, image, date, tags }: Tip) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenTipModal = (id: string) => {
    setIsModalOpen(true);
  };

  const handleCloseTipModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto max-w-2xl p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full" style={{ backgroundColor: '#FEFBF8' }}>
        <div className="flex-grow flex flex-col justify-between mb-4">
          <h2
            className="text-2xl font-semibold mb-6 text-center"
            style={{ color: "#8A71AD" }}
          >
            {title}
          </h2>
          <p className="text-gray-600 mb-4 text-start">{description}</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-300 mb-4"
              style={{ backgroundColor: "#CFC1F8" }}
              onClick={() => handleOpenTipModal(id)}
            >
              Read More
            </Button>
          </DialogTrigger>
          {isModalOpen && <TipInfoModal id={id} onClose={handleCloseTipModal} />}
        </Dialog>
        
        <p className="text-gray-400 text-end italic mt-auto">{date}</p>
      </div>
      
    </>
  );
};

export default TipCard;
