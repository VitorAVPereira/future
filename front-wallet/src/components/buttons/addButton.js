import React from "react";

export default function AddButton({ content }) {
    const handleAddClick = () => {
        // Lógica para executar a ação de edição
        console.log("Botão de edição clicado");
      };
    
      return (
        <div>
          <button
            type="button"
            className="py-2.5 px-1 mt-1 ml-2"
            onClick={handleAddClick}
          >
            <a>
              <img src={content} alt="Add" className="w-4 h-4" />
            </a>
          </button>
        </div>
      );
}