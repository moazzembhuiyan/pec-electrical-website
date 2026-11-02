const UseGetTermsCondition = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contents/termsAndConditions`);

  if (!response.ok) {
    throw new Error('Failed to fetch terms and conditions');
  }

  return await response.json();
};

export default UseGetTermsCondition;
