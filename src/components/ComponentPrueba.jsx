import React from 'react';

const ImageGallery = () => {
    const images = [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-DC8WPTYOnaXyuPohmDlIRxiFjgNOM0.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-l4GI8zPnf9YdxWAxQrupEsLOPCkt3K.png',
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-2aQWdhtAGrwTOL5I6cTUhfFNfCfNf5.png'
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-white">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Galería de Imágenes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={src}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;