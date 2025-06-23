export async function useDeveloperInfo() {
  try {
    const response = await fetch('http://localhost:3000/developer.json');
    if (!response.ok) {
      throw new Error('Failed to fetch developer.json');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching developer.json:', error);
    return null;
  }
}