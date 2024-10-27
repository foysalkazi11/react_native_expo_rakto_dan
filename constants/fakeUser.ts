// Enum for user status
export const UsersStatsForDonateBlood = {
  Ready: "READY",
  NotReady: "NOT_READY",
  Promised: "PROMISED",
  WillBeReady: "WILL_BE_READY"
};

// Array of users
export const fakeUsers = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    address: "123 Main St, New York, NY",
    bloodGroup: "A+",
    mobileNumber: "+1234567890",
    DOB: "1990-05-15",
    userStatus: UsersStatsForDonateBlood.Ready,
    numOfDonation: 5,
    lastDonation: "2024-08-10",
    email: "john.doe@example.com"
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    address: "456 Elm St, Los Angeles, CA",
    bloodGroup: "O-",
    mobileNumber: "+1234567891",
    DOB: "1988-03-22",
    userStatus: UsersStatsForDonateBlood.NotReady,
    numOfDonation: 8,
    lastDonation: "2023-12-15",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Michael Johnson",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    address: "789 Oak St, Chicago, IL",
    bloodGroup: "B+",
    mobileNumber: "+1234567892",
    DOB: "1995-09-10",
    userStatus: UsersStatsForDonateBlood.Promised,
    numOfDonation: 3,
    lastDonation: "2024-05-22",
    email: "michael.johnson@example.com"
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    address: "321 Pine St, Houston, TX",
    bloodGroup: "AB+",
    mobileNumber: "+1234567893",
    DOB: "1992-11-30",
    userStatus: UsersStatsForDonateBlood.WillBeReady,
    numOfDonation: 10,
    lastDonation: "2024-07-01",
    email: "emily.davis@example.com"
  },
  {
    id: 5,
    name: "David Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    address: "654 Maple St, San Francisco, CA",
    bloodGroup: "A-",
    mobileNumber: "+1234567894",
    DOB: "1985-06-19",
    userStatus: UsersStatsForDonateBlood.Ready,
    numOfDonation: 12,
    lastDonation: "2024-01-05",
    email: "david.brown@example.com"
  },
  {
    id: 6,
    name: "Sophia Wilson",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    address: "987 Cedar St, Boston, MA",
    bloodGroup: "O+",
    mobileNumber: "+1234567895",
    DOB: "1993-04-11",
    userStatus: UsersStatsForDonateBlood.Promised,
    numOfDonation: 6,
    lastDonation: "2024-03-18",
    email: "sophia.wilson@example.com"
  },
  {
    id: 7,
    name: "Chris Evans",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    address: "213 Birch St, Miami, FL",
    bloodGroup: "B-",
    mobileNumber: "+1234567896",
    DOB: "1991-12-30",
    userStatus: UsersStatsForDonateBlood.NotReady,
    numOfDonation: 2,
    lastDonation: "2023-10-25",
    email: "chris.evans@example.com"
  },
  {
    id: 8,
    name: "Olivia Martinez",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    address: "432 Spruce St, Seattle, WA",
    bloodGroup: "AB-",
    mobileNumber: "+1234567897",
    DOB: "1997-09-07",
    userStatus: UsersStatsForDonateBlood.WillBeReady,
    numOfDonation: 4,
    lastDonation: "2024-06-14",
    email: "olivia.martinez@example.com"
  },
  {
    id: 9,
    name: "Liam Walker",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    address: "876 Cherry St, Denver, CO",
    bloodGroup: "O-",
    mobileNumber: "+1234567898",
    DOB: "1989-07-25",
    userStatus: UsersStatsForDonateBlood.Ready,
    numOfDonation: 9,
    lastDonation: "2024-02-28",
    email: "liam.walker@example.com"
  },
  {
    id: 10,
    name: "Mia Garcia",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    address: "109 Palm St, Austin, TX",
    bloodGroup: "A+",
    mobileNumber: "+1234567899",
    DOB: "1996-11-20",
    userStatus: UsersStatsForDonateBlood.Promised,
    numOfDonation: 7,
    lastDonation: "2024-04-05",
    email: "mia.garcia@example.com"
  }
];


