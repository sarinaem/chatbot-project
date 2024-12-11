import axios from "axios";

const API_KEY = "AIzaSyBu_BolUMVaxNo7eQh4UXolWfOy4mH3CYA";
const API_URL = "https://translation.googleapis.com/language/translate/v2"
const GiveData = async (text, targetLanguage) => {
  const response = await axios.post(
    `${API_URL}?key=${API_KEY}`,
    {
      q: text,
      target: targetLanguage,
    }
  );
  return response.data.data.translations[0].translatedText;
};

  export default GiveData;


