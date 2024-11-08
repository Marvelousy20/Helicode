// For all courses
interface Course {
  id: string;
  price: {
    USD: string;
    NGN: string;
  };
  recurrentPrice: {
    USD: string;
    NGN: string;
    frequency: number;
  };
  name: string;
  duration: string;
  startDate: string;
  cohort: string;
}

export interface AllCourses {
  data: Course[];
}

// export interface SingleCourse {
//   data: Course;
// }

export interface SingleCourse {
  id: string;
  price: {
    USD: string;
    NGN: string;
  };
  recurrentPrice: {
    USD: string;
    NGN: string;
    frequency: number;
  };
  name: string;
  duration: string;
  startDate: string;
  cohort: string;
}

export interface Single {
  data: SingleCourse[];
}

export interface Country {
  name: string;
  code: string;
}

//Payment type

export interface Payment {
  firstName: string;
  lastName: string;
  email: string;
  discordUserName: string;
  phoneNumber: string;
  ageRange: string;
  country: string;
  state: string;
  course: string;
  paymentType: string;
  paymentCurrency: string;
}
