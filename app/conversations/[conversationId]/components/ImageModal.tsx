'use client'

import Modal from "@/app/components/Modal"
import Image from "next/image"

interface ImageModalProps {
    src?: string | null,
    onClose: () => void,
    isOpen: boolean,
}

const ImageModal: React.FC<ImageModalProps> = ({
    src,
    onClose,
    isOpen,
}) => { 
    
    if(!src) return null

  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    >
        <div className="w-80 h-80">
            <Image 
            alt="image"
            src={src}
            className="object-cover"
            fill
            />
        </div>
    </Modal>
  )
}

export default ImageModal