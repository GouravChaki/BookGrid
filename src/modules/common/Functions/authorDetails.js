import axios from "axios";

export const fetchAuthorBirthDate = async (authorKey) => {
    try {
      const authorRes = await axios.get(`https://openlibrary.org/authors/${authorKey}.json`);
      return authorRes.data.birth_date || null;
    } catch (error) {
      console.log(`Error fetching author birth date for ${authorKey}:`, error);
      return null;
    }
  };
  
export const fetchAuthorTopWork = async (authorName) => {
    try {
      const authorTopWorkRes = await axios.get(`https://openlibrary.org/search/authors.json?q=${authorName}&limit=1`);
      return authorTopWorkRes.data.docs[0]?.top_work || null;
    } catch (error) {
      console.log(`Error fetching author top work for ${authorName}:`, error);
      return null;
    }
  };
  