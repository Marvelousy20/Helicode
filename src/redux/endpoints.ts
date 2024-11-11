export const endpoints = {
  getCountry: "https://restcountries.com/v3.1/all",
  getState: (countryCode: any) =>
    `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
  getCourses: "course",
  getCyberSecurity: "course?name=Blockchain Cybersecurity",
  getTechnicalWriting: "course?name=Web3 Technical Writing",
  getMarketing: "course?name=Web3 Marketing",
  getCourseDetails: (course: string) => `course?name=${course}`,
  makePayment: "applications",
  newsletter: "/subscribers",
};
