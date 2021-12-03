 const questions = [{
        "question": "What command do you use to commit using git?",
        "answer": "git commit"
    },
    {
        "question": "What is a popular package manager used for a mac?",
        "answer": "homebrew"
    },
    {
        "question": "What does the linux command ls do?",
        "answer": "list files in current directory"
    },
    {
        "question": "What OS is chocolatey used on?",
        "answer": "windows"
    },
    {
        "question": "What does mkdir do as a linux command?",
        "answer": "make a directory"
    },
    {
        "question": "What is a docker container?",
        "answer": "a isolated enviroment for running an app"
    },
    {
        "question": "How would you check your node version?",
        "answer": "node - v"
    },
    {
        "question": "What does virtual box software do?",
        "answer": "lets you create a virtual machine"
    },
    {
        "question": "What is docker?",
        "answer": "a platform for building running and shipping containers"
    },
    {
        "question": "What does CD linux command do?",
        "answer": "change directory"
    },
    {
        "question": "What GIT command would you use to create a directory ?",
        "answer": "git init"
    },
    {
        "question": "What is GIT?",
        "answer": "version control system"
    },
    {
        "question": "How would you add a comment 'Hello world!' in a javascript?",
        "answer": "//Hello world!"
    },
    {
        "question": "What is kubernetes used for?",
        "answer": "application deployment"
    },
    {
        "question": "What is the benifit to using kubernetes ?",
        "answer": "it automates checks on changes before deployment that would normally need to be performed manually"
    
    },
    {
        "question": "What is a Git hub repository ?",
        "answer": "a repository is a folder where you can store your project files and all their revision history."
    },
    {
        "question": "What are the 4 diffrent types of networks?",
        "answer": "LAN PAN MAN WAN"
    }]
    
     const values = Object.values(questions)

    const randomValue = values[parseInt(Math.random() * values.length)]
    
    
    
    let currentAnswer = randomValue.answer
   


 
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(randomValue.question, function(userAnswer) {
    
        console.log(`${userAnswer}`);
        if(userAnswer == randomValue.answer){
            console.log('Correct!')
        } else {
            console.log('Incorrect')
        }
         
        rl.close();
    });


rl.on("close", function() {
    console.log("run again for a new question");
    process.exit(0);
});