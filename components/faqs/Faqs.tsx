import React from 'react';
import styles from './Faqs.module.scss';

interface IFaqItem {
  key: number;
  title: string;
  content: string;
}

const Faqs: React.FC = () => {
  const faqData: IFaqItem[] = [
    {
      key: 1,
      title: 'Who is struggling with hunger in Allegan County?',
      content:
        'There are many vulnerable populations in our local community who are faced with hunger and housing issues, including senior citizens, children and veterans. 1 in 6 children suffer from hunger insecurity on a daily basis.',
    },
    {
      key: 2,
      title: 'How many individuals does Christian Neighbors serve monthly?',
      content:
        'We help nearly 1,000 individuals in the Martin, Otsego and Plainwell school districts each month.',
    },
    {
      key: 3,
      title: 'How is Christian Neighbors funded?',
      content:
        'The majority of our funds come from community donations – individuals, churches, businesses and others. We also receive limited grant funds from foundations and other agencies. We are a United Way Agency',
    },
    {
      key: 4,
      title: 'What area does Christian Neighbors serve?',
      content:
        'Food assistance is available for anyone residing in the Otsego or Plainwell school districts, including Alamo and Cooper. Emergency Financial Assistance is offered to residents of the Martin, Otsego, or Plainwell school districts, including Alamo and Cooper. Our Education Department does not have boundaries, anyone is encouraged to participate.',
    },
    {
      key: 5,
      title: 'Is Christian Neighbors a religious organization?',
      content:
        'Christian Neighbors is a faith based agency and we serve all people in need regardless of faith or lack thereof.',
    },
    {
      key: 6,
      title:
        'Does Christian Neighbors discriminate against those they serve or hire?',
      content:
        'Christian Neighbors is committed to a policy of non-discrimination in both its employment practices and the delivery of its program services. This agency will pursue a practice where the education, health and human service needs of residents within our service area are addressed without regard to age, race, religion, gender, sexual orientation, disability, national origin, or any other classification or category.',
    },
    {
      key: 7,
      title: 'Why is the need increasing even though the economy is improved?',
      content:
        'Many factors impact food and housing insecurity, including living wages, education, childcare and rising housing and healthcare costs. An improving economy does not always equate to lack of hardship.',
    },
    {
      key: 8,
      title:
        'How many pantry visits did Christian Neighbors give out to those in need last year?',
      content: 'In 2022, there were over 2,000 visits to our food pantry.',
    },
    {
      key: 9,
      title: 'Is Christian Neighbors a government agency?',
      content:
        'No, we are an independent nonprofit organization that is governed by a Board of Directors.',
    },
    {
      key: 10,
      title:
        'How much of my financial donation goes directly to help those in need?',
      content:
        'Christian Neighbors knows it is vitally important to be good stewards of the funds we receive. We are proud to say that ninety cents of every dollar we spend is spent directly on our programs and those in need.',
    },
    {
      key: 11,
      title: 'I thought Christian Neighbors was only a food pantry?',
      content:
        'Christian Neighbors also helps with emergency financial assistance, such as rent, utilities and prescriptions. We also have educational programs and classes to help individuals and families become more self-sufficient.',
    },
    {
      key: 12,
      title: 'What sets Christian Neighbors apart from other agencies?',
      content:
        'Christian Neighbors offers case management to our clients. We also offer other services such as a Veteran’s Assistance Officer, educational classes and our case managers are Department of Health & Human Services Navigators (DHHS). We provide multiple services all under one roof saving our clients from going place to place for multiple needs.',
    },
    {
      key: 13,
      title: 'What is the Education Department all about?',
      content:
        'Part of our mission to help our clients obtain self-sufficiency skills and to build a stronger community. Our education department offers several classes and programs to help with these skills. Some of these offerings include Take Control of Your Finances, budgeting skills, Matter of Balance and Organizational classes.',
    },
    {
      key: 14,
      title:
        'How does Christian Neighbors address hunger and housing issues on a larger scale?',
      content:
        'Our case managers stay up to date on policies, resources and programs that help those in need in our area. We participate in several initiative and programs at the local and county levels, including Continuum of Care, Allegan County Food Pantry Collaborative, SHAPE Housing Initiative, Kalamazoo Hunger Free Coalition, Matter of Balance, Emergency Food & Shelter Program, DHHS Navigation and others.',
    },
    {
      key: 15,
      title: 'Does Christian Neighbors need volunteers?',
      content:
        "Volunteers are an important part of our mission. We occasionally need volunteers to help with food drives, newsletters and other tasks. Give us a call if you'd like to help out.",
    },
    {
      key: 16,
      title: 'How can I stay informed about what is going on?',
      content:
        'Follow us on Facebook and Instagram. Christian Neighbors also sends out a newsletter 3 times a year. Please email your name and address to info@christianneighbors.org to receive the newsletter.',
    },
    {
      key: 17,
      title: 'How can I donate to Christian Neighbors?',
      content: 'Just click the donate button at the top of the page!',
    },
  ];

  return (
    <section className={styles.container}>
      <ul>
        {faqData.map((faq: IFaqItem) => (
          <li key={faq.key}>
            <h2>{faq.title}</h2>
            <p>{faq.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faqs;
