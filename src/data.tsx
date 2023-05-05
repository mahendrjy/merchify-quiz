export const quiz = {
  title: 'The Merchify Company Quiz',
  description:
    "The Merchify Company Quiz test is to evaluate how well you have researched and understood the company you have applied to work for.  The topics covered in the Company Research Test are typically related to the company's history, products or services, organizational structure, mission and values, competitive landscape, financial performance, and industry trends It is important to be prepared before the taking the quiz. For that, read the company's website and social media channels, reviewing news articles and industry reports, and researching the backgrounds of key leaders or executives.  Overall, the Company Research Test is an opportunity for you to demonstrate your knowledge of the company and its industry, as well as your ability to think critically and communicate effectively. By preparing thoroughly and showing enthusiasm for the company, you can make a positive impression on the interviewer and increase your chances of being offered the job.",
  includes: [
    {
      id: 1,
      title: '50% Passing Percentage',
      icon: 'icon',
    },
    { id: 2, title: '5 Questions', icon: 'icon' },
    { id: 3, title: '1 Mins', icon: 'icon' },
  ],
  actions: [
    {
      id: 1,
      title: 'Leave a comment',
      icon: 'icon',
    },
    {
      id: 2,
      title: 'Save Quiz',
      icon: 'icon',
    },
    {
      id: 3,
      title: 'Challenge a Friend',
      icon: 'icon',
    },
  ],
  rules: [
    {
      id: 1,
      title: '1 Mins',
      description: "Keep in mind that it's a time-bound quiz.",
    },
    {
      id: 2,
      title: '4 Questions',
      description: 'We believe that you will ace it!',
    },
    {
      id: 3,
      title: '50% Passing Criteria',
      description: 'All the best! See you on the other side.',
    },
  ],
  questions: [
    {
      id: 1,
      title: 'What is Merchify?',
      options: [
        {
          id: 1,
          title: 'A platform for learning',
        },
        {
          id: 2,
          title:
            'A merch store for creators with zero investment',
        },
        {
          id: 3,
          title: 'A social media platform for influencers',
        },
        { id: 4, title: 'A fashion industry' },
      ],
      answer: 2,
    },
    {
      id: 2,
      title: 'What is the mission of Merchify?',
      options: [
        {
          id: 1,
          title: 'To reduce the textile wastage',
        },
        {
          id: 2,
          title: 'To create a healthy environment',
        },
        {
          id: 3,
          title: 'To empower creators to fuel their fandom',
        },
        {
          id: 4,
          title: 'To sell eco-friendly products',
        },
      ],
      answer: 3,
    },
    {
      id: 3,
      title: 'What are the core values of Merchify?',
      options: [
        {
          id: 1,
          title:
            'Own + grow, be better, partner up, embrace the pace',
        },
        {
          id: 2,
          title:
            'Be ethical, use eco-friendly products, reduce textile wastage',
        },
        {
          id: 3,
          title:
            'Connect with the customers, provide quality products',
        },
        {
          id: 4,
          title: 'None of the above',
        },
      ],
      answer: 1,
    },
    {
      id: 4,
      title: 'What kind of team is Merchify?',
      options: [
        {
          id: 1,
          title: 'A team of young and like-minded people',
        },
        {
          id: 2,
          title: 'A team of experienced professionals',
        },
        {
          id: 3,
          title: 'A team of fashion designers',
        },
        {
          id: 4,
          title: 'A team of educators',
        },
      ],
      answer: 1,
    },
  ],
  people: [
    { id: 1, color: 'bg-gray-600' },
    { id: 2, color: 'bg-purple-600' },
    { id: 3, color: 'bg-green-500' },
    { id: 4, color: 'bg-blue-600' },
    {
      id: 5,
      color: 'bg-purple-200',
      noOfPeople: 98,
    },
  ],
  ratings: {
    stars: 5,
    rating: '3 Ratings (5.0)',
  },
}
