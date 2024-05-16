const readline = require("readline");
const axios = require("axios");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiBaseUrl =
  "https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api";

const searchBook = async (title) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/books/search`, { title });
    return response.data;
  } catch (error) {
    console.error("Error searching for book:", error.message);
    return null;
  }
};

const getAuthor = async (authorId) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/authors/${authorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching author:", error.message);
    return null;
  }
};

const fetchBookAndAuthors = async (title) => {
  const book = await searchBook(title);
  if (!book || !book.title) {
    console.log("Book not found.");
    return;
  }

  const authorNames = await Promise.all(
    book.authors.map(async (authorId) => {
      const author = await getAuthor(authorId);
      if (author) {
        return `${author.firstName} ${author.lastName.charAt(0)}. ${
          author.lastName
        }`;
      }
      return "Unknown Author";
    })
  );

  console.log(`Title: ${book.title}`);
  console.log(`Description: ${book.description}`);
  console.log(`Authors: ${authorNames.join(", ")}`);
};

const promptUser = () => {
  rl.question("Enter a book title: ", async (title) => {
    await fetchBookAndAuthors(title);
    promptUser();
  });
};

promptUser();
