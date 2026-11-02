const UseGetTermsandPrivecy = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contents/privacyPolicy`);

  if (!response.ok) {
    throw new Error('Failed to fetch privacy policy');
  }

  return await response.json();
};

export default UseGetTermsandPrivecy;
