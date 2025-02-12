const Sidebar = ({ setActivePage }) => {
    const elementsSidbar = ["Produit","Admin"];
    
    return (
      <div className="w-64 h-screen bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          {elementsSidbar.map((element, index) => (
            <li className="mb-2" key={index}>
              <button
                onClick={() => setActivePage(element)}
                className="w-full text-left p-2 bg-gray-700 hover:bg-gray-600 rounded"
              >
                {element}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  