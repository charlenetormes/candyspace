export const generateRandomDecimalNumber = (max: number): number => {
    // Generate a random number between 1 and 5
    const rating = Math.random() * 1 + max; // Range between 1 and 5

    // Round to one decimal place
    return Math.round(rating * 10) / 10;
};

export const generateRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

export const formatNumberWithComma = (value: number): string => {
    return new Intl.NumberFormat("en-US").format(value);
};
