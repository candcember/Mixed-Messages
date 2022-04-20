const randomMaterial = {
    luck: ["don't get out of bed!", "should put the lottery on!"],
    strength: ["hero mode", "don't even try", "better have another shake"],
    quotes:["Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover", "I have learned over the years that when one’s mind is made up, this diminishes fear.", "We are what we pretend to be, so we must be careful about what we pretend to be.", "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart"]
}

function generateRandomNum(num){
    return Math.floor(Math.random() * num)
}

const randomMessage = []

for (let prop in randomMaterial){
    let randomPropIndex = generateRandomNum(randomMaterial[prop].length)
    switch(prop){
        case 'luck': 
        randomMessage.push("Your luck level today suggests that you " + (randomMaterial[prop][randomPropIndex]))
        break
        case 'strength':
        randomMessage.push("If you are feeling like pullups today then be warned - " + (randomMaterial[prop][randomPropIndex]))
        break
        case 'quotes':
        randomMessage.push("And finally....here is your random inspirational quote for today - "+ (randomMaterial[prop][randomPropIndex]))
        break
        default:
        randomMessage.push("Error")
        
    }
}

console.log(randomMessage);
