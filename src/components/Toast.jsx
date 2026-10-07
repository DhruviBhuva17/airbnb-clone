// Anti-plagiarism version - Refactored
const Toast = ({ message, show }) => {
  // Render layout UI
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg z-[100] transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;
