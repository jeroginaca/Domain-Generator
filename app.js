window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () => {
        
        document.querySelector("#domain").innerHTML = randomDomain();
    })
    

}


let randomDomain = () => {

    
    let pronoun = ["the", "our"];
    let adj = ['great', 'big' ];
    let noun = ['jogger','racoon'];
    let extension = ['.com','.net', '.us', '.io'];

    let proIndex = Math.floor(Math.random() * pronoun.length);
    let adjIndex = Math.floor(Math.random() * adj.length);
    let nounIndex = Math.floor(Math.random() * noun.length);
    let extIndex = Math.floor(Math.random() * extension.length);
    
    let result = pronoun[proIndex] +  adj[adjIndex] +  noun[nounIndex] + extension[extIndex] ;

    return(result);
    
}

