import React from "react";

export default function EditButton({ content }) {
    const handleEditClick = () => {
        // Lógica para executar a ação de edição
        console.log("Botão de edição clicado");
      };
    
      return (
        <div>
          <button
            type="button"
            className="py-2.5 px-1 mr-2 "
            onClick={handleEditClick}
          >
            <a>
              <img src={content} alt="Edit" className="w-4 h-4" />
            </a>
          </button>
        </div>
      );
}