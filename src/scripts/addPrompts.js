import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

const serviceAccount = JSON.parse(
  await readFile(new URL('../../serviceAccountKey.json', import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const addPrompts = async () => {
  const promptsRef = db.collection('prompts').doc('NHdNnSptRrnGvz4cW3sw');
  const batch = db.batch();

  const promptsWithCat = {
    "Phase 01. Visualization": [
      "What does financial freedom look and feel like for me? What do I see and hear around me? Who is with me? What emotions do I feel?",
      "What does generational wealth mean to me? What would it look and feel like? Who is around me?",
      "Goals don’t achieve people, people achieve goals. So what type of person do I have to be to achieve my goals? How would I describe how they act, talk, or think? Is there someone I know personally or have read about who is already achieving my income goals? What can I learn from them?",
      "How can I maintain a sense of abundance and gratitude even when I’m not experiencing financial success?",
      "In what ways do I currently view money as a source of stress or negativity in my life? In what ways do I view money as a source of joy and positivity?",
      "Exercise: Close your eyes and meditate on a future version of yourself where you have everything you’ve been striving for in terms of physical, mental, and spiritual wealth. What are your thoughts, feelings, and behaviors in this state? BONUS: Can you go about your present day and act as if you already are this person? What do you notice?",
      "If money was personified, what kind of relationship and attachment styles would I currently have with them? Do I have an anxious, avoidant, or disorganized relationship with money? Or is it secure, joyful, inspiring?",
      "How would I spend the “time wealth” that I would be afforded after having enough financial wealth?",
      "If I dig deeper, what am I really trying to buy or achieve, material or not, with my pursuit of wealth?",
      "Exercise: Say out loud to yourself, “I will make a million dollars.” Notice what objections come up and write them down as they arrive. Close your eyes and locate where these objections show up in your body. What are the sensations (tightness, coughing, burning, achey, etc)? What emotions are they tied to (burden, guilt, shame, fear, etc)? Come back to this prompt the next time you have any resistance to earning money, so you can track the patterns and messages that your body has for you."
      ],
    "Phase 02. Money Story": [
      "What were the money myths or stories that other people, books, movies, or music taught me growing up? How many of them actually reflect as truth in my life? How might they be influencing my financial decisions or behaviors?",
      "Exercise: Write a short story about your earliest or most meaningful memory involving money. How has that experience shaped your current relationship with money?",
      "What emotions or beliefs am I still holding onto that keep me from receiving abundance (e.g., feelings of unworthiness, fear of loss, fear of success, or scarcity mindset)?",
      "What expectations do I have when it comes to wealth and success? What kind of false narratives can I draw out of those expectations?",
      "When was there a time I felt abundant, even if I didn't have a lot of money? What life factors contributed to those feelings? How can I bring those feelings back into the present?",
      "Reflecting on a recent moment of financial stress or difficulty, what aspects of it can I reframe into abundance, positivity, or learning?",
      "What are some of the limiting beliefs, negative associations, or unproductive self-talk I have around money? How can I challenge those beliefs to reframe into a more positive mindset?",
      "Regarding my financial circumstances, what is something that I would be embarrassed to express or reveal? What about a personal belief around money? Or my habits and behaviors with money?",
      "Is there a part of me that doesn’t feel deserving of money? Whether I do or don’t, ask “why” 7 times to uncover the core of the negative or to serve as affirmations and reminders for the positive.",
      "What are some of the fears or anxieties that I have around money? What values are those emotions trying to teach me? On the other hand, how have they been misguiding me?",
      "When I think about any or all of the times I’ve lost or overspent money, how was I still able to recover from that? What does that teach me about how I handle money?",
      "Reflecting on my worst financial investments, what factors were both in and out of my control? For those that I could control, what would I do better next time? For those that were out of my control, how can I let go of the emotions surrounding them?",
      "If I were to zoom out and observe myself as someone else like a fly-on-the-wall, what advice would I give them to improve their beliefs around money?",
      "Exercise: Write a forgiveness letter dedicated to “money” for one of your past financial mistakes. Include what you can do to release the guilt, shame, or negative energy, as well as how to move forward with a sense of positivity and empowerment.",
      "If money wasn’t an obstacle, then what is the real story behind what’s holding me back from being the most abundant version of me? How can I unsubscribe from that narrative?",
      "With all the reflection from this “Money Story” section, how would I now re-write my ideal money story?"
      ],
    "Phase 03. Skills & Education": [
        "What educational resources (i.e. books, videos, people, etc.) can I engage in today to learn about budgeting, investing, or financial planning?",
        "What are some low-hanging fruits I can act on today to improve my skill in money management?",
        "The ability to earn money is closely correlated to the ability to communicate ideas and action. What kind of communication skills or education do I need to study in order to improve how I articulate my ideas and inspire action in a workplace or business setting?",
        "What are some timeless wealth habits I’ve heard, read, or experienced that will last through generations? Which of those habits can I lean more into? Which habits can I improve?",
        "What skills or education can I obtain to improve how I leverage or mitigate risk for wealth-building?",
        "Many times, the answer, knowledge, or solution is not a matter of ‘what’, but ‘who.’ So who can I reach out to help me learn financial literacy and wealth-building?",
        "Exercise: Draw 4 circles that all overlap in the middle. In each circle, brainstorm a list of ideas for 1) skills, 2) passions, 3) what the world needs, and 4) what you could be paid for. What job roles, companies, or businesses intersect with all 4 of those circles? Can you join or start one to improve your income streams and fulfillment at the same time?"
      ],
    "Phase 04. Personality & Identity": [
        "Money amplifies who I already am. So who am I now?",
        "What parts of my identity are aligned with a person who is skilled at earning, investing, and multiplying money? What parts are misaligned with that person? What do I need on a mental level to bridge the gap between my current self-image and an abundant self?",
        "When I reflect on how my past self had thought about or handled money, what are 5-10 adjectives to describe that version of me? For example, tumultuous, exciting, anxious, scarce, naive, ignorant, etc. If there were a lot of negative ones, have I considered how those labels affect what energies I emit? How can I start to detach from those labels?",
        "Regarding the Big Five Personality Traits (refer online for a summary or for a free personality test), how does my level of Conscientiousness affect my ability to save and budget effectively?",
        "Regarding the Big Five Personality Traits (refer online for a summary or for a free personality test), do I find that my Conscientious nature helps me make long-term financial plans, or does it lead to overly cautious decisions?",
        "(Refer online for a summary or for a free Big 5 Personality test). Have I ever noticed if my Extroverted side makes impulsive financial decisions? Or if my Introverted side holds me back from taking advantage of financial opportunities?",
        "(Refer online for a summary or for a free Big 5 Personality test). In what ways does my Extraversion impact my spending habits, especially related to social activities and experiences?",
        "(Refer online for a summary or for a free Big 5 Personality test). If I tend to have high Agreeableness, have I found it difficult to protect my own financial interests rather than over-accommodating for others? Is it worth readjusting and finding a balance for me?",
        "(Refer online for a summary or for a free Big 5 Personality test). How does my level of Agreeableness influence my financial negotiations and collaborations (i.e. being too Agreeable where the opportunity doesn’t work in my favor, or not Agreeable enough where I lose the opportunity altogether)?",
        "(Refer online for a summary or for a free Big 5 Personality test). How does my level of Openness impact my ability to explore diverse financial opportunities? Am I distracted by too many options, or am I pigeonholed into one basket?",
        "(Refer online for a summary or for a free Big 5 Personality test). How has my Emotional Stability or Instability affected my tolerance to weather financial stress or market volatility?",
        "(Refer online for a summary or for a free Big 5 Personality test). If I tend to be anxious (high Neuroticism), what steps can I take to maintain a calm and level-headed (low Neuroticism) approach in my financial decisions, especially ones that are high stakes?",
        "(Refer online for a summary or for a free Big 5 Personality test). If I tend to have low Neuroticism (i.e. positive self-opinion, emotionally stable, etc), in what ways have I underestimated potential financial risks due to over-confidence or willful ignorance of emotional warning signs?"
      ],
    "Phase 05. Introspection": [
        "What is my biggest financial goal and why is so important to me? Ask “why” 7 times to get deeper.",
      "What spiritual or existential questions do I have about the purpose of wealth and material possessions?",
      "What is the core nature behind my attachment to financial security? How is that either driving me or preventing me from reaching my financial goals?",
      "What emotions come up when I spend money? How can I cultivate more of the positive ones? What can I learn from the negative ones?",
      "What emotions come up for me every time I make money? How can I cultivate more of the positive ones? What can I learn from the negative ones?",
      "In what way does money provide value in my life? How can I give it more even more reverence?",
      "What is my relationship with debt? Is it more important for me to become debt-free, or to leverage debt with more intention?",
      "How can I cultivate a sense of trust and faith in my ability to earn money, while also releasing any anxiety I have about the ebb and flow of money?",
      "How can I cultivate a healthier sense of non-attachment around money so that it doesn’t take hold of my emotions and behaviors?",
      "Do I feel guilt or shame when I spend money on myself, whether it's large or small? Why or why not?",
      "In what ways has my pursuit of financial abundance been driven by external validation rather than inner fulfillment?",
      "The likelihood for creating lasting financial wealth depends on three dimensions: the physical, the mental, and the spiritual. The physical relates to income performance and spending habits. The mental relates to mindset and beliefs about money. The spiritual relates to the energy that is felt as money flows in and out. Regarding my current wealth status, which of these 3 dimensions are my strong points? Which are my weak points?",
        "Reflect on the recent triggers of stress, anxiety, fear, or worry when it comes to managing money. What new emotions, beliefs, or behaviors does it inspire?"
      ],
    "Phase 06. Family" : [
      "How has my family's legacy or cultural background influenced my current financial situation, whether positive or negative?",
      "How can I help or involve my family in the process of building generational wealth? Or how can I get out of their way?",
      "Why is generational wealth important for me, my family, and future generations? What would it do for them?",
      "How did my parents talk about or handle money? What beliefs or habits did I pick up? Which of those do I want to keep, and which do I want to avoid?",
      "On a spectrum between “guarded” and “open,” how would I talk about money and wealth with my children or future generations if the middle was not an option?",
        "What are the biggest financial challenges that my family faces, and how can I help overcome them?",
      "What advice, lessons, or values would I instill in the next generation about building wealth? How did those lessons show up in my own life and why are they important to me?"
      ],
    "Phase 07. Community" : [
      "In what ways do I currently give back to others with the money or resources I have today? How does that reflect what values I have?",
      "What are some examples where I displayed a “taker’s” mindset in my network or community? When did I display a “giver’s” mindset? What were the results of each?",
      "What opportunities do I have to give non-material things (i.e. time, space, love, kindness, etc.) to others?",
      "How can I utilize my money to bring joy and happiness to others?",
      "What steps can I take to ensure that my pursuit of financial stability and independence is mindful of the care and compassion for myself and others?",
      "How can I invite more financial conversations with others (such as family members, partners, or coworkers) with a sense of compassion, curiosity, and non-judgment?",
      "What role does generosity play in my overall sense of happiness and fulfillment? How can I prioritize more giving and service in my life, even when my financial resources may be limited?",
      "How can I add value to my network and connections to create more wealth-building opportunities?",
      "How can I cultivate a sense of joy and celebration around the financial successes and accomplishments of others?",
      "What is my relationship with giving and receiving money from others in general? If I’m honest with myself, how do I react when I give or receive money, i.e. as gifts from others, revenue from customers, paying bills, donating, etc.?",
      "How can I forgive the people who have wronged me financially, or at least let go of the negative feelings towards them so that they no longer own or control my future financial wellbeing?",
      "What are some philanthropic or generous initiatives that I can pursue while I’m building wealth?",
      "In what ways can I use my money to support causes or organizations that align with my values and make a positive impact on the world?",
      "When I increase the dollar amount in my conversations, I increase my ability to build wealth. What kind of communities do I need to surround myself with to start having bigger money talks?"
      ],
    "Phase 08. Planning & Foresight" : [
      "Personally, what are 5 of the most impactful financial goals for my spiritual wellbeing? Now, what if I choose the biggest, scariest, or most overwhelming one and reverse engineer the steps I need to reach that goal? And if I break that down, what is the first step I can take right now?",
      "What are the most significant challenges that I anticipate facing in my pursuit of building financial and spiritual wealth, and how can I prepare for them?",
      "How can I approach my financial goals with a sense of flexibility and adaptability as to not be too attached to a specific future outcome?",
      "What material and non-material possessions will contribute more to my overall sense of future happiness and well-being?",
      "What are some potential pitfalls of pursuing financial wealth at all costs? How can I avoid these pitfalls and find balance with other aspects of my life?",
      "What are some common financial mistakes I’ve seen people make when trying to build generational wealth and what would I do differently?",
      "When I take a moment to imagine myself on my death bed and reflecting on my accomplishments, what would I want to have achieved? What steps can I take now to make that a reality?",
      "When planning for my ideal financial picture, what is the gross monthly or annual income I would be satisfied with to live comfortably? What about the net income, after basic living expenses? For deeper thought, at what point would I feel that enough is enough?"
      ],
    "Phase 09. Habits" : [
      "In the times that I’ve become indecisive or procrastinated on something that would improve my finances (i.e. making an investment, doing the work to get a promotion, calling leads, etc.), what did I do instead?",
      "In what ways have I used money as a substitute for love, validation, or happiness? How are my behaviors impacted by this?",
      "How can I incorporate more joy, playfulness, or excitement around the daily earning and spending of my money?",
      "How can I practice mindfulness around my spending habits, especially when tempted to overspend or make impulsive purchases?",
      "What are some ways I can celebrate the money that comes in and make peace with the money that leaves?",
      "Where have I displayed a scarcity habit or behavior recently? How could I shift or reframe the thought or action into a more abundant one?",
      "What does the ideal physical “sacred money space” look like where I can dedicate financial planning time? Is this a specific room in my house, a coffee shop in my neighborhood or office workspace? How can I make it a habit to visit this space often for financial planning?",
      "What practices or habits can help me release stress and/or anxiety around money so I can approach my financial goals with a sense of ease and calm?",
      "What are some negative ways I cope with financial stress or uncertainty? What are some positive ways? How can I evaluate its impact on my personal finances and wellbeing with non-judgment?",
      "Do my money habits accurately reflect the type of the person I want to be? When I think about the type of person who can achieve my money goals, are these habits either empowering or weakening that person?",
      "What habits can I implement to cultivate peace and contentment in the present, rather than the regrets of the past or the anxiety of the future, regardless of my financial situation?"
      ],
    "Phase 10. Tactical" : [
      "What tools can help me make more informed and intentional choices with my money?",
      "Exercise: There are 4 levels of value: 1) Implementation - the ‘doer’, 2) Unification - the ‘manager’, 3) Communication - the ‘leader’, 4) Imagination - the ‘owner’. Your wealth exponentially increases by providing value in the third or fourth level. In your career or business, list where you can provide value through Communication or Imagination. What skills or knowledge do you need to promote yourself to those levels?",
      "Exercise: Download your most recent credit card or bank statement and determine all the different spending categories you’ve participated in. Then examine your latest paycheck and calculate what percentage of your paycheck is being allocated to each spending category. To the best of your ability, match each category with a personal core value in the previous exercise. What do these results tell you about how your spending habits align with your personal values? Are you spending too much on things you don’t care about vs not enough on things that are important to you?",
      "What are 10 things I will do when I have more money? Which of these can I actually do right now rather than waiting?",
      "What practice can I implement to help stay grounded and centered during times of financial stress?",
      "Exercise: Google search a list of core personal values. Write down 10 or so of the most important values that you resonate with. For each one, write a few words describing how money will help you live out each core value.",
      "What do I need to let go of (material or not) in order to build financial wealth? What steps can I take right now to start letting go? On the other end, what do I need more of? And what steps can I take right now to invite more of it? ",
      "What are some key measurements I use to evaluate my financial progress and success? Are these metrics aligned with my values and priorities?",
      "Exercise: Is there an additional income stream you’ve been wanting to start this year? Start with the goal and write down all the steps you need to make your first dollar. Continue boiling down those steps until it reveals one small step that you can take today. And now you also have a roadmap for tomorrow and on.",
      "What are a few free or paid experiences or habits I can pursue to cultivate a sense of curiosity, exploration, and an abundance mindset? Which two can I start this week in either my career, personal life, hobbies, etc.?",
      "What did I learn this month from finance books, podcasts, videos, mentors, coaches, etc. that I can implement now?",
      "After all of this deep reflection, what can I do now to make sure I’m able to access my inner financial and spiritual genius whenever I need it?"
      ]
  };

  batch.set(promptsRef, { promptsWithCat }, { merge: true });

  try {
    await batch.commit();
    console.log('Prompts added successfully!');
  } catch (error) {
    console.error('Error adding prompts:', error);
  }
};

addPrompts();