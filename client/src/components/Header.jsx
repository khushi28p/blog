import { useAppContext } from "@/context/AppContext";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isBlogPage = location.pathname.startsWith("/blog/");
  
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (inputRef.current) {
        setInput(inputRef.current.value);
    }
  };
  
  const onClear = () => {
    setInput('');
    if (inputRef.current) {
        inputRef.current.focus();
    }
  };

  if (isHomePage) {
    return (
      <div className="flex items-center gap-6">
        <a
          href="/#features"
          className="hover:underline text-muted-foreground hover:text-foreground"
        >
          Features
        </a>
        <a
          href="/#faqs"
          className="hover:underline text-muted-foreground hover:text-foreground"
        >
          FAQs
        </a>
        <a
          href="/#contact"
          className="hover:underline text-muted-foreground hover:hover:text-foreground"
        >
          Contact
        </a>
      </div>
    );
  } else if (isBlogPage) {
    return null; // Renders nothing on the specific blog page
  } else {
    // This will be for the dashboard and any other pages
    return (
      <form
        onSubmit={onSubmitHandler}
        className="relative flex w-full sm:max-w-lg mx-auto border border-gray-200 bg-white rounded-lg shadow-md overflow-hidden"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search blogs"
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {input ? (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-0 top-1/2 -translate-y-1/2 mr-16 px-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
             Clear &times;
          </button>
        ) : (
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 transition-all duration-300 hover:bg-primary/90"
        >
          Search
        </button>)}
      </form>
    );
  }
};

export default Header;