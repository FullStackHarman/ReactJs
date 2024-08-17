import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState({ content: '', author: '' }); // Initialize empty quote

  const baseUrl = 'https://api.quotable.io/random';

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(baseUrl);
        setQuote(response.data); // Set the entire quote object
      } catch (error) {
        console.error('Error fetching quote:', error); // Log specific error details
      }
    };

    fetchQuote(); // Call the function immediately
  }, []); // Empty dependency array for initial fetch only

  return (
    <>
      <h2>{quote.content} - {quote.author}</h2> {/* Display quote content and author */}
    </>
  );
}

export default App;
