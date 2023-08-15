import React from "react";

function App() {
  return (
  <div className="min-h-screen flex flex-col text-white">
    <main className="container mx-auto px-6 pt-16 flex-1 text-center">
      <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase"> Welcome to</h2>
      <h1 className="text-3xl md:text-4xl lg:text-8xl uppercase font-black mb-8"> frontend school </h1>
      <div className="text-lg px-4 py-2 md:text-2xl md:px-10 md:py-4 lg:text-3xl lg:px-12 lg:py-6 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">958,458 members</div>
    </main>
    <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
      <p>Built with ❤️ by Rukavendra</p>
      <div className="flex -mx-6">
        <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> |
        <a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> |
        <a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
      </div>
    </footer>
  </div>
  );
}

export default App;
