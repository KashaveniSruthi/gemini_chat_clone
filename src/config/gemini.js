const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const runChat = async (prompt) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log("Full API response:", data);

    const text = data.candidates[0].content.parts[0].text;

    console.log("AI:", text);
    return text;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default runChat;