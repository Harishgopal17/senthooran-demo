export default function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-transparent bg-opacity-60 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg px-6 py-4 w-[90%] max-w-md">
        {children}
      </div>
    </div>
  );
}
