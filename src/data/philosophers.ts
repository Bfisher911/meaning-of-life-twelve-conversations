export interface Philosopher {
    id: string;
    name: string;
    moduleTitle: string;
    chatbotUrl: string;
    summary: string;
    whyChoose: string;
}

export const philosophers: Philosopher[] = [
    {
        id: 'plato',
        name: 'Plato',
        moduleTitle: 'The Allegory of the Cave',
        chatbotUrl: 'https://box.boodle.ai/a/@Module1PlatoandtheAllegoryoftheCave',
        summary: 'Plato thinks you are staring at shadows on a cave wall, mistaking memes and trends for reality. Break your chains, step into the sunlight, and discover the true, eternal Forms of goodness and beauty.',
        whyChoose: 'Choose Plato if you suspect reality is an illusion and want to see what\'s behind the curtain.'
    },
    {
        id: 'aristotle',
        name: 'Aristotle',
        moduleTitle: 'The Good Life',
        chatbotUrl: 'https://box.boodle.ai/a/@Module2AristotleandtheGoodLife',
        summary: 'For Aristotle, life isn\'t about chasing temporary highs. It\'s about Eudaimonia—human flourishing. Find the "Golden Mean" between extremes, build good habits, and become a masterpiece of a human being.',
        whyChoose: 'Choose Aristotle if you want a practical, habit-based guide to living your absolute best life.'
    },
    {
        id: 'epictetus',
        name: 'Epictetus',
        moduleTitle: 'Stoic Freedom',
        chatbotUrl: 'https://box.boodle.ai/a/@Module3EpictetusandStoicFreedom',
        summary: 'You can\'t control the weather, the traffic, or what your ex texts you. Epictetus says: Stop trying. True freedom comes from mastering the only thing you actually control—your own mind and reactions.',
        whyChoose: 'Choose Epictetus if you\'re stressed out and need a bulletproof mindset to handle life\'s chaos.'
    },
    {
        id: 'augustine',
        name: 'Augustine',
        moduleTitle: 'The Restless Heart',
        chatbotUrl: 'https://box.boodle.ai/a/@Module4AugustineandtheRestlessHeart',
        summary: 'Augustine tried filling his inner void with parties, success, and romance, but nothing worked. He argues our hearts are inherently restless until they find meaning in something infinite and divine.',
        whyChoose: 'Choose Augustine if you\'ve ever felt that achieving your goals didn\'t actually bring you peace.'
    },
    {
        id: 'descartes',
        name: 'Descartes',
        moduleTitle: 'The Search for Certainty',
        chatbotUrl: 'https://box.boodle.ai/a/@Module5DescartesandtheSearchforCertainty',
        summary: 'What if everything you know is a dream manipulated by an evil demon? Descartes doubted absolutely everything until he hit bedrock: "I think, therefore I am." From that one undeniable spark, he rebuilt the universe.',
        whyChoose: 'Choose Descartes if you want to question absolutely everything and build your beliefs from scratch.'
    },
    {
        id: 'kant',
        name: 'Kant',
        moduleTitle: 'The Moral Law',
        chatbotUrl: 'https://box.boodle.ai/a/@Module6KantandtheMoralLaw',
        summary: 'No excuses, no exceptions. Kant believes the meaning of life is bound to our duty to the universal Moral Law. Treat people as ends in themselves, never as mere tools to get what you want.',
        whyChoose: 'Choose Kant if you believe in absolute right and wrong, and want a rigorous framework to prove it.'
    },
    {
        id: 'kierkegaard',
        name: 'Kierkegaard',
        moduleTitle: 'The Leap of Faith',
        chatbotUrl: 'https://box.boodle.ai/a/@Module7KierkegaardandtheLeapofFaith',
        summary: 'Logic can only take you so far. Kierkegaard insists that at some point, you have to embrace the beautiful, terrifying absurdity of existence and make a passionate "leap of faith" to find your subjective truth.',
        whyChoose: 'Choose Kierkegaard if you feel that authentic living requires risk, passion, and stepping into the unknown.'
    },
    {
        id: 'nietzsche',
        name: 'Nietzsche',
        moduleTitle: 'Self-Creation',
        chatbotUrl: 'https://box.boodle.ai/a/@Module8NietzscheandSelf-Creation',
        summary: 'God is dead, and the old rulebooks are burning. Nietzsche challenges you to become the "Übermensch" (Superman)—an artist of your own life who creates their own values and says a joyful "Yes!" to existence.',
        whyChoose: 'Choose Nietzsche if you want to rebel against conformity and forge your own destiny.'
    },
    {
        id: 'camus',
        name: 'Camus',
        moduleTitle: 'The Absurd',
        chatbotUrl: 'https://box.boodle.ai/a/@Module9CamusandtheAbsurd',
        summary: 'Life has no inherent meaning, and the universe doesn\'t care about you. Sounds depressing? Camus says it\'s actually liberating. Imagine Sisyphus smiling as he pushes that boulder. Rebellion and joy are the answer to the absurd.',
        whyChoose: 'Choose Camus if you want to find happiness and defiance in a universe that makes no sense.'
    },
    {
        id: 'sartre',
        name: 'Sartre',
        moduleTitle: 'Radical Freedom',
        chatbotUrl: 'https://box.boodle.ai/a/@Module10SartreandRadicalFreedom',
        summary: '"Existence precedes essence." You weren\'t born with a pre-written destiny. Sartre argues you are radically, inescapably free to define who you are through your choices. No excuses allowed.',
        whyChoose: 'Choose Sartre if you are ready to take 100% responsibility for the person you are choosing to become.'
    },
    {
        id: 'frankl',
        name: 'Viktor Frankl',
        moduleTitle: 'Meaning in Suffering',
        chatbotUrl: 'https://box.boodle.ai/a/@Module11ViktorFranklandMeaninginSuffering',
        summary: 'Surviving a concentration camp taught Frankl that we can\'t always choose our circumstances, but we can always choose our attitude. Meaning isn\'t handed to us; it is forged by how we respond to unavoidable suffering.',
        whyChoose: 'Choose Frankl if you want to learn how to find profound purpose even in your darkest moments.'
    },
    {
        id: 'beauvoir',
        name: 'Simone de Beauvoir',
        moduleTitle: 'Ethics of Freedom',
        chatbotUrl: 'https://box.boodle.ai/a/@Module12SimonedeBeauvoirandEthicsofFreedom',
        summary: 'Freedom isn\'t a solo project. De Beauvoir argues that your freedom is fundamentally bound to the freedom of others. To live an ethical and meaningful life, you must actively fight against the oppression of everyone.',
        whyChoose: 'Choose de Beauvoir if you believe true freedom means lifting others up alongside yourself.'
    }
];

export const oracle = {
    id: 'oracle',
    name: 'Oracle of Twelve Voices',
    chatbotUrl: 'https://box.boodle.ai/a/@TheOracleofTwelveVoices',
};
