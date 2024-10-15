type Trivia = {
    question : string;
    // answers : {
    //     ans1 : string;
    //     ans2 : string;
    //     ans3 : string;
    //     ans4 : string
    // }
    answers : string[];
    correctAnswer : string
};

export const replies : Trivia[] = [
    { 
        question : 'What is Kenya\'s capital city?',
        answers : ["Nairobi","Eldoret", "Mombasa","Kisumu"],
        correctAnswer : "Nairobi"
    },
    { 
        question : 'What is Kenya\'s official language?',
        answers : ["Swahili","French","Spanish","Congolese"],
        correctAnswer : "Swahili"
        
    },
    { 
        question : 'What is the highest mountain in Kenya?',
        answers : ["Mt.Kilimanjaro","Mt.Kenya","Mt.Suswa","Mt.Longonot"],
        correctAnswer: "Mt.Kenya"
    },
    { 
        question : 'What is the largest lake in Kenya?',
        answers : ["Lake Victoria","Lake Bogoria","Lake Nakuru","Lake Naivasha"],
        correctAnswer : "Lake Victoria"
          
    },
    { 
        question : 'What is Kenya\'s main cash crop export?',
        answers : ["Tea","Sisal","Maize","Pyrethrum"],
        correctAnswer : "Tea"
            
    },
    { 
        question : 'What is Kenya\'s main cash crop?',
        answers : ["Tea","Coffee","Sisal","flowers"],
        correctAnswer : "Tea"
    },
    { 
        question : 'What position is the ruler of Kenya called?',
        answers : ["President","Prime Minister","Seyyid","Chief"],
           correctAnswer: "President"
    },
    { 
        question : 'Where is the largest airport located in Kenya?',
        answers : ["Nairobi","Eldoret","Mombasa","Kisumu"],
        correctAnswer : "Nairobi"
    },
    { 
        question : 'Which of the following is a swamp in Kenya?',
        answers : ["Lorian","Bigodi","Ugalla","Palustrine"],
           correctAnswer : "Lorian"
    },
    { 
        question : 'Where is the KICC building located?',
        answers : ["Nairobi","Eldoret","Mombasa","Kisumu"],
        correctAnswer : "Nairobi"
    },

    
];