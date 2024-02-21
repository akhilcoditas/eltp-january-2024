const createLoanCalculator = (rateOfInterest) => [
    (principle, installments) => rateOfInterest * principle * installments / 100,
    (newRate) => rateOfInterest = newRate 
];


const [carLoanCalculator, updateCarRateOfInterest] = createLoanCalculator(8);
const [homeLoanCalculator, updateHomeROI] = createLoanCalculator(10);
const [personalLoanCalculator, updatePersonalROI] = createLoanCalculator(16);

homeLoanCalculator(20000, 6);
