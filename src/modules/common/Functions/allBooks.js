import axios from "axios";
import { fetchAuthorBirthDate, fetchAuthorTopWork } from "./authorDetails";

export const initialBooks = async ({ limit, page, offset }) => {
  try {
    //initially just 10 books will be fetched to get faster response and reduce loading time
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=the&limit=${String(
        limit
      )}&page=${String(page)}&offset=${String(offset)}`
    );
    if (!res.data || !res.data.docs) {
      console.log("Error Fetching");
      return { data: [], success: false };
    }

    const books = res.data.docs;
    const bookDetails = await Promise.all(
      books.map(async (book) => {
        const authorKey = book.author_key[0];
        const authorName = book.author_name[0];

        const authorBirthDate = await fetchAuthorBirthDate(authorKey);

        const authorTopWork = await fetchAuthorTopWork(authorName);

        return {
          ratings_average: book.ratings_average || null,
          author_name: authorName || null,
          title: book.title || null,
          first_publish_year: book.first_publish_year || null,
          subject: book.subject ? book.subject.join(", ") : null,
          author_birth_date: authorBirthDate,
          author_top_work: authorTopWork,
        };
      })
    );

    return { data: bookDetails, success: true };
  } catch (error) {
    console.log("Error", error);
    return { data: [], success: false };
  }
};

export const paginatedBooks = async ({ limit, page, offset }) => {
  try {
    console.log('limit ',limit, ' page ',page,' offset ',offset)    
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=the&limit=${String(
        limit
      )}&page=${String(page)}&offset=${String(offset)}`
    );
    if (!res.data || !res.data.docs) {
      console.log("Error Fetching");
      return { data: [], success: false };
    }

    const books = res.data.docs;
    const bookDetails = await Promise.all(
      books.map(async (book) => {
        const authorKey = book.author_key[0];
        const authorName = book.author_name[0];

        const authorBirthDate = await fetchAuthorBirthDate(authorKey);

        const authorTopWork = await fetchAuthorTopWork(authorName);

        return {
          ratings_average: book.ratings_average || null,
          author_name: authorName || null,
          title: book.title || null,
          first_publish_year: book.first_publish_year || null,
          subject: book.subject ? book.subject.join(", ") : null,
          author_birth_date: authorBirthDate || null,
          author_top_work: authorTopWork || null,
        };
      })
    );

    return { data: bookDetails, success: true };
  } catch (error) {
    console.log("Error", error);
    return { data: [], success: false };
  }
};
