interface Config {
  provider: string;
  model: string;
  API_KEY: string;
}

interface ResumeFeedback {
  suggestions: string[];
  ATS_score: number;
}

export async function llm_inference(resumeDetails: string) {
  const config: Config = {
    provider: 'together', // Update this as per your config
    model: 'mixtral', // Update this as per your config
    API_KEY: 'db5702ff1316fa39f89dc962e7dd2a7b1496a05dff6f918b61399040fda835a6',
  };

  const endpoint = 'https://api.together.xyz/inference';
  
  const requestBody = {
    model: 'MISTRALAI/MIXTRAL-8X7B-INSTRUCT-V0.1', // Update this with your specific model
    prompt: `[INST] ${resumeDetails} [/INST]`,
    max_tokens: 2000,
    temperature: 0.7,
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${config.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const content = await response.json();
      return content.output.choices[0].text;
    } else {
      throw new Error(`Request failed with status code ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
}
